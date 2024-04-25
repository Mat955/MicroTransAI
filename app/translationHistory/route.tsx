import { getTranslations } from "@/mongodb/models/User";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = new URLSearchParams(request.nextUrl.searchParams);
  const userId = searchParams.get("userId");

  const translations = await getTranslations(userId!);

  return Response.json({ translations });
}
