"use client";

import Link from "next/link";
import React from "react";

export interface ArticleCardVerticalProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  avatar: string;
  author: string;
  date: string;
  readTime: string;
}

export default function ArticleCardVertical({
  slug,
  title,
  excerpt,
  image,
  avatar,
  author,
  date,
  readTime,
}: ArticleCardVerticalProps) {
  return (
    <Link href={`/${slug}`}>
      <div
        className="transition-all duration-300 bg-background lg:hover:bg-background-hovered article-vertical select-none px-200 py-300 md:px-300"
        draggable={false}
      >
        {/* IMAGE */}
        <picture className="relative mb-200 block">
          <img
            src={image}
            alt={title}
            className="object-cover rounded-050 aspect-3-2 w-full rounded-050"
          />
        </picture>

        {/* AUTHOR */}
        <div className="ui-text-small text-text-secondary min-h-300 flex-wrap items-center mb-100 lg:flex hidden">
          <div className="flex items-center h-max ui-text-small text-text-primary">
            <div className="aspect-square ab-avatar-people ab-avatar-size-24 flex-none mr-100">
              <img
                src={avatar}
                alt={author}
                width={32}
                height={32}
                className="avatar-img aspect-square w-full object-cover"
              />
            </div>

            <div className="line-clamp-1 break-all max-w-w160 ui-text-x-small md:ui-text-small">
              <span>{author}</span>
            </div>
          </div>

          <div className="m-050 flex items-center justify-center h-100 aspect-square">
            <div className="w-100 aspect-square rounded-circle bg-g block scale-50"></div>
          </div>

          {date}
        </div>

        {/* TITLE */}
        <p className="text-text-primary break-words md:article-h5 article-h7">
          {title}
        </p>

        {/* EXCERPT */}
        <div className="mt-100 hidden">
          <span className="article-text-x-small break-words line-clamp-3 text-text-secondary">
            {excerpt}
          </span>
        </div>

        {/* READ TIME + ICONS */}
        <div className="h-400 items-center justify-between mt-150 lg:flex hidden">
          <div className="flex items-center">
            <div className="box-border badge flex w-fit items-center justify-center rounded-circle border-0125 px-100 py-0125 border-badge-labeled-neutral-border bg-badge-labeled-neutral-background h-300 text-text-primary my-050 whitespace-nowrap">
              <span className="ui-text-small text-badge-labeled-neutral-text">
                {readTime}
              </span>
            </div>
          </div>

          {/* Save + Copy */}
          <div className="flex items-center">
            <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible mr-150">
              <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered border-0125 border-transparent p-100">
                <i className="ab-icon text-button-ghost-icon text-size-800 ab-bookmark_outlined"></i>
              </button>
            </div>

            <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible">
              <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered border-0125 border-transparent p-100">
                <i className="ab-icon text-button-ghost-icon text-size-800 ab-link"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
