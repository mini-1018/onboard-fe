"use client";
import { useGetPostsQuery } from "@/entities/post/api/useGetPostsQuery";
import SearchInput from "@/shared/components/inputs/SearchInput";
import { Post } from "@/shared/types";
import { useEffect, useState } from "react";

export default function SearchList() {
  const [search, setSearch] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const { data: posts } = useGetPostsQuery({
    search: search,
  });

  return (
    <div className="h-screen flex items-start justify-center">
      <div className="flex flex-col items-center justify-center gap-y-[20px] w-[50%]">
        <SearchInput onChange={onChange} />
        {posts?.data.map((post: Post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    </div>
  );
}
