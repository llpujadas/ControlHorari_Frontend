import { MdArrowBack, MdArrowForward, MdLogout } from "react-icons/md";
import { DatePicker } from "~/components/Custom/DatePicker";
import { useEffect, useState } from "react";
import { Form, json, useFetcher } from "react-router-dom";
import clsx from "clsx";
import {
  formatDataSeleccionada,
  formatDateString,
  formatTimeString,
} from "~/lib/date.utils";
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
} from "@remix-run/server-runtime";
import { createCheckin } from "~/backend/controllers/checkin.controller.server";
import { Checkin, CheckinDto } from "~/backend/models/Checkin";
import LoaderComponent from "~/components/Loader/Loader";
import { toast } from "~/hooks/use-toast";
import { commitSession, getSession } from "~/backend/server/session.server";
import { Link, useLoaderData } from "@remix-run/react";
import { FiLogOut } from "react-icons/fi";

export async function action({ request, params }: ActionFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  const fitxada: CheckinDto = {
    userId: 1,
    checkinType: "SORTIDA",
    latitud: "20.12.12",
    longitud: "10.12.12",
    deviceInfo: "MACOS LLUIS",
  };

  const res = await createCheckin(request, fitxada);

  session.flash("fitxadaInserida", "fitxadaInserida");
  return json(".", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export async function loader({ request, params }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const fitxadaInserida = session.get("fitxadaInserida") || null;

  // Commit the session to remove the error
  const headers = new Headers();
  if (fitxadaInserida) {
    session.unset("fitxadaInserida");
    headers.append("Set-Cookie", await commitSession(session));
  }

  return json({ fitxadaInserida }, { headers });
}

type HoresMinutsType = {
  hores: number;
  minuts: number;
};

export default function Dashboard() {
  // LOADER ========================================
  const { fitxadaInserida } = useLoaderData<{
    fitxadaInserida: any;
  }>();

  // HOOKS =========================================
  const fetcher = useFetcher();

  // STATES ========================================
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [registreFitxades, setRegistreFitxades] = useState<Checkin[]>([]);
  const [horesMinutsTotals, setHoresMinutsTotals] = useState<HoresMinutsType>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // CONSTS =========================================
  const now = new Date();
  const isToday: boolean = date?.getDay() == now.getDay();

  // FUNCTIONS ======================================
  function calcularHoresTreballades() {
    // Filtrar registros de entrada y salida
    const entradas = registreFitxades.filter(
      (record) => record.checkinType === "ENTRADA"
    );
    const salidas = registreFitxades.filter(
      (record) => record.checkinType === "SORTIDA"
    );

    const totalPairs = Math.min(entradas.length, salidas.length);

    let totalTimeWorkedMs = 0;
    for (let i = 0; i < totalPairs; i++) {
      const entradaTime: any = new Date(entradas[i].timestamp);
      const salidaTime: any = new Date(salidas[i].timestamp);
      totalTimeWorkedMs += salidaTime - entradaTime; // Diferencia en milisegundos
    }

    const totalHours = Math.floor(totalTimeWorkedMs / (1000 * 60 * 60));
    const totalMinutes = Math.floor(
      (totalTimeWorkedMs % (1000 * 60 * 60)) / (1000 * 60)
    );

    setHoresMinutsTotals({ hores: totalHours, minuts: totalMinutes });
  }

  // EFFECTS ========================================
  useEffect(() => {
    setIsLoading(true);
    fetcher.load(
      `/resources/checkin?dataSeleccionada=${formatDataSeleccionada(date!)}`
    );
  }, [date]);

  useEffect(() => {
    if (fetcher.data) {
      setRegistreFitxades(fetcher.data as Checkin[]);
      setIsLoading(false);
    }
  }, [fetcher]);

  useEffect(() => {
    calcularHoresTreballades();
  }, [registreFitxades]);

  useEffect(() => {
    toast({
      description: "La fitxada s'ha guardat correctament.",
    });
  }, [fitxadaInserida]);

  return (
    <>
      <Form method="POST" action=".">
        <div className="h-screen flex-col gap-2 w-full flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-300">
          <div className="relative p-4">
            <div className="bg-white shadow-lg h-[500px] w-auto rounded-2xl p-6">
              <h1 className="text-2xl font-semibold text-gray-800 text-center">
                Registre de Fitxades
              </h1>

              <div className="absolute tabsolute top-2 right-1">
                <Link to={"/logout"}>
                  <button className="btn color-accent opacity-80 hover:opacity-100 transition-all btn-circle flex items-center justify-center">
                    <FiLogOut />
                  </button>
                </Link>
              </div>

              {/* Temps total */}
              <div className="join flex items-center justify-center p-2 select-none py-4">
                <div className="color-accent text-white rounded-full px-4 py-2 join-item shadow-md text-lg font-medium">
                  {horesMinutsTotals?.hores} hores
                </div>
                <div className="color-accent text-white rounded-full px-4 py-2 join-item shadow-md text-lg font-medium">
                  {horesMinutsTotals?.minuts} minuts
                </div>
              </div>

              <div id="fitxar" className="w-full pb-2">
                <button
                  id="btn-fitxar"
                  name="fitxar"
                  className="btn color-accent w-full text-white"
                  disabled={!isToday}
                >
                  {`Fitxar ${
                    registreFitxades.length == 0
                      ? "entrada"
                      : registreFitxades[registreFitxades.length - 1]
                          .checkinType == "ENTRADA"
                      ? "sortida"
                      : "entrada"
                  }`}
                </button>
              </div>

              {/* Filtratge per dates */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <p className="text-gray-700">Filtratge per dates:</p>
                <DatePicker date={date} setDate={setDate} />
              </div>

              {/* Taula */}
              <div className="overflow-x-auto bg-gray-50 rounded-lg shadow-inner">
                {isLoading ? (
                  <LoaderComponent />
                ) : (
                  <div className="w-full max-h-[230px] ">
                    <table className="table h-full w-full text-left text-gray-700">
                      <thead className="bg-gray-200 text-gray-600">
                        <tr>
                          <th className="py-2 px-4">Núm.</th>
                          <th className="py-2 px-4">Hora</th>
                          <th className="py-2 px-4">Tipus</th>
                        </tr>
                      </thead>
                      <tbody>
                        {registreFitxades.length <= 0 ? (
                          <tr>
                            <th className="w-full h-full" colSpan={3}>
                              <p className="flex items-center justify-center select-none">
                                No hi ha dades disponibles
                              </p>
                            </th>
                          </tr>
                        ) : (
                          registreFitxades.map((rf, index) => {
                            return (
                              <tr key={index} className="border-t">
                                <th className="py-3 px-4 font-normal">
                                  {index + 1}
                                </th>
                                <td className="py-3 px-4">
                                  {formatDateString(rf.timestamp)} a les{" "}
                                  {formatTimeString(rf.timestamp)}h
                                </td>
                                <td
                                  className={clsx(
                                    "py-3 px-4",
                                    rf.checkinType == "ENTRADA"
                                      ? "text-green-500"
                                      : "text-red-500"
                                  )}
                                >
                                  {rf.checkinType == "ENTRADA" ? (
                                    <MdArrowForward />
                                  ) : (
                                    <MdArrowBack />
                                  )}
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
}
