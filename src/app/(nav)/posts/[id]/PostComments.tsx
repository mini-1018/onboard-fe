"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

interface Comment {
  id: number;
  content: string;
  createdAt: string;
  user: {
    name: string;
    image: string;
  };
  replies?: Comment[];
}

export default function PostComments() {
  const { data: session } = useSession();

  // 임시 댓글 데이터
  const comments: Comment[] = [
    {
      id: 1,
      content: "정말 좋은 글이네요! 많이 배웠습니다.",
      createdAt: "2024-02-20T12:00:00",
      user: {
        name: "사용자1",
        image: "/default-profile.png",
      },
      replies: [
        {
          id: 2,
          content: "답글 감사합니다 :)",
          createdAt: "2024-02-20T12:30:00",
          user: {
            name: "작성자",
            image: "/default-profile.png",
          },
        },
      ],
    },
  ];

  return (
    <div className="w-full mt-8">
      {/* 댓글 작성 폼 */}
      {session && (
        <div className="flex gap-4 mb-8">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image
              src={session.user.image || "/default-profile.png"}
              alt="profile"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <textarea
              className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:border-primary"
              placeholder="댓글을 작성해주세요"
              rows={3}
            />
            <div className="flex justify-end mt-2">
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
                댓글 작성
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 댓글 목록 */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-100 pb-6">
            {/* 메인 댓글 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 relative rounded-full overflow-hidden">
                <Image
                  src={comment.user.image}
                  alt={comment.user.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold">{comment.user.name}</span>
                  <span className="text-sm text-gray-500">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-800">{comment.content}</p>
                <button className="text-sm text-gray-500 mt-2 hover:text-primary">
                  답글 달기
                </button>
              </div>
            </div>

            {/* 답글 목록 */}
            {comment.replies && comment.replies.length > 0 && (
              <div className="ml-14 mt-4 space-y-4">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="flex gap-4">
                    <div className="w-8 h-8 relative rounded-full overflow-hidden">
                      <Image
                        src={reply.user.image}
                        alt={reply.user.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">{reply.user.name}</span>
                        <span className="text-sm text-gray-500">
                          {new Date(reply.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-800">{reply.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
