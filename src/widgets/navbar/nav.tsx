import NavLinks from "./NavLinks";

export default function Navbar(): React.ReactNode {
  return (
  <div className="bg-gray h-[60px] w-screen flex items-center justify-center gap-4">
    <div className="text-primary text-3xl font-bold">로고</div>
    <NavLinks />
  </div>
  );
}

