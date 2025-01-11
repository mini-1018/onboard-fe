import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "ReCording",
  description: "ReCording",
};

export default function CreatePostLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}