import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Post } from "@/shared/types";
import PostDropdown from "./PostDropdown";
import PostComments from "./PostComments";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";

export default async function PostMainContent({ post }: { post: Post }) {
  const session = await getServerSession(authOptions);
  const sessionId = session?.user?.id;

  return (
    <div className="w-[100%] flex items-center justify-center">
      <div className="w-[50%] flex flex-col items-left">
        <div className="flex justify-between items-center w-full">
          <h1>{post.title}</h1>
          {sessionId === post.user.id && <PostDropdown post={post} />}
        </div>
        <div className="flex justify-between w-full">
          <div className="flex gap-x-[10px]">
            <p>by {post.user.name}</p>
            <p>|</p>
            <p>{new Date(post.createdAt).toLocaleDateString()}</p>
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
        <div>
          <PostComments
            comment={post.comments}
            userId={post.user.id}
            postId={post.id}
          />
        </div>
      </div>
    </div>
  );
}
