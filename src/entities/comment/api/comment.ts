import { request } from "@/shared/api/request";
import { CreateComment, UpdateComment } from "@/shared/types/comment.type";

export const createComment = async (comment: CreateComment) => {
  return request("post", "/comments", comment);
};

export const getComments = async (postId: number) => {
  return request("get", `/posts/${postId}/comments`);
};

export const updateComment = async (id: number, comment: UpdateComment) => {
  return request("patch", `/comments/${id}`, comment);
};

export const deleteComment = async (id: number) => {
  return request("delete", `/comments/${id}`);
};
