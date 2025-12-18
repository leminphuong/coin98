
"use client";

import Link from "next/link";
import type { SeriesItem } from "@/types/series";

function getSafeImage(src?: string) {
  return src?.trim() ? src : "/default-series.jpg";
}
interface SeriesCardDesktopProps {
  item: SeriesItem;
  className?: string; // NEW
}



export function SeriesCardDesktop({
  item,
  className,
}: SeriesCardDesktopProps) {
  const imgSrc = getSafeImage(item.image);

  return (
    <Link
      href={item.url}
      className={className}   // 👈 truyền class ngoài vào đây
    >
      <div
        draggable={false}
        className="transition-all duration-300 bg-background lg:hover:bg-background-hovered group/seriesCard p-300"
      >
        <div className="w-full relative overflow-hidden rounded-050">

          {/* IMAGE */}
          <picture>
            <img
              alt={item.name}
              width={379}
              height={379}
              fetchPriority="high"
              decoding="async"
              className="transition-all duration-200 ease-linear object-cover lg:group-hover/seriesCard:scale-105 aspect-3-2 md:aspect-square w-full rounded-050"
              src={imgSrc}
            />
          </picture>

          {/* OVERLAY */}
          <div className="
              top-40% pb-300 px-300
              lg:group-hover/seriesCard:top-0
              transition-all duration-200 ease-linear
              flex flex-col justify-end
              absolute inset-x-0 bottom-0
              rounded-050 bg-series-overlay
            "
          >
            <div
              data-theme="dark"
              className="select-none flex-1 relative overflow-hidden flex flex-col justify-end"
            >
              <div className="text-text-primary article-h4 delay-200 lg:group-hover/seriesCard:opacity-0 lg:group-hover/seriesCard:delay-0">
                {item.name}
              </div>

              <div className="ui-text-x-small text-text-secondary mt-100 delay-200 lg:group-hover/seriesCard:opacity-0 lg:group-hover/seriesCard:delay-0">
                {item.count} bài viết
              </div>

              <div className="
                  inset-x-0 bottom-0 absolute
                  transition-all duration-200 ease-linear
                  article-text-x-small text-text-primary
                  line-clamp-4
                  translate-y-30% opacity-0 delay-0
                  lg:group-hover/seriesCard:translate-y-0
                  lg:group-hover/seriesCard:opacity-100
                  lg:group-hover/seriesCard:delay-100
                "
              >
                {item.description}
              </div>
            </div>

            {/* BUTTONS */}
            <div data-theme="dark" className="flex items-center justify-between w-full mt-300">
              {/* COPY */}
              <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible">
                <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed border-transparent p-100">
                  <i className="ab-icon text-button-ghost-icon text-size-800 mr-0 ab-link"></i>
                </button>
              </div>

              {/* FOLLOW */}
              <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 bg-button-tertiary-background lg:hover:bg-button-tertiary-background-hovered active:bg-button-tertiary-background-pressed border-0125 border-button-tertiary-border py-050 px-100">
                <i className="ab-icon text-button-tertiary-icon text-size-400 mr-100 ab-plus"></i>
                <span className="text-button-tertiary-text button-text-medium">
                  Follow series
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </Link>
  );
}


/* ============================================
   SERIES CARD MOBILE
=============================================== */

export function SeriesCardMobile({ item }: { item: SeriesItem }) {
  const imgSrc = getSafeImage(item.image);

  return (
    <Link href={item.url} className="lg:w-1/3 block group/seriesCard">
      <div
        draggable="false"
        className="
          transition-all duration-300 bg-background 
          lg:hover:bg-background-hovered 
          group/seriesCard 
          lg:p-300 p-200
        "
      >
        <div className="w-full relative overflow-hidden rounded-050">
          <picture>
            <img
              alt={item.name}
              fetchPriority="high"
              width="379"
              height="379"
              decoding="async"
              className="
                transition-all duration-200 ease-linear object-cover
                lg:group-hover/seriesCard:scale-105
                aspect-3-2 md:aspect-square lg:aspect-square
                w-full rounded-050
              "
              src={imgSrc}
            />

            {/* OVERLAY MOBILE */}
            <div
              className="
                pb-200 px-200 top-400 
                flex flex-col justify-end
                absolute inset-x-0 bottom-0 
                rounded-050 bg-series-overlay
                lg:top-40% lg:pb-300
                lg:transition-all duration-200 ease-linear
              "
            >
              <div
                data-theme="dark"
                className="
                  select-none flex-1 relative overflow-hidden 
                  flex flex-col justify-end
                "
              >
                <div
                  className="
                    text-text-primary 
                    article-h6 lg:article-h4
                    lg:delay-200
                    lg:group-hover/seriesCard:opacity-0 
                    lg:group-hover/seriesCard:delay-0
                  "
                >
                  {item.name}
                </div>

                <div
                  className="
                    ui-text-x-small text-text-secondary mt-100
                    lg:delay-200
                    lg:group-hover/seriesCard:opacity-0 
                    lg:group-hover/seriesCard:delay-0
                  "
                >
                  {item.count} bài viết
                </div>

                {/* DESCRIPTION (only desktop) */}
                <div
                  className="
                    inset-x-0 bottom-0 absolute transition-all duration-200 ease-linear 
                    article-text-x-small text-text-primary line-clamp-4 
                    translate-y-30% opacity-0 delay-0 
                    hidden
                    lg:block
                    lg:group-hover/seriesCard:translate-y-0 
                    lg:group-hover/seriesCard:opacity-100 
                    lg:group-hover/seriesCard:delay-100
                  "
                >
                  {item.description}
                </div>
              </div>

              {/* BUTTONS */}
              <div
                data-theme="dark"
                className="flex items-center justify-between w-full lg:mt-300 mt-150"
              >
                {/* COPY BUTTON */}
                <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible">
                  <button
                    className="
                      group/ab-button relative select-none flex items-center justify-center 
                      rounded-050 transition-all duration-200 ease-linear 
                      bg-button-ghost-background 
                      lg:hover:bg-button-ghost-background-hovered
                      active:bg-button-ghost-background-pressed
                      border-0125 border-transparent p-100
                    "
                  >
                    <i className="ab-icon text-button-ghost-icon text-size-800 ab-link"></i>
                  </button>
                </div>

                {/* FOLLOW */}
                <button
                  className="
                    group/ab-button relative select-none flex items-center justify-center 
                    rounded-050 transition-all duration-200 ease-linear 
                    bg-button-tertiary-background 
                    lg:hover:bg-button-tertiary-background-hovered
                    active:bg-button-tertiary-background-pressed
                    border-0125 border-button-tertiary-border 
                    py-050 px-100
                  "
                >
                  <i className="ab-icon text-button-tertiary-icon text-size-400 mr-100 ab-plus"></i>
                  <span className="text-button-tertiary-text button-text-medium">
                    Follow series
                  </span>
                </button>
              </div>
            </div>
          </picture>
        </div>
      </div>
    </Link>
  );
}
