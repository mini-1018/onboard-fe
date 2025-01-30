import { QueryKeys } from "@/shared/constants/queryKeys";
import { getComments } from "./comment";
import { useQuery } from "@tanstack/react-query";

export const useCommentQuery = (postId: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: QueryKeys.COMMENTS(postId),
    queryFn: () => getComments(postId),
  });

  return { data, isLoading, error };
};
