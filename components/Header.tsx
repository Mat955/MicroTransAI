import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import logo from "../app/assets/images/translate-logo.png";
import { SignInButton, UserButton } from "@clerk/nextjs";

function Header() {
  const { userId } = auth();

  // const url = `${
  //   process.env.NODE_ENV === "development"
  //     ? "http://localhost:3000"
  //     : process.env.VERCEL_URL
  // }/translate`;

  const url = "https://micro-trans-ai.vercel.app/translate";

  return (
    <header className="flex items-center justify-between px-8 border-b mb-5 bg-black">
      <div className="flex items-center justify-center h-20">
        <Link href="/">
          <Image
            src={logo}
            alt="logo of the app"
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
        <div className="text-white">
          <SignInButton fallbackRedirectUrl={url} mode="modal" />
        </div>
      )}
    </header>
  );
}

export default Header;
