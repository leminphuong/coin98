"use client";

import Link from "next/link";
import type { PostItem } from "@/types/post";

import ArticleImageLarge from "@/components/ArticleImageLarge";
import ArticleAuthors from "@/components/ArticleAuthors";
import ArticleExcerptLarge from "@/components/ArticleExcerptLarge";

import ArticleReadTime from "@/components/ArticleReadTime";
import ArticleActions from "@/components/ArticleActions";

export default function ArticleCardVerticalLarge({
  slug,
  title,
  excerpt,
  image,
  authors = [],
  date,
  readTime,
}: PostItem) {
  return (
    <Link href={`/${slug}`}>
      <div
        className="transition-all duration-300 bg-background lg:hover:bg-background-hovered
        article-vertical select-none px-200 py-300 md:px-300"
        draggable={false}
      >
        {/* IMAGE */}
        <ArticleImageLarge src={image} alt={title} />

        {/* AUTHOR */}
        <ArticleAuthors authors={authors} date={date} />

        {/* TITLE */}
        <p className="text-text-primary break-words md:article-h5 lg:article-h3 article-h5">
          {title}
        </p>

        <ArticleExcerptLarge excerpt={excerpt} />

        {/* READ TIME + BUTTONS */}
        <div className="h-400 items-center justify-between lg:mt-200 mt-150 lg:flex hidden">
          <ArticleReadTime readTime={readTime} />
          <ArticleActions />
        </div>
      </div>
    </Link>
  );
}
