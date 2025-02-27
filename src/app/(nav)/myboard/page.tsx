import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import MyPostList from "@/app/(nav)/myboard/MyPostList";
import { getPostsByUserId } from "@/entities/post/api/post";
import { Suspense } from "react";
import PostListSkeletonTemplate from "@/entities/post/ui/PostListSkeletonTemplate";
import { cookies } from "next/headers";

export default async function MyBoard() {
  const session = await getServerSession(authOptions);
  const cookieStore = await cookies();
  const token = cookieStore.get("next-auth.session-token");
  const headers = { Cookie: `next-auth.session-token=${token?.value}` };
  const initialData = await getPostsByUserId(
    {
      limit: 5,
      orderBy: "latest",
    },
    headers
  );
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-[4vw] mt-10 border-b border-primary pb-5 w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
          {session && session.user.image && (
            <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden">
              <Image src={session.user.image} alt="profile" fill />
            </div>
          )}
          <div>
            {session && (
              <p className="text-xl font-bold text-primary">
                {session.user.name}
              </p>
            )}
          </div>
        </div>
        <Suspense fallback={<PostListSkeletonTemplate />}>
          <MyPostList initialData={initialData} />
        </Suspense>
      </div>
    </>
  );
}
