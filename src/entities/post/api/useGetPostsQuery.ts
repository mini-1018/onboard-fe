import { getPosts } from "@/entities/post/api/post";
import { QueryKeys } from "@/shared/constants/queryKeys";
import { GetPostsParams, PostResponse } from "@/shared/types";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useGetPostsQuery = (params: GetPostsParams) => {
  return useQuery({
    queryKey: QueryKeys.POSTS(params),
    queryFn: () => getPosts(params),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: 1,
  });
};

export const useGetPostsInfiniteQuery = (initialData: PostResponse) => {
  return useInfiniteQuery({
    queryKey: QueryKeys.POSTS({ limit: 20 }),
    queryFn: async ({ pageParam = undefined }) => {
      const response = await getPosts({
        cursor: pageParam,
        limit: 20,
        orderBy: "latest",
      });
      return response;
    },
    getNextPageParam: (lastPage) => {
      return lastPage.hasNextPage ? lastPage.nextCursor : undefined;
    },
    initialData: {
      pages: [initialData],
      pageParams: [undefined],
    },
    initialPageParam: undefined,
    staleTime: 1000 * 60 * 5,
  });
};
