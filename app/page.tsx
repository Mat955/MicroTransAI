import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import robotsImg from "./assets/images/MicroTransAI.png";

export default async function Home() {
  const { userId } = auth();

  // const url = `${
  //   process.env.NODE_ENV === "development"
  //     ? "http://localhost:3000"
  //     : process.env.VERCEL_URL
  // }/translate`;

  const url = "https://micro-trans-ai.vercel.app/translate";

  return (
    <main className="flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl lg:text-6xl text-center pb-10 mb-5 font-light">
        Understand your world and communicate across languages
      </h1>{" "}
      <Image
        src={robotsImg}
        alt="robots chat with each other"
        width={700}
        height={700}
      />
      {userId ? (
        <Link
          href="/translate"
          className="bg-blue-500 hover:bg-blue-600 w-full mt-10 lg:w-fit p-5 rounded-md text-white text-center cursor-pointer"
        >
          Translate Now
        </Link>
      ) : (
        <Button className="bg-blue-500 hover:bg-blue-600 w-full mt-10 lg:w-fit p-5">
          <SignInButton fallbackRedirectUrl={url} mode="modal">
            Sign In to Get Translating
          </SignInButton>
        </Button>
      )}
    </main>
  );
}
