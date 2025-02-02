import Image from "next/image";
import NavLinks from "./NavLinks";
import NavButton from "./NavButton";
import Link from "next/link";

export default async function Nav() {
  return (
    <div className="bg-white h-[60px] w-[100%] flex items-center justify-between gap-[20px] border-b border-primary mb-[20px] sticky top-0 z-10">
      <div className="flex items-center justify-center gap-[20px] ml-[80px]">
        <Link href="/">
          <Image
            src="/images/onboard-large.png"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
        <NavLinks />
      </div>
      <div className="mr-[80px]">
        <NavButton />
      </div>
    </div>
  );
}
