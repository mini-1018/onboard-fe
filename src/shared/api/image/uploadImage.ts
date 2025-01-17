import { httpClient } from "@/shared/api/httpClient";

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await httpClient.post("/images", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
