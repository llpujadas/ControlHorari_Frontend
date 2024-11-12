import { LoaderFunctionArgs, json } from "react-router";
import { getCheckin } from "~/backend/controllers/checkin.controller.server";

export async function loader({ request, params } : LoaderFunctionArgs){
    const url = new URL(request.url);
    const dataSeleccionada = url.searchParams.get("dataSeleccionada") as string;
    const checkin = await getCheckin(request,dataSeleccionada);
    return json([...checkin]);
}