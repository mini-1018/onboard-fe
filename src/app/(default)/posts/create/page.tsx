import Loading from "@/shared/components/loading";
import MarkdownEditor from "@/shared/editor/MarkdownEditor";
import React, { Suspense } from "react";

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
      <MarkdownEditor />
      <LazyComponent />
    </Suspense>
  );
}
