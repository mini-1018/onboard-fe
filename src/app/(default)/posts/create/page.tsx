import MarkdownEditor from "@/shared/editor/MarkdownEditor";
import { Suspense } from "react";

export default function CreatePostPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MarkdownEditor />
    </Suspense>
  );
}
