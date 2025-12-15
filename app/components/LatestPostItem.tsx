"use client";

import type { PostItem } from "@/types/post";
import AvatarCircle from "@/components/AvatarCircle";
import Link from "next/link";
import ArticleAuthors from "@/components/ArticleAuthors";
import ArticleActions from "@/components/ArticleActions";
import ArticleReadTime from "@/components/ArticleReadTime";
import ArticleImageLatestPost from "@/components/ArticleImageLatestPost";

export default function LatestPostItem({
  slug,
  title,
  image,
  authors = [],
  date,
  excerpt = "",
  readTime = "4 min read",
}: PostItem) {
  return (
    <div>
      <Link
        tabIndex={-1}
        href={slug}
        style={{ width: "100%", display: "inline-block" }}
      >
        <div
          draggable={false}
          className="transition-all duration-300 bg-background lg:hover:bg-background-hovered article-vertical select-none px-200 py-300 md:px-300"
        >
          {/* IMAGE */}
          <ArticleImageLatestPost src={image} alt={title} />

          <ArticleAuthors authors={authors} date={date} />

          {/* TITLE */}
          <p className="text-text-primary break-words md:article-h5 article-h7">
            {title}
          </p>

          {/* excerpt */}
          {excerpt && (
            <div className="md:mt-100 mt-100 md:block hidden">
              <span className="article-text-x-small break-words line-clamp-3 text-text-secondary">
                {excerpt}
              </span>
            </div>
          )}

          <div className="h-400 items-center justify-between mt-150 lg:flex hidden">
            <ArticleReadTime readTime={readTime} />
            <ArticleActions />
          </div>
        </div>
      </Link>
    </div>
  );
}
