import PostTemplate from "@/shared/components/PostTemplate";
import { Post } from "@/shared/types";
import Link from "next/link";

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="grid grid-cols-5 items-center justify-center gap-x-[14px] gap-y-[20px]">
      {posts.map((post: Post) => (
        <Link href={`/posts/${post.id}`}>
          <PostTemplate key={post.id} post={post} />
        </Link>
      ))}
    </div>
  );
}
