import { AuthProvider } from "@/shared/components/providers/AuthProvider";
import { Metadata } from "next";
import "@/app/globals.css";
import QueryProvider from "@/shared/api/QueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "OnBoard",
  description: "OnBoard",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html>
      <body>
        <QueryProvider>
          <AuthProvider session={session}>
            {children}
            <ToastContainer />
          </AuthProvider>
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryProvider>
      </body>
    </html>
  );
}
