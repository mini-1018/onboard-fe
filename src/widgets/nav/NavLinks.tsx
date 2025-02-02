"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLinks(): React.ReactNode {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center gap-[30px] ml-[50px]">
      <Link
        href="/"
        className={`${
          pathname === "/" ? "text-yellow" : "text-primary"
        } cursor-pointer text-[20px] font-bold`}
      >
        Posts
      </Link>
      <div className="text-[20px]">||</div>
      <Link
        href="/questions"
        className={`${
          pathname === "/questions" ? "text-yellow" : "text-primary"
        } cursor-pointer text-[20px] font-bold`}
      >
        Questions
      </Link>
    </div>
  );
}
