import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Post } from "@/shared/types";

export default function PostMainContent({ post }: { post: Post }) {
  return (
    <div className="w-[100%] flex items-center justify-center">
      <div className="w-[50%] flex flex-col items-left">
        <h1>{post.title}</h1>
        <div className="flex justify-between w-full">
          <div className="flex gap-x-[10px]">
            <p>by {post.user.name}</p>
            <p>|</p>
            <p>{post.createdAt}</p>
          </div>
          <p>❤️ {post.likes.length}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-5 mb-2 border-b border-primary pb-5">
          {post.tags.map((tag, index) => (
            <p
              key={index}
              className="flex items-center gap-1 px-2 py-0.5 bg-gray hover:bg-yellow rounded-md text-sm text-primary transition-colors"
            >
              {tag.name}
            </p>
          ))}
        </div>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
      <div>
        {post.comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
    </div>
  );
}
