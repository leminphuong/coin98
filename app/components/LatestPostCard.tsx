"use client";

import Image from "next/image";
import { PostItem } from "@/types/post";
import AvatarCircle from "@/components/AvatarCircle";
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
        {/* =============================
            FEATURE IMAGE
        ============================== */}
        <picture className="relative mb-200 block">
          <img
            src={image}
            alt={title}
            width={1200}
            height={800}
            className="object-cover rounded-050 aspect-3-2 w-full"
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </picture>

        {/* =============================
            AUTHORS + DATE
        ============================== */}
        <div className="ui-text-small text-text-secondary min-h-300 flex-wrap items-center md:mb-100 mb-100 md:flex hidden">
          <div className="flex items-center -space-x-2 mr-100">
            {safeAuthors .map((au, idx) => (
              <div
                key={idx}
                className="aspect-square relative z-10 ab-avatar-people ab-avatar-size-24 ring-2 ring-background rounded-circle"
              >
                <img
                  src={au.avatar}
                  alt={au.name ?? "avatar"}
                  width={32}
                  height={32}
                  className="avatar-img aspect-square w-full object-cover rounded-circle"
                  sizes="24px"
                />
              </div>
            ))}
          </div>

          <span className="ui-text-x-small md:ui-text-small text-text-primary">
            {safeAuthors .length > 1 ? "Multi Author" : safeAuthors [0]?.name}
          </span>

                    <AvatarCircle />

          <span>{date}</span>
        </div>

        {/* =============================
            TITLE
        ============================== */}
        <p className="text-text-primary break-words md:article-h5 article-h7">
          {title}
        </p>

        {/* =============================
            EXCERPT
        ============================== */}
        {excerpt && (
          <div className="md:mt-100 mt-100 md:block hidden">
            <span className="article-text-x-small break-words line-clamp-3 text-text-secondary">
              {excerpt}
            </span>
          </div>
        )}

        {/* =============================
            READ TIME + ACTION BUTTONS
        ============================== */}
        <div className="h-400 items-center justify-between md:mt-150 mt-150 md:flex hidden">
          {/* READ TIME */}
          {readTime && (
            <div className="flex items-center">
              <div className="box-border badge flex w-fit items-center justify-center rounded-circle 
                              border-0125 px-100 py-0125 border-badge-labeled-neutral-border 
                              bg-badge-labeled-neutral-background h-300 text-text-primary my-050 whitespace-nowrap">
                <span className="ui-text-small text-badge-labeled-neutral-text">
                  {readTime}
                </span>
              </div>
            </div>
          )}

          {/* SAVE + COPY BUTTONS */}
          <div className="flex items-center">
            {/* Save Button */}
            <ActionButton icon="ab-bookmark_outlined" label="Save" />

            {/* Copy link */}
            <ActionButton icon="ab-link" label="Copy link" />
          </div>
        </div>
      </div>
    </Link>
  );
}

/* 
  ============================================
  REUSABLE ACTION BUTTON (SAVE / COPY)
  ============================================
*/
function ActionButton({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible mr-150">
      <button className="group/ab-button relative select-none flex items-center justify-center 
                         rounded-050 transition-all duration-200 ease-linear 
                         bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered 
                         active:bg-button-ghost-background-pressed 
                         disabled:bg-button-ghost-background-disabled 
                         border-0125 border-transparent p-100">
        <i
          className={`ab-icon !not-italic text-button-ghost-icon text-size-800 mr-0 ${icon}`}
        ></i>
      </button>

      <div
        className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 
                   transition-transform ease-linear rounded-050 border border-tooltip-background 
                   bg-tooltip-background text-tooltip-text shadow-elevation-none 
                   lg:group-hover/tooltip:shadow-elevation-200 
                   mb-150 bottom-100% translate-y-100 
                   lg:group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2"
        style={{ transitionDuration: "0ms" }}
      >
        {label}
        <div className="tooltip-arrow" data-popper-arrow="true"></div>
      </div>
    </div>
  );
}
