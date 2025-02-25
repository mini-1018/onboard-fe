import { PostData } from "@/shared/types";
import { useMutation } from "@tanstack/react-query";
import { createPost, updatePost } from "./post";

export const useCreatePostMutation = () => {
  return useMutation({
    mutationFn: (postData: PostData) => createPost(postData),
  });
};

export const useUpdatePostMutation = () => {
  return useMutation({
    mutationFn: (postData: PostData) => updatePost(postData),
  });
};
