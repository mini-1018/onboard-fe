"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const toastShown = useRef(false);

  useEffect(() => {
    if (code === "429" && !toastShown.current) {
      toast.error("너무 많은 요청이 발생했습니다.");
      toastShown.current = true;
    }
  }, [code]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">일시적인 오류가 발생했습니다</h1>
      <p className="mt-2">잠시 후 다시 시도해주세요</p>
    </div>
  );
}
