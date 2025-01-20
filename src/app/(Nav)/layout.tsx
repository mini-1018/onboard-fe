import "@/app/globals.css";
import Nav from "@/widgets/nav/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="ml-[80px] mr-[80px]">
      <Nav />
      {children}
    </div>
  );
}
