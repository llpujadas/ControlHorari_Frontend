import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import {
  Form,
  useLoaderData,
  useFetcher,
  useNavigate,
  Link,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import { MdAdd, MdArrowBack } from "react-icons/md";
import {
  createUser,
  getAllUsers,
  getUserById,
} from "~/backend/controllers/user.controller.server";
import { NewUserDto, User } from "~/backend/models/User";

export async function loader({ request, params }: LoaderFunctionArgs) {
  const userId = params.userId;
  const [selectedUser, users] = await Promise.all([
    userId && getUserById(request, userId),
    getAllUsers(request),
  ]);

  return json({ selectedUser, users });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const newUser: NewUserDto = {
    email: formData.get("email") as string,
    fullName: formData.get("fullName") as string,
    password: formData.get("password") as string,
  };

  const res = await createUser(request, newUser); // Aquesta funció hauria de gestionar la creació de l'usuari a la base de dades

  return json({});
}

export default function Usuaris() {
  // LOADER =============================================
  const { selectedUser, users } = useLoaderData<{
    selectedUser: User;
    users: User[];
  }>();

  // HOOKS ==============================================
  const navigate = useNavigate();

  // STATES =============================================
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // EFFECTS =============================================
  useEffect(() => {
    if (selectedUser) {
      setFullName(selectedUser.fullName);
      setEmail(selectedUser.email);
    } else {
      setFullName("");
      setEmail("");
    }
  }, [selectedUser]);

  return (
    <div className="flex flex-col w-full h-full p-2 gap-2">
      <div className="flex flex-nowrap gap-2 w-full">
        <div className="title h-auto w-full flex items-center justify-center bg-gray-200 border border-gray-300 shadow-md p-2 rounded-xl">
          <h1 className="text-3xl font-semibold">Gestió d'Usuaris</h1>
        </div>
        <div className="flex w-auto items-center justify-center bg-gray-200 border border-gray-300 shadow-md p-2 rounded-xl">
          <Link to={"/dashboard"}>
            <button className="btn color-accent btn-sm">
              {" "}
              <MdArrowBack />
            </button>
          </Link>
        </div>
      </div>

      <div className="flex md:flex-nowrap flex-wrap w-full gap-2 max-h-[430px] h-[430px] relative">
        {/* Formulari per crear un nou usuari */}
        <div className="md:w-1/2 w-full bg-gray-200 border border-gray-300 p-2 rounded-xl shadow-md">
          <div className="flex justify-between title">
            <h1 className="text-3xl font-semibold">Alta d'usuari</h1>
            <button
              className="btn btn-sm color-accent"
              type="button"
              onClick={() => navigate("/users/management")}
            >
              <MdAdd />
            </button>
          </div>
          <div className="divider" />
          <Form method="post" action="." reloadDocument>
            <div className="mb-5">
              <label
                htmlFor="fullName"
                className="block text-gray-600 font-medium mb-2"
              >
                Nom complet
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="input input-md w-full"
                placeholder="Introdueix el teu nom complet"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium mb-2"
              >
                Correu electrònic
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-md w-full"
                placeholder="Introdueix el teu correu electrònic"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="password"
                className="block text-gray-600 font-medium mb-2"
              >
                Contrasenya
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-md w-full"
                placeholder="Introdueix la teva contrasenya"
                required
              />
            </div>

            <button type="submit" className="btn color-accent w-full">
              Crear usuari
            </button>
          </Form>
        </div>

        {/* Llista d'usuaris actuals */}
        <div className="md:w-1/2 w-full relative h-full">
          <div className="bg-gray-200 p-2 rounded-xl overflow-hidden h-full border border-gray-300 shadow-md">
            <h1 className="text-3xl font-semibold">Llistat d'usuaris</h1>
            <div className="divider" />
            <ul className="space-y-3 overflow-y-auto w-full h-[calc(100%-3rem)] p-1">
              {users.length > 0 ? (
                users.map((user) => (
                  <li
                    key={user.email}
                    onClick={() => navigate(`/users/management/${user.id}`)}
                    className="p-3 select-none cursor-pointer flex items-center hover:border hover:border-gray-500 bg-gray-100 rounded-lg justify-between hover:bg-gray-300 border transition-all hover:scale-[0.99]"
                  >
                    <span>{user.fullName}</span>
                    <span className="text-gray-500 text-sm">{user.email}</span>
                  </li>
                ))
              ) : (
                <p className="text-center text-gray-500">
                  No hi ha usuaris disponibles.
                </p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
