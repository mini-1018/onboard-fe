"use client";
import { useCreatePostMutation } from "@/entities/post/api/usePostMutation";
import MarkdownEditor from "@/shared/editor/MarkdownEditor";
import { PostData } from "@/shared/types";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function CreateEditor() {
  const createPostMutation = useCreatePostMutation();
  const router = useRouter();

  const handleSubmit = (postData: PostData) => {
    createPostMutation.mutate(postData, {
      onSuccess: (data) => {
        toast.success(`게시글이 등록되었습니다.`);
        router.push(`/posts/${data.id}`);
      },
      onError: () => {
        toast.error("게시글 등록에 실패했습니다.");
      },
    });
  };

  return <MarkdownEditor onSubmit={handleSubmit} buttonText="등록" />;
}
