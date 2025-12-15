"use client";

import Link from "next/link";
import type { PostItem } from "@/types/post";
import AvatarCircle from "@/components/AvatarCircle";
import Image from "next/image";
import ArticleAuthors from "@/components/ArticleAuthors";
import ArticleImage from "@/components/ArticleImage";
import ArticleExcerpt from "@/components/ArticleExcerpt";
import ArticleReadTime from "@/components/ArticleReadTime";
import ArticleActions from "@/components/ArticleActions";
import ArticleImageRight from "@/components/ArticleImageRight";

export default function ArticleCardHorizontalFull({
  slug,
  title,
  excerpt,
  image,
  authors = [],
  date,
  readTime,
}: PostItem) {
  return (
    <div>
      <Link href={`/${slug}`}>
        <div
          className="transition-all duration-300 bg-background lg:hover:bg-background-hovered article-horizontal select-none overflow-hidden lg:py-300 lg:px-200 py-300 px-200"
          draggable="false"
        >

          <ArticleAuthors authors={authors} date={date} />

          <div className="flex lg:-mx-150 -mx-100 flex-row-reverse">
            <ArticleImageRight src={image} alt={title} />
            <div className="flex-1 lg:mx-150 mx-100">
              <p className="text-text-primary break-words lg:article-h6 article-h7">
                {title}
              </p>

              <div className="lg:mt-100 hidden">
                <span className="article-text-x-small break-words line-clamp-3 text-text-secondary">
                  {excerpt}
                </span>
              </div>
            </div>
          </div>

          <div className="h-400 items-center justify-between lg:mt-150 hidden">
            <div className="flex items-center">
              <div className="box-border badge flex w-fit items-center justify-center rounded-circle border-0125 px-100 py-0125 border-badge-labeled-neutral-border bg-badge-labeled-neutral-background h-300 text-text-primary my-050 whitespace-nowrap">
                <span className="ui-text-small text-badge-labeled-neutral-text">
                  {readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
