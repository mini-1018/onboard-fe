import { getPosts } from "@/shared/api/post/post";
import PostList from "./PostList";

export default async function Posts() {
  const posts = await getPosts();
  return <PostList posts={posts} />;
}
