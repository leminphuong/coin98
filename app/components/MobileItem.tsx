"use client";

import { PostItem } from "@/types/post";
import Link from "next/link";
import ArticleImageMobile from "@/components/ArticleImageMobile";

export default function MobileItem({
  slug,
  image,
  title,
  author,
  date,
}: PostItem) {
  return (
    <Link href={slug}>
      <div
        draggable={false}
        className="transition-all duration-300 bg-background select-none 
                   overflow-hidden p-300 px-200 box-border flex"
      >
        <ArticleImageMobile src={image} alt={title} />

        <div className="flex-1 break-words flex flex-col justify-center">
          <p className="text-text-primary break-words article-h7 mb-050">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
}
