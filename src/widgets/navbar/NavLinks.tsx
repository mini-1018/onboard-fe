"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavLinks(): React.ReactNode {
  const pathname = usePathname();

  return (
    <>
    <Link href="/posts" className={`${pathname === '/posts' ? 'text-red' : 'text-primary'} cursor-pointer`}>
      블로그 게시판
    </Link>
    <Link href="/questions" className={`${pathname === '/questions' ? 'text-red' : 'text-primary'} cursor-pointer`}>
      질문 게시판
    </Link>
    </>
  )
}
