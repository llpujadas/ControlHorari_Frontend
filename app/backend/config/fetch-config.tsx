import { BASE_URL } from "./config";
import { getToken } from "./session.config";

export interface FetchParams<T> {
  request: Request;
  controller: string;
  endpoint: string;
  method?: string;
  headers?: HeadersInit;
  body?: T;
  removeContentType?: boolean;
}

export interface FetchResponse<R> {
  data?: R;
  error?: string;
}

export async function handleFetch<T, R = any>({
  request,
  controller,
  endpoint,
  method = "GET",
  headers = {},
  body,
  removeContentType = false,
}: FetchParams<T>): Promise<FetchResponse<R>> {
  const url = `${BASE_URL}/${controller}${endpoint}`;
  let token: string | null = "";

  if (request) {
    token = await getToken(request);
  }

  let bodyData: FormData | string;
  if (body instanceof FormData) {
    bodyData = body;
  } else {
    bodyData = JSON.stringify(body);
  }
  
  try {
    const response = await fetch(url, {
      method,
      headers: {
        ...(removeContentType ? {} : { "Content-Type": "application/json" }),
        Authorization: token ? `Bearer ${token}` : "",
        ...headers,
      },
      body: method === "GET" || method === "HEAD" ? undefined : bodyData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      
      return {
        error: `Error: ${response.status} ${response.statusText} - ${errorText}`,
      };
    }

    const data: R = await response.json();

    return { data };
  } catch (error) {
    return { error: (error as Error).message };
  }
}
