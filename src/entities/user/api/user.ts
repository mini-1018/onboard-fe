import { axiosInstance } from "@/shared/api/axios";
import { Signin } from "@/shared/types/user.type";

export const signin = async ({ email, password }: Signin) => {
  const response = await axiosInstance.post("/users/signin", {
    email,
    password,
  });
  return response.data;
};
