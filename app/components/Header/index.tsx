
import HeaderClient from "@/components/Header/HeaderClient";
import { detectLocaleByIP } from "@/lib/server/detectLocale";
import { getSearchData } from "@/api/getHomeData";

export default async function Header() {
  const locale = await detectLocaleByIP();
  const data = await getSearchData("", locale); 

  return (
    <HeaderClient
      locale={locale}
      initialPosts={data.posts || []}
      initialSeries={data.series || []}
    />
  );
}
