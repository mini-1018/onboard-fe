import { redirect } from "next/navigation";
import { axiosInstance } from "./axios";
import { customError } from "./error/customError";
import { errorMessage } from "./error/errorMessage";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface RequestConfig {
  params?: Record<string, any>;
  headers?: Record<string, string>;
}

interface ErrorResponse {
  statusCode: number;
  errorCode: string;
  timestamp: string;
  path: string;
}

export async function request<T>(
  method: Lowercase<HttpMethod>,
  endpoint: string,
  data?: any,
  config?: RequestConfig
) {
  try {
    const response = await (method === "get" || method === "delete"
      ? axiosInstance[method](endpoint, { ...config })
      : axiosInstance[method](endpoint, data, { ...config }));

    return response.data;
  } catch (error: any) {
    const errorData = error.response.data as ErrorResponse;

    if (errorData.statusCode === 429) {
      redirect("/error?code=429");
    }

    const customErr = customError({
      statusCode: errorData.statusCode,
      message: errorMessage[errorData.statusCode][errorData.errorCode],
      endpoint: endpoint,
    });
    throw customErr;
  }
}
