import { CreatePost, GetPostsParams } from "@/shared/types";
import { axiosInstance } from "@/shared/api/axios";

export const getPosts = async (params?: GetPostsParams) => {
  const response = await axiosInstance.get("/posts", { params });
  return response.data;
};

export const getPostById = async (id: string) => {
  const response = await axiosInstance.get(`/posts/${id}`);
  return response.data;
};

export const createPost = async (post: CreatePost) => {
  const response = await axiosInstance.post("/posts", post);
  return response.data;
};
