import { handleFetch } from "../config/fetch-config";
import { Checkin, CheckinDto } from "../models/Checkin";

export type ResponseGetCheckinDataSeleccionada = Checkin[];

// CREATE ================================================================================
export const createCheckin = async (request: Request, fitxada: CheckinDto): Promise<any> => {
  const response = await handleFetch<any>({
    request,
    controller: 'checkin',
    endpoint: `/create`,
    method: 'POST',
    body: fitxada,
  });
  return response.data!;
};

// READ ==================================================================================
export const getCheckin = async (request: Request, dataSeleccionada: string): Promise<ResponseGetCheckinDataSeleccionada> => {
  const response = await handleFetch<null, ResponseGetCheckinDataSeleccionada>({
    request,
    controller: 'checkin',
    endpoint: `/get?dataSeleccionada=${dataSeleccionada}`,
    method: 'GET',
  });
  return response.data!;
};