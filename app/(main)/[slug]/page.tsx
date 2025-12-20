import { detectLocaleByIP } from "@/lib/server/detectLocale";
import { getPostData } from "@/api/getHomeData";
import SinglePostItem from "@/components/SinglePostItem";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}
// app/game/[slug]/page.tsx
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const lang = (await detectLocaleByIP()) === "en" ? "en" : "vi";

  const data = await getPostData(slug, lang);
  const { post } = data;

  if (!post || !post.title) {
    notFound();
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const lang = (await detectLocaleByIP()) === "en" ? "en" : "vi";
  const data = await getPostData(slug, lang);

  const { post } = data;

  if (!post || !post.title) {
    notFound();
  }

  return (
    <>
      <SinglePostItem item={post} />
    </>
  );
}
