import { getPosts, getPostsByUserId } from "@/entities/post/api/post";
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

export const useGetPostsInfiniteQuery = (
  initialData?: PostResponse,
  search?: string
) => {
  return useInfiniteQuery({
    queryKey: QueryKeys.POSTS({ search }),
    queryFn: async ({ pageParam = undefined }) => {
      const response = await getPosts({
        cursor: pageParam,
        limit: 20,
        orderBy: "latest",
        search,
      });
      return response;
    },
    getNextPageParam: (lastPage: PostResponse) => {
      return lastPage.hasNextPage ? lastPage.nextCursor : undefined;
    },
    initialData: initialData
      ? {
          pages: [initialData],
          pageParams: [undefined],
        }
      : undefined,
    initialPageParam: undefined,
    staleTime: 1000 * 60 * 5,
  });
};

export const useSearchPostsInfiniteQuery = (search: string) => {
  return useInfiniteQuery({
    queryKey: QueryKeys.POSTS({ search }),
    queryFn: async ({ pageParam = undefined }) => {
      const response = await getPosts({
        cursor: pageParam,
        limit: 5,
        orderBy: "latest",
        search,
      });
      return response;
    },
    getNextPageParam: (lastPage: PostResponse) => {
      return lastPage.hasNextPage ? lastPage.nextCursor : undefined;
    },
    initialPageParam: undefined,
    staleTime: 1000 * 60 * 5,
    enabled: search!.length > 0,
  });
};

export const useGetPostsByUserIdInfiniteQuery = (
  initialData?: PostResponse,
  search?: string
) => {
  return useInfiniteQuery({
    queryKey: QueryKeys.MY_POSTS(search),
    queryFn: async ({ pageParam = undefined }) => {
      const response = await getPostsByUserId({
        cursor: pageParam,
        limit: 5,
        orderBy: "latest",
        search: search,
      });
      return response;
    },
    getNextPageParam: (lastPage: PostResponse) => {
      return lastPage.hasNextPage ? lastPage.nextCursor : undefined;
    },
    initialData: search
      ? undefined
      : initialData
      ? {
          pages: [initialData],
          pageParams: [undefined],
        }
      : undefined,
    initialPageParam: undefined,
    staleTime: 1000 * 60 * 5,
  });
};
