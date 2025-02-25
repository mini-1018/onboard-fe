import { request } from "@/shared/api/request";

export const toggleLike = async (postId: number, userId: number) => {
  return request("post", `/likes/${postId}`, { userId });
};
