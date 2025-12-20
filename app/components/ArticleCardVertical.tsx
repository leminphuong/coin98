"use client";

import Link from "next/link";
import React from "react";
import type { PostItem } from "@/types/post";

import ArticleAuthors from "@/components/ArticleAuthors";
import ArticleImage from "@/components/ArticleImage";
import ArticleExcerpt from "@/components/ArticleExcerpt";
import ArticleReadTime from "@/components/ArticleReadTime";
import ArticleActions from "@/components/ArticleActions";

export default function ArticleCardVertical({
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
        className="transition-all duration-300 bg-background lg:hover:bg-background-hovered article-vertical select-none px-200 py-300 md:px-300"
        draggable={false}
      >
        {/* IMAGE */}
        <ArticleImage src={image} alt={title} />

        {/* AUTHORS */}
        <ArticleAuthors authors={authors} date={date} />

        {/* TITLE */}
        <p className="text-text-primary break-words md:article-h5 article-h7">
          {title}
        </p>

        {/* EXCERPT */}
        <ArticleExcerpt excerpt={excerpt} />

        {/* READ TIME + ICONS */}
        <div className="h-400 items-center justify-between mt-150 lg:flex hidden">
          <ArticleReadTime readTime={readTime} />
          <ArticleActions slug={slug} />
        </div>
      </div>
    </Link>
  );
}
