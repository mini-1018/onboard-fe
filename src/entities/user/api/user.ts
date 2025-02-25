import { Signin } from "@/shared/types/user.type";
import { request } from "@/shared/api/request";

export const signin = async ({ email, password }: Signin) => {
  return request("post", "/users/signin", {
    email,
    password,
  });
};

export const signup = async (formData: FormData) => {
  return request("post", "/users/signup", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updateUser = async (formData: FormData) => {
  return request("patch", "/users/update", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteUser = async () => {
  return request("delete", "/users/delete");
};
