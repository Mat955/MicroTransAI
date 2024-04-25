import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import logo from "../translate-logo.png";
import { SignInButton, UserButton } from "@clerk/nextjs";

function Header() {
  const { userId } = auth();
  return (
    <header className="flex items-center justify-between px-8 border-b mb-5">
      <div className="flex items-center justify-center h-20">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={200}
            height={100}
            className="object-contain h-32 cursor-pointer"
          />
        </Link>
      </div>

      {userId ? (
        <div>
          <UserButton />
        </div>
      ) : (
        <SignInButton fallbackRedirectUrl="/translate" mode="modal" />
      )}
    </header>
  );
}

export default Header;
