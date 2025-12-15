"use client";

import Image from "next/image";
import { PostItem } from "@/types/post";
import ArticleImageLatestPostMobile from "@/components/ArticleImageLatestPostMobile";

import Link from "next/link";
export default function LatestPostCard({
  slug,
  title,
  excerpt,
  image,
  readTime,
  date,
  authors,
}: PostItem) {
  const safeAuthors = authors ?? [];

  return (
    <Link href={slug} className="block">
      <div
        className="transition-all duration-300 bg-background lg:hover:bg-background-hovered 
                   article-vertical select-none px-200 py-300 md:px-300"
      >

        <ArticleImageLatestPostMobile src={image} alt={title} />

        {/* =============================
            TITLE
        ============================== */}
        <p className="text-text-primary break-words md:article-h5 article-h7">
          {title}
        </p>
      </div>
    </Link>
  );
}
