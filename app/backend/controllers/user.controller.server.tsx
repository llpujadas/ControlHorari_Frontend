import { handleFetch } from "../config/fetch-config";
import { NewUserDto, User } from "../models/User";

export type ResponseCreateUpdateUser = User;
export type ResponseGetAllUsers = User[];
export type ResponseGetUser = User;

// CREATE ================================================================================
export const createUpdateUser = async (request: Request, user: NewUserDto): Promise<ResponseCreateUpdateUser> => {
  const response = await handleFetch<NewUserDto, ResponseCreateUpdateUser>({
    request,
    controller: 'user',
    endpoint: `/upsert`,
    method: 'POST',
    body: user,
  });
  return response.data!;
};

// READ ==================================================================================
export const getAllUsers = async (request: Request): Promise<ResponseGetAllUsers> => {
  const response = await handleFetch<null, ResponseGetAllUsers>({
    request,
    controller: 'user',
    endpoint: `/all`,
    method: 'GET',
  });
  return response.data!;
};

export const getUserById = async (request: Request, userId: string | number): Promise<ResponseGetUser> => {
  const response = await handleFetch<null, ResponseGetUser>({
    request,
    controller: 'user',
    endpoint: `/${userId}`,
    method: 'GET',
  });
  return response.data!;
};