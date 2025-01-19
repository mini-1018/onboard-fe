import { GetPostsParams } from "../types";

export const QueryKeys = {
  POSTS: (params: GetPostsParams) => ["posts", { params }],
};
