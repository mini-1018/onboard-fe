import Image from "next/image";
import NavLinks from "./NavLinks";
import PromptFont from "@/shared/font/PromptFont";
import NavButton from "./NavButton";
import Link from "next/link";

export default function Nav(): React.ReactNode {
  return (
    <div className="bg-white h-[60px] w-[100%] flex items-center justify-between gap-[20px] border-b border-primary mb-[20px]">
      <div className="flex items-center justify-center gap-[20px]">
        <Link href="/">
          <Image
            src="/images/onboard-large.png"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
        <PromptFont>
          <NavLinks />
        </PromptFont>
      </div>
      <div>
        <NavButton />
      </div>
    </div>
  );
}
