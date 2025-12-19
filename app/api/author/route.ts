import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  const lang = searchParams.get("lang") || "vi";

  if (!slug) {
    return NextResponse.json({ status: "error", message: "Missing slug" });
  }

  const res = await fetch(
    `https://admin.coinjdg.com/wp-json/toan/v1/author?slug=${slug}&lang=${lang}`
  );

  const data = await res.json();
  return NextResponse.json(data);
}
