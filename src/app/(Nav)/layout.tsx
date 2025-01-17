import type { Metadata } from "next";
import "@/app/globals.css";
import Nav from "@/widgets/nav/Nav";

export const metadata: Metadata = {
  title: "OnBoard",
  description: "OnBoard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="ml-[80px] mr-[80px]">
        <Nav />
        {children}
      </body>
    </html>
  );
}
