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

export interface CreatePost {
  title: string;
  content: string;
  tags?: string[];
}
