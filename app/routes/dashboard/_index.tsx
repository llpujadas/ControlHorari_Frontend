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
import {
  createCheckin,
  getCheckin,
} from "~/backend/controllers/checkin.controller.server";
import { Checkin, CheckinDto } from "~/backend/models/Checkin";
import LoaderComponent from "~/components/Loader/Loader";
import { toast } from "~/hooks/use-toast";
import { commitSession, getSession } from "~/backend/server/session.server";
import { Link, useLoaderData } from "@remix-run/react";
import { FiLogOut, FiUsers } from "react-icons/fi";
import { useNavigate } from "@remix-run/react";

type HoresMinutsType = {
  hores: number;
  minuts: number;
};

interface Coordinates {
  latitude: number;
  longitude: number;
}

// ACTION ========================================================
export async function action({ request, params }: ActionFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const formData = await request.formData();
  const checkin = formData.get("checkin") as string;
  const newCheckin = JSON.parse(checkin) as CheckinDto;

  const res = await createCheckin(request, newCheckin);

  session.flash("fitxadaInserida", "fitxadaInserida");
  return json(".", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

// LOADER ========================================================
export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const fitxadaInserida = session.get("fitxadaInserida") || null;
  const dateParams = new URL(request.url).searchParams.get("date");
  let date: Date = new Date();

  if (dateParams) {
    date = new Date(dateParams);
  }

  const todayCheckin = await getCheckin(request, formatDataSeleccionada(date));
  
  const headers = new Headers();
  if (fitxadaInserida) {
    session.unset("fitxadaInserida");
    headers.append("Set-Cookie", await commitSession(session));
  }

  return json({ fitxadaInserida, todayCheckin }, { headers });
}

export default function Dashboard() {
  // LOADER ========================================
  const { fitxadaInserida, todayCheckin } = useLoaderData<{
    fitxadaInserida: any;
    todayCheckin: Checkin[];
  }>();

  // HOOKS =========================================
  const fetcher = useFetcher();
  const navigate = useNavigate();

  // STATES ========================================
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [registreFitxades, setRegistreFitxades] = useState<Checkin[] | []>(todayCheckin);
  const [horesMinutsTotals, setHoresMinutsTotals] = useState<HoresMinutsType>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // CONSTS =========================================
  const now = new Date();
  const isToday: boolean = date?.getDay() == now.getDay();

  // FUNCTIONS ======================================
  function calcularHoresTreballades() {
    const entrades = registreFitxades.filter(
      (record) => record.checkinType === "ENTRADA"
    );
    const sortides = registreFitxades.filter(
      (record) => record.checkinType === "SORTIDA"
    );

    const totalPairs = Math.min(entrades.length, sortides.length);

    let totalTimeWorkedMs = 0;
    for (let i = 0; i < totalPairs; i++) {
      const entradaTime: any = new Date(entrades[i].timestamp);
      const sortidaTime: any = new Date(sortides[i].timestamp);
      totalTimeWorkedMs += sortidaTime - entradaTime;
    }

    const totalHours = Math.floor(totalTimeWorkedMs / (1000 * 60 * 60));
    const totalMinutes = Math.floor(
      (totalTimeWorkedMs % (1000 * 60 * 60)) / (1000 * 60)
    );

    setHoresMinutsTotals({ hores: totalHours, minuts: totalMinutes });
  }

  async function insertNewCheckin() {
    const ua = navigator.userAgent;
    const { latitude, longitude } = await getCoords();

    const checkin: CheckinDto = {
      userId: 1,
      checkinType: "ENTRADA",
      deviceInfo: ua,
      latitud: String(latitude),
      longitud: String(longitude),
    };

    if (!fetcher) return;

    const formData = new FormData();
    formData.append("checkin", JSON.stringify(checkin));

    fetcher.submit(formData, { method: "POST", action: "." });
  }

  async function getCoords(): Promise<Coordinates> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log({ latitude, longitude });
          resolve({ latitude, longitude });
        },
        (error) => {
          console.error(error);
          reject(error);
        }
      );
    });
  }

  // EFFECTS ========================================
  useEffect(() => {
    if (!date) return;
    navigate(`?date=${formatDataSeleccionada(date)}`)
  }, [date]);

  useEffect(() => {
    setRegistreFitxades(todayCheckin);
    setIsLoading(false);
  }, [todayCheckin]);

  useEffect(() => {
    if (!fitxadaInserida) return;
    toast({
      description: "La fitxada s'ha guardat correctament.",
    });
  }, [fitxadaInserida]);

  useEffect(() => {
    calcularHoresTreballades();
  }, [registreFitxades])

  return (
    <>
      <Form>
        <div className="h-screen flex-col gap-2 w-full flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-300">
          <div className="relative p-4">
            <div className="bg-white shadow-lg h-[500px] w-auto rounded-2xl p-6">
              <h1 className="text-2xl font-semibold text-gray-800 text-center">
                Registre de Fitxades
              </h1>

              <div className="absolute tabsolute top-2 right-1">
                <Link to={"/logout"}>
                  <button className="btn color-error opacity-80 hover:opacity-100 transition-all btn-circle flex items-center justify-center">
                    <FiLogOut className="text-white" />
                  </button>
                </Link>
              </div>

              <div className="absolute tabsolute top-16 right-1">
                <Link to={"/users/management"}>
                  <button className="btn color-accent opacity-80 hover:opacity-100 transition-all btn-circle flex items-center justify-center">
                    <FiUsers className="text-white" />
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
                  type="button"
                  id="btn-fitxar"
                  name="fitxar"
                  className="btn color-accent w-full text-white"
                  disabled={!isToday}
                  onClick={() => insertNewCheckin()}
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
