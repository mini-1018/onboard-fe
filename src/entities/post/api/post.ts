import { GetPostsParams, PostData } from "@/shared/types";
import { request } from "@/shared/api/request";

export const getPosts = async (params?: GetPostsParams) => {
  return request("get", "/posts", undefined, { params });
};

export const getPostsByUserId = async (
  userId: number,
  params: GetPostsParams
) => {
  return request("get", `/users/${userId}/posts`, undefined, { params });
};

export const getPostById = async (id: string) => {
  return request("get", `/posts/${id}`);
};

export const createPost = async (post: PostData) => {
  return request("post", "/posts", post);
};

export const updatePost = async (post: PostData) => {
  return request("patch", "/posts", post);
};

export const deletePost = async (id: string) => {
  return request("delete", `/posts/${id}`);
};
