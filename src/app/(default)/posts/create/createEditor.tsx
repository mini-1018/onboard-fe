"use client";
import { useCreatePostMutation } from "@/entities/post/api/usePostMutation";
import MarkdownEditor from "@/shared/editor/MarkdownEditor";
import { PostData } from "@/shared/types";
import { useSession } from "next-auth/react";

export default function CreateEditor() {
  const createPostMutation = useCreatePostMutation();
  const { data: session } = useSession();
  const userId = session!.user.id;

  const handleSubmit = (postData: PostData) => {
    createPostMutation.mutate({ postData, userId });
  };
  return <MarkdownEditor onSubmit={handleSubmit} buttonText="등록" />;
}
