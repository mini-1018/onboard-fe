"use client";
import { useSession } from "next-auth/react";
import {
  Comment,
  CreateComment,
  UpdateComment,
} from "@/shared/types/comment.type";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";
import { useCommentMutations } from "@/entities/comment/api/useCommentMutation";
import { useCommentQuery } from "@/entities/comment/api/useCommentQuery";

export default function PostComments({
  initialComments,
  userId,
  postId,
}: {
  initialComments: Comment[];
  userId: string;
  postId: number;
}) {
  const { data: session } = useSession();
  const { data: comments } = useCommentQuery(postId, {
    initialData: initialComments,
  }) as { data: Comment[] };
  const isNotMyComment = String(session?.user.id) !== String(userId);
  const { createComment, updateComment, deleteComment } =
    useCommentMutations(postId);

  const handleCreateComment = (data: CreateComment) => {
    createComment(data);
  };

  const handleUpdateComment = (id: number, data: UpdateComment) => {
    updateComment({ id, comment: data });
  };

  const handleDeleteComment = (id: number) => {
    deleteComment(id);
  };

  const handleSubmitReply = (content: string) => {
    handleCreateComment?.({
      content,
      postId,
      userId: Number(session?.user?.id),
    });
  };

  return (
    <div className="w-full mt-8 border-t border-primary pt-8">
      {isNotMyComment && <CommentInput onSubmit={handleSubmitReply} />}
      <div className="space-y-1 mt-8">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            handleCreateComment={handleCreateComment}
            handleUpdateComment={handleUpdateComment}
            handleDeleteComment={handleDeleteComment}
            postId={postId}
          />
        ))}
      </div>
    </div>
  );
}
