"use client";
import Image from "next/image";
import {
  stripMarkdown,
  extractFirstImage,
} from "@/shared/editor/markdown.util";
import { Post } from "@/shared/types";
import Link from "next/link";

export default function PostTemplate({
  post,
}: {
  post: Post;
}): React.ReactNode {
  const { title, content, user, likes, createdAt, comments, id } = post;
  return (
    <Link href={`/posts/${id}`}>
      <div className="flex flex-col items-center justify-center w-[340px] h-[400px] rounded-lg shadow-primary">
        <div className="relative w-full h-[200px] rounded-t-lg overflow-hidden">
          <Image
            src={extractFirstImage(content)}
            alt="게시글 이미지"
            fill
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-between w-full h-[200px] p-4">
          <h1 className="text-[16px] font-bold line-clamp-1">{title}</h1>
          <p className="text-[12px] line-clamp-3">{stripMarkdown(content)}</p>
          <div className="flex justify-between w-full">
            <p className="text-[14px]">by {user.name}</p>
            <p className="text-[14px]">❤️ {likes.length}</p>
          </div>
          <div className="flex justify-between w-full">
            <p className="text-[14px]">{createdAt}</p>
            <p className="text-[14px]">💬 {comments.length}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
