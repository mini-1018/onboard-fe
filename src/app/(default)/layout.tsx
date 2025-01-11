import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/widgets/navbar/nav";

export const metadata: Metadata = {
  title: "ReCording",
  description: "ReCording",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
      <Navbar />
        {children}
      </body>
    </html>
  );
}
