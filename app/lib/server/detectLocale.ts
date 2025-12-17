import { headers, cookies } from "next/headers";

export async function detectLocaleByIP(): Promise<"vi" | "en"> {
  // 1️⃣ Ưu tiên cookie do client set
  const cookieStore = cookies();
  const savedLocale = (await cookieStore).get("locale")?.value;

  if (savedLocale === "vi" || savedLocale === "en") {
    return savedLocale;
  }

  // 2️⃣ Fallback theo IP
  const h = headers();
  const country =
    (await h).get("x-vercel-ip-country") ||
    (await h).get("cf-ipcountry") ||
    (await h).get("x-country-code") ||
    "VN";

  return country === "VN" ? "vi" : "en";
}
