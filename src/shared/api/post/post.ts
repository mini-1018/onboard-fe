import { CreatePost } from "@/shared/types";
import { httpClient } from "../httpClient";

export const getPosts = async () => {
  const response = await httpClient.get("/posts");
  return response.data;
};

export const getPostById = async (id: string) => {
  const response = await httpClient.get(`/posts/${id}`);
  return response.data;
};

export const createPost = async (post: CreatePost) => {
  const response = await httpClient.post("/posts", post);
  return response.data;
};
