import { getPostById } from "@/entities/post/api/post";
import { Props } from "@/shared/types/params.type";
import PostMainContent from "./PostMainContent";

export async function generateMetadata({ params }: Props) {
  const { id } = params;
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

export default async function Post({ params }: Props) {
  const { id } = params;
  const post = await getPostById(id);
  return <PostMainContent post={post} />;
}
