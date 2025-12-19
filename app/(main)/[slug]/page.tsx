
import { detectLocaleByIP } from "@/lib/server/detectLocale";
import { getPostData } from "@/api/getHomeData";
import SinglePostItem from "@/components/SinglePostItem";
interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params; 

  const lang = (await detectLocaleByIP()) === "en" ? "en" : "vi";
  const data = await getPostData(slug, lang);

  const { post } = data; 

  return (
    <>
      <SinglePostItem item={post} />
    </>
  );
}
