"use client";
import AvatarCircle from "@/components/AvatarCircle";
import { PostItem } from "@/types/post";
import Link from "next/link";
import ArticleImageSlider from "@/components/ArticleImageSlider";
import ArticleAuthors from "@/components/ArticleAuthors";

export default function SlideItem({
  slug,
  image,
  title,
  authors = [],
  date,
}: PostItem) {
  return (
    <Link
      className=""
      tabIndex={-1}
      href={slug}
      style={{ width: "100%", display: "inline-block" }}
    >
      <div
        draggable={false}
        className="transition-all duration-300 bg-background lg:hover:bg-background-hovered 
                   select-none overflow-hidden p-300 px-200 lg:px-300 box-border flex"
      >
        <ArticleImageSlider src={image} alt={title} />

        <div className="flex-1 break-words flex flex-col justify-center lg:justify-start">
          <p className="text-text-primary break-words article-h7 lg:article-h6 lg:mb-100">
            {title}
          </p>
          <ArticleAuthors authors={authors} date={date} />
        </div>
      </div>
    </Link>
  );
}
