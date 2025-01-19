import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Image
        src="/images/loading.png" // 로고 이미지 경로를 여기에 입력
        alt="로고 이미지"
        width={70} // 로고 크기
        height={70} // 로고 크기
        className="animate-spin" // Tailwind CSS 회전 애니메이션
      />
      <div className="text-xl font-bold">Loading...</div>
    </div>
  );
}
