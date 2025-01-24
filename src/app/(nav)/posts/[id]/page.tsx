import { getPostById } from "@/entities/post/api/post";
import PostMainContent from "./PostMainContent";
import { Metadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);
  return <PostMainContent post={post} />;
}
