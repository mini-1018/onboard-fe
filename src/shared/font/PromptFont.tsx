export default function PromptFont({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="font-prompt">{children}</div>
    </>
  );
}
