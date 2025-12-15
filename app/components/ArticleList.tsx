"use client";

import React from "react";
import type { PostItem } from "@/types/post";
import ArticleAuthors from "@/components/ArticleAuthors";
import { useRouter } from "next/navigation";

export default function ArticleList({ items }: { items: PostItem[] }) {
  if (!items || items.length === 0) return null;

  const total = items.length;

  const ArticleItem = ({ item, index }: { item: PostItem; index: number }) => {
    const router = useRouter();

    const isVertical = index < 3;
    const showDivider = index < total - 3;

    return (
      <>
        <div className="group/section-list-column w-full">
          {/* ✅ CARD CLICKABLE – KHÔNG BUTTON */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => router.push(`/${item.slug}`)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                router.push(`/${item.slug}`);
              }
            }}
            className="w-full cursor-pointer text-left"
          >
            <div
              draggable="false"
              className={
                isVertical
                  ? "transition-all duration-300 bg-background lg:hover:bg-background-hovered article-vertical select-none px-200 py-300 md:px-300"
                  : "transition-all duration-300 bg-background lg:hover:bg-background-hovered article-horizontal select-none overflow-hidden md:py-300 md:px-200 py-300 px-200"
              }
            >
              {/* IMAGE */}
              {isVertical && (
                <picture className="relative mb-200 block">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover rounded-050 aspect-3-2 w-full"
                  />
                </picture>
              )}

              {/* AUTHORS (Radix button OK) */}
              <ArticleAuthors
                authors={item.authors ?? []}
                date={item.date}
              />

              {/* TITLE */}
              <p
                className={
                  isVertical
                    ? "text-text-primary break-words md:article-h5 article-h5"
                    : "text-text-primary break-words lg:article-h6 md:article-h6 article-h7"
                }
              >
                {item.title}
              </p>

              {/* EXCERPT */}
              {isVertical && item.excerpt && (
                <div className="mt-100 md:block hidden">
                  <span className="article-text-x-small break-words line-clamp-3 text-text-secondary">
                    {item.excerpt}
                  </span>
                </div>
              )}

              {/* READ TIME */}
              {isVertical && item.readTime && (
                <div className="h-400 items-center justify-between mt-150 md:flex hidden">
                  <div className="box-border badge flex w-fit items-center justify-center rounded-circle border-0125 px-100 py-0125 border-badge-labeled-neutral-border bg-badge-labeled-neutral-background h-300">
                    <span className="ui-text-small">
                      {item.readTime}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        {showDivider && (
          <div className="px-200 md:px-300 group-last/section-list-column:hidden">
            <div className="bg-divider h-0125 w-full"></div>
          </div>
        )}
      </>
    );
  };

  const col1 = items.filter((_, i) => i % 3 === 0);
  const col2 = items.filter((_, i) => i % 3 === 1);
  const col3 = items.filter((_, i) => i % 3 === 2);

  return (
    <div className="flex flex-wrap">
      {[col1, col2, col3].map((col, colIndex) => (
        <div key={colIndex} className="w-full lg:w-1/3">
          {col.map((item) => (
            <ArticleItem
              key={item.slug}
              item={item}
              index={items.indexOf(item)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
