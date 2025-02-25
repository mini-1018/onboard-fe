import { RequestError } from "@/shared/types/error.type";

export const customError = ({
  statusCode,
  message,
  endpoint,
}: RequestError) => {
  const error = new Error() as Error & RequestError;
  error.message = message;
  error.statusCode = statusCode;
  error.endpoint = endpoint;

  return error;
};
