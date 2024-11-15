// auth.controller.server.ts
import { handleFetch } from '../config/fetch-config'

interface AuthResponse {
  token: string;
}

// CREATE ==============================================================================================================
export const authenticate = async (request : Request, email: string, password: string): Promise<string | undefined> => {
  const response = await handleFetch<any,  AuthResponse>({
    request,
    controller: 'auth',
    endpoint: '/login',
    method: 'POST',
    body: { email, password }
  });
  
  return response.data?.token;
};
