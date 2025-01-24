import { getPostById } from "@/entities/post/api/post";
import { RouteParams } from "@/shared/types";
import PostMainContent from "./PostMainContent";

export async function generateMetadata({ params }: { params: RouteParams }) {
  const { id } = await params;
  const post = await getPostById(id);
  return {
    title: post.title,
    description: post.content,
    openGraph: {
      title: post.title,
      description: post.content,
      type: "article",
    },
  };
}

export default async function Post({ params }: { params: RouteParams }) {
  const { id } = await params;
  const post = await getPostById(id);
  return <PostMainContent post={post} />;
}
