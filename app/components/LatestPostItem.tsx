"use client";

import type { PostItem } from "@/types/post";


export default function LatestPostItem({
  slug,
  title,
  image,
  avatar,
  author,
  date,
  excerpt = "",
  readTime = "4 min read",
}: PostItem) {
  return (
    <div>
      <a
        tabIndex={-1}
        href={slug}
        style={{ width: "100%", display: "inline-block" }}
      >
        <div
          draggable={false}
          className="transition-all duration-300 bg-background lg:hover:bg-background-hovered article-vertical select-none px-200 py-300 md:px-300"
        >
          {/* IMAGE */}
          <picture className="relative md:mb-200 mb-200 block">
            <img
              alt={title}
              loading="eager"
              width={600}
              height={400}
              decoding="async"
              className="object-cover rounded-050 aspect-3-2 w-full"
              src={image}
              style={{ color: "transparent" }}
            />
          </picture>

          {/* AUTHOR + DATE */}
          <div className="ui-text-small text-text-secondary min-h-300 flex-wrap items-center md:mb-100 mb-100 md:flex hidden">
            <div className="flex items-center h-max ui-text-small text-text-primary">
              <div className="aspect-square ab-avatar-people ab-avatar-size-24 flex-none mr-100">
                <img
                  alt="Avatar"
                  loading="lazy"
                  width={32}
                  height={32}
                  decoding="async"
                  className="avatar-img aspect-square w-full object-cover"
                  src={avatar}
                />
              </div>

              <div className="line-clamp-1 break-all max-w-w160 ui-text-x-small md:ui-text-small">
                <span>{author}</span>
              </div>
            </div>

            <div className="m-050 flex items-center justify-center h-100 aspect-square">
              <div className="w-100 aspect-square rounded-circle bg-g block scale-50" />
            </div>

            {date}
          </div>

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

          {/* FOOTER AREA */}
          <div className="h-400 items-center justify-between md:mt-150 mt-150 md:flex hidden">
            {/* Reading time */}
            <div className="flex items-center">
              <div className="box-border badge flex w-fit items-center justify-center rounded-circle border-0125 px-100 py-0125 border-badge-labeled-neutral-border bg-badge-labeled-neutral-background h-300 text-text-primary my-050 whitespace-nowrap">
                <span className="ui-text-small text-badge-labeled-neutral-text">
                  {readTime}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center">
              {/* Save button */}
              <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible mr-150">
                <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed border-0125 p-100">
                  <i className="ab-icon text-button-ghost-icon text-size-800 ab-bookmark_outlined"></i>
                </button>
                <div className="w-max h-max absolute z-10 px-075 py-050 text-size-400 rounded-050 border bg-tooltip-background text-tooltip-text shadow-elevation-none lg:group-hover/tooltip:shadow-elevation-200 mb-150 bottom-100% translate-y-100 lg:group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2">
                  Save
                  <div className="tooltip-arrow" data-popper-arrow="true" />
                </div>
              </div>

              {/* Copy Link */}
              <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible">
                <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed border-0125 p-100">
                  <i className="ab-icon text-button-ghost-icon text-size-800 ab-link"></i>
                </button>
                <div className="w-max h-max absolute z-10 px-075 py-050 text-size-400 rounded-050 border bg-tooltip-background text-tooltip-text shadow-elevation-none lg:group-hover/tooltip:shadow-elevation-200 mb-150 bottom-100% translate-y-100 lg:group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2">
                  Copy link
                  <div className="tooltip-arrow" data-popper-arrow="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
