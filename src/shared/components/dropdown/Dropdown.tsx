"use client";
import { useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { DropdownItem, DropdownProps } from "@/shared/types/dropdown.type";
import { usePostStore } from "@/entities/post/model/postStore";
import { useRouter } from "next/navigation";

export default function Dropdown({ type, items = [], post }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { setPost } = usePostStore();
  const router = useRouter();
  const postData = post
    ? {
        id: post.id,
        title: post.title,
        content: post.content,
        tags: post.tags.map((tag) => tag.name),
      }
    : null;

  console.log(postData);
  const dropdownOptions: Record<string, DropdownItem[]> = {
    nav: [
      { text: "프로필", href: "/profile/me" },
      { text: "설정", href: "/setting" },
      {
        text: "로그아웃",
        onClick: () => signOut({ callbackUrl: "/signin" }),
        className: "text-red-600",
      },
    ],
    post: [
      {
        text: "수정하기",
        onClick: () => {
          setPost(postData);
          router.push("/posts/edit");
        },
      },
      { text: "삭제하기", className: "text-red" },
    ],
    comment: [
      { text: "수정하기", href: "#" },
      { text: "삭제하기", className: "text-red" },
    ],
  };
  const dropdownItems = [...dropdownOptions[type], ...items];

  return (
    <div className="relative z-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 p-2 rounded-lg"
      >
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl">
          {dropdownItems.map((item, index) =>
            item.href ? (
              <Link
                key={index}
                href={item.href}
                className={`block text-sm text-center py-2 hover:bg-gray ${
                  item.className || "text-primary"
                }`}
              >
                {item.text}
              </Link>
            ) : (
              <button
                key={index}
                onClick={item.onClick}
                className={`w-full text-sm text-center py-2 hover:bg-gray ${
                  item.className || "text-primary"
                }`}
              >
                {item.text}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}
