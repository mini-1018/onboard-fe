import { getPostById } from "@/entities/post/api/post";
import PostMainContent from "./PostMainContent";
import { Metadata } from "next";

interface PageParams {
  id: string;
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const post = await getPostById(params.id);
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

export default async function Page({ params }: { params: PageParams }) {
  const post = await getPostById(params.id);
  return <PostMainContent post={post} />;
}
