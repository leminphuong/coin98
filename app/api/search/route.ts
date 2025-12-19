import { NextResponse } from "next/server";
import { getSearchData } from "@/api/getHomeData";
import { detectLocaleByIP } from "@/lib/server/detectLocale";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";

  const locale = await detectLocaleByIP();
  const data = await getSearchData(q, locale);

  return NextResponse.json({
    posts: data.posts || [],
    series: data.series || [],
    courses: data.courses || [],
  });
}
