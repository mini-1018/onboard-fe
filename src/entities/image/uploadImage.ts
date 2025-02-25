import { request } from "@/shared/api/request";

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  return request("post", "/images", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
