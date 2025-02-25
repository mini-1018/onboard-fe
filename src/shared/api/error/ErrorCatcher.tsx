"use client";
import { useErrorStore } from "./errorStore";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ErrorCatcher() {
  const { error } = useErrorStore();
  const searchParams = useSearchParams();
  const errorParam = searchParams.get("error");

  useEffect(() => {
    if (!error) return;

    if (errorParam === "too_many_requests") {
      toast.error("너무 많은 요청입니다. 잠시 후 다시 시도해주세요.");
    }

    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  return <></>;
}
