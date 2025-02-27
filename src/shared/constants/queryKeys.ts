import { GetPostsParams } from "../types";

export const QueryKeys = {
  POSTS: (params: GetPostsParams) => ["posts", { params }],
  MY_POSTS: (search?: string) => ["myPosts", { search }],
  COMMENTS: (postId: number) => ["comments", { postId }],
};
