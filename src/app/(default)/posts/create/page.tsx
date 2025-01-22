import Loading from "@/shared/components/loading";
import React, { Suspense } from "react";
import CreateEditor from "./createEditor";

const LazyComponent = React.lazy(
  () =>
    new Promise<{ default: React.ComponentType }>((resolve) =>
      setTimeout(
        () => resolve({ default: () => <div>Lazy Loaded!</div> }),
        5000
      )
    )
);

export default function CreatePostPage() {
  return (
    <Suspense fallback={<Loading />}>
      <CreateEditor />
      <LazyComponent />
    </Suspense>
  );
}
