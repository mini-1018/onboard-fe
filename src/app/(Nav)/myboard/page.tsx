import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Image from "next/image";
import MyPostList from "./MyPostList";
import { getPostsByUserId } from "@/entities/post/api/post";

export default async function MyBoard() {
  const session = await getServerSession(authOptions);
  const initialData = await getPostsByUserId(Number(session?.user?.id), {
    limit: 5,
    orderBy: "latest",
  });
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-10 mt-10 border-b border-primary pb-5 w-[50%] gap-x-[100px]">
          <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden">
            <Image src={session.user.image} alt="profile" fill />
          </div>
          <div>
            <p className="text-xl font-bold text-primary">
              {session.user.name}
            </p>
          </div>
        </div>
        <MyPostList initialData={initialData} />
      </div>
    </>
  );
}
