"use client";
import PostTemplate from "@/entities/post/ui/PostTemplate";
import { Post, PostResponse } from "@/shared/types";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useGetPostsInfiniteQuery } from "@/entities/post/api/useGetPostsQuery";
import PostSkeletonTemplate from "@/entities/post/ui/PostSkeletonTemplate";

export default function PostList({
  initialData,
}: {
  initialData: PostResponse;
}) {
  const [mounted, setMounted] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    setMounted(true);
  }, []);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetPostsInfiniteQuery(initialData);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (!mounted) {
    return (
      <div className="grid grid-cols-5 gap-x-[14px] gap-y-[20px]">
        {initialData.data.map((post) => (
          <PostTemplate post={post} key={post.id} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-5 items-center justify-center gap-x-[14px] gap-y-[20px]">
      {data.pages.map((page) =>
        page.data.map((post: Post) => (
          <PostTemplate post={post} key={post.id} />
        ))
      )}
      <div ref={ref}>
        {isFetchingNextPage ? (
          <PostSkeletonTemplate />
        ) : hasNextPage ? (
          <PostSkeletonTemplate />
        ) : null}
      </div>
    </div>
  );
}
