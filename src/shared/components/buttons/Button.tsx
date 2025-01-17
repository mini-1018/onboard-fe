"use client";

interface ButtonProps {
  content: string;
  onClick: () => void;
}

export default function Button({ content, onClick }: ButtonProps) {
  return (
    <button
      className="bg-primary text-white text-[16px] font-bold w-[100px] h-[40px] rounded-lg"
      onClick={onClick}
    >
      {content}
    </button>
  );
}
