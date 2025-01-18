"use client";
import Button from "@/shared/components/buttons/Button";
import SigninForm from "@/shared/components/forms/SigninForm";
import Modal from "@/shared/components/modal/Modal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavButton() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const openModal = () => {
    setIsOpen(true);
    window.history.pushState({ previousPath: pathname }, "", "/signin");
  };

  const closeModal = () => {
    setIsOpen(false);
    const previousPath = window.history.state?.previousPath || pathname;
    window.history.pushState(null, "", previousPath);
  };

  return (
    <div className="flex gap-2">
      <Link href="/posts/create">
        <Button>글작성</Button>
      </Link>
      <Button onClick={openModal}>로그인</Button>
      {isOpen && (
        <Modal closeModal={closeModal}>
          <SigninForm />
        </Modal>
      )}
    </div>
  );
}
