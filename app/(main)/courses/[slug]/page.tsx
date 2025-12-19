
import { detectLocaleByIP } from "@/lib/server/detectLocale";
import { getCourseData } from "@/api/getHomeData";
import Link from "next/link";
import type { PostItem } from "@/types/post";
import type { SeriesItem } from "@/types/series";
import { SeriesCardDesktop } from "@/components/SeriesCard";
import CoursesItem from "@/components/CoursesItem";
interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params; 

  const lang = (await detectLocaleByIP()) === "en" ? "en" : "vi";
  const data = await getCourseData(slug, lang);

  const { course } = data; 

  return (
    <>
      <CoursesItem item={course} />
    </>
  );
}
