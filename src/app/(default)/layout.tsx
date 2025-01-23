import "@/app/globals.css";
import Loading from "@/shared/components/loading";
import { Suspense } from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<Loading />}>
      <>{children}</>;
    </Suspense>
  );
}
