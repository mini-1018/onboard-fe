export interface Post {
  id: number;
  title: string;
  content: string;
  tags: { name: string }[];
  user: { id: string; name: string };
  likes: string[];
  createdAt: string;
  comments: string[];
}

export interface PostResponse {
  data: Post[];
  hasNextPage: boolean;
  nextCursor?: number;
}

export interface GetPostsParams {
  cursor?: number;
  limit?: number;
  tags?: string;
  search?: string;
  orderBy?: string;
}

export interface PostData {
  id?: number;
  title: string;
  content: string;
  tags?: string[];
}

export interface PostState {
  post: PostData | null;
  setPost: (post: PostData | null) => void;
  clearPost: () => void;
}
