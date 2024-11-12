// auth.controller.server.ts
import { handleFetch } from '../config/fetch-config'

interface AuthResponse {
  token: string;
}

export const authenticate = async (request : Request, email: string, password: string): Promise<string | undefined> => {
  const response = await handleFetch<any,  AuthResponse>({
    request,
    controller: 'auth',
    endpoint: '/login',
    method: 'POST',
    body: { email, password}
  });

  console.log(response);
  
  return response.data?.token;
};
