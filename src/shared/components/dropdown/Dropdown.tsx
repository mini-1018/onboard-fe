"use client";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    signOut({ callbackUrl: "/signin" });
  };

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
          <a
            href="/profile/me"
            className="block text-sm text-center py-2 hover:bg-gray text-primary"
          >
            프로필
          </a>
          <a
            href="/settings"
            className="block text-sm text-center py-2 hover:bg-gray text-primary"
          >
            설정
          </a>
          <button
            onClick={handleLogout}
            className="w-full text-sm text-center py-2 text-red-600 hover:bg-gray text-primary"
          >
            로그아웃
          </button>
        </div>
      )}
    </div>
  );
}
