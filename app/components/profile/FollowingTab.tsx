"use client";

import Link from "next/link";
import { SeriesItem } from "@/types/series";
import Image from "next/image";

type Props = {
  series: SeriesItem[];
};

export default function FollowingTab({ series }: Props) {
  if (!series || series.length === 0) {
    return (
      <>
        <div className="flex items-center px-200 md:px-300 py-200">
          <button className="group/ab-button lg:hidden mr-150 p-050 rounded-050 border-0125 bg-button-tertiary-background">
            <i className="ab-icon ab-menu text-size-400" />
          </button>

          <div className="flex grow flex-col break-words">
            <span className="ui-text-large-emphasis md:ui-h3-emphasis text-text-primary line-clamp-1">
              Following
            </span>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="flex items-center justify-center w-full p-500 ab-empty-large">
            <div className="ab-empty-content w-full flex flex-col items-center justify-center">
              <div className="empty-img">
                <img
                  src="https://admin.coinjdg.com/wp-content/uploads/2025/12/series.svg"
                  alt="empty-learning"
                  className="aspect-square object-cover"
                />
              </div>

              <div className="ab-empty-message text-text-subtlest break-words whitespace-pre-line text-center mt-150">
                You haven't followed any series yet.
                <br />
                Go explore series and finding your favorite one.{" "}
              </div>

              <div className="empty-footer flex items-center justify-center mt-300">
                <Link
                  href="/series"
                  className="group/ab-button relative select-none flex items-center justify-center
              rounded-050 transition-all duration-200 ease-linear
              bg-button-primary-background
              lg:hover:bg-button-primary-background-hovered
              active:bg-button-primary-background-pressed
              border-0125 border-button-primary-background
              py-100 px-150"
                >
                  <span className="select-none text-button-primary-text button-text-large">
                    Explore series
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="h-full">
      <div className="flex items-center px-200 md:px-300 py-200">
        <button className="group/ab-button lg:hidden mr-150 p-050 rounded-050 border-0125 bg-button-tertiary-background">
          <i className="ab-icon ab-menu text-size-400" />
        </button>

        <div className="flex grow flex-col break-words">
          <span className="ui-text-large-emphasis md:ui-h3-emphasis text-text-primary line-clamp-1">
            Following
          </span>
        </div>
      </div>
      <div className="flex flex-wrap">
        {series.map((item) => (
          <div key={item.id} className="s560:w-1/2 xl:w-1/3">
            <Link href={`/series/${item.slug}`}>
              <div
                draggable={false}
                className="transition-all duration-300 bg-background
          lg:hover:bg-background-hovered group/seriesCard
          p-200 md:hidden"
              >
                <div className="w-full relative overflow-hidden rounded-050">
                  <picture>
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={379}
                        height={379}
                        priority
                        className="transition-all duration-200 ease-linear
                  object-cover lg:group-hover/seriesCard:scale-105
                  aspect-3-2 md:aspect-square w-full rounded-050"
                      />
                    )}

                    {/* OVERLAY */}
                    <div
                      data-theme="dark"
                      className="pb-200 px-200 top-400
                flex flex-col justify-end
                absolute inset-x-0 bottom-0
                rounded-050 bg-series-overlay"
                    >
                      <div className="select-none flex-1 relative overflow-hidden flex flex-col justify-end">
                        <div className="text-text-primary article-h6">
                          {item.name}
                        </div>

                        <div className="ui-text-x-small text-text-secondary mt-100">
                          {item.count} POSTS
                        </div>

                        {item.description && (
                          <div
                            className="inset-x-0 bottom-0 absolute
                      transition-all duration-200 ease-linear
                      article-text-x-small text-text-primary
                      line-clamp-4 translate-y-30% opacity-0
                      delay-0 hidden lg:block
                      lg:group-hover/seriesCard:translate-y-0
                      lg:group-hover/seriesCard:opacity-100
                      lg:group-hover/seriesCard:delay-100"
                          >
                            {item.description}
                          </div>
                        )}
                      </div>

                      {/* ACTIONS */}
                      <div className="flex items-center justify-between w-full mt-150">
                        {/* COPY LINK */}
                        <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              navigator.clipboard.writeText(
                                item.url ||
                                  `${window.location.origin}/series/${item.slug}`
                              );
                            }}
                            className="group/ab-button relative select-none
                      flex items-center justify-center
                      rounded-050 transition-all duration-200 ease-linear
                      bg-button-ghost-background
                      lg:hover:bg-button-ghost-background-hovered
                      border-0125 border-transparent p-100"
                          >
                            <i className="ab-icon !not-italic ab-link text-size-800 text-button-ghost-icon" />
                          </button>

                          {/* TOOLTIP */}
                          <div
                            className="w-max h-max absolute z-10 overflow-hidden
                      px-075 py-050 text-size-400
                      transition-transform ease-linear
                      rounded-050 border border-tooltip-background
                      bg-tooltip-background text-tooltip-text
                      shadow-elevation-none
                      lg:group-hover/tooltip:shadow-elevation-200
                      mb-150 bottom-100%
                      translate-y-100
                      lg:group-hover/tooltip:translate-y-0
                      left-1/2 -translate-x-1/2"
                          >
                            Copy link
                            <div className="tooltip-arrow" />
                          </div>
                        </div>

                        {/* FOLLOWING */}
                        <button
                          type="button"
                          className="group/ab-button relative select-none
                    flex items-center justify-center
                    rounded-050 transition-all duration-200 ease-linear
                    bg-button-tertiary-background
                    lg:hover:bg-button-tertiary-background-hovered
                    border-0125 border-button-tertiary-border
                    py-050 px-100"
                        >
                          <span className="select-none text-button-tertiary-text button-text-medium">
                            Following
                          </span>
                        </button>
                      </div>
                    </div>
                  </picture>
                </div>
              </div>
              <div
                draggable={false}
                className="transition-all duration-300 bg-background
          lg:hover:bg-background-hovered group/seriesCard
          p-200 hidden md:block"
              >
                <div className="w-full relative overflow-hidden rounded-050">
                  <picture>
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={379}
                        height={379}
                        priority
                        className="transition-all duration-200 ease-linear
                  object-cover lg:group-hover/seriesCard:scale-105
                  aspect-square w-full rounded-050"
                      />
                    )}

                    {/* OVERLAY */}
                    <div
                      data-theme="dark"
                      className="top-40% pb-300 px-300
                lg:group-hover/seriesCard:top-0
                transition-all duration-200 ease-linear
                flex flex-col justify-end
                absolute inset-x-0 bottom-0
                rounded-050 bg-series-overlay"
                    >
                      <div className="select-none flex-1 relative overflow-hidden flex flex-col justify-end">
                        {/* TITLE */}
                        <div
                          className="text-text-primary article-h4
                    delay-200
                    lg:group-hover/seriesCard:opacity-0
                    lg:group-hover/seriesCard:delay-0"
                        >
                          {item.name}
                        </div>

                        {/* COUNT */}
                        <div
                          className="ui-text-x-small text-text-secondary mt-100
                    delay-200
                    lg:group-hover/seriesCard:opacity-0
                    lg:group-hover/seriesCard:delay-0"
                        >
                          {item.count} POSTS
                        </div>

                        {/* DESCRIPTION */}
                        {item.description && (
                          <div
                            className="inset-x-0 bottom-0 absolute
                      transition-all duration-200 ease-linear
                      article-text-x-small text-text-primary
                      line-clamp-4 translate-y-30% opacity-0
                      delay-0
                      lg:group-hover/seriesCard:translate-y-0
                      lg:group-hover/seriesCard:opacity-100
                      lg:group-hover/seriesCard:delay-100"
                          >
                            {item.description}
                          </div>
                        )}
                      </div>

                      {/* ACTIONS */}
                      <div
                        data-theme="dark"
                        className="flex items-center justify-between w-full mt-300"
                      >
                        {/* COPY LINK */}
                        <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              navigator.clipboard.writeText(
                                `${window.location.origin}/series/${item.slug}`
                              );
                            }}
                            className="group/ab-button relative select-none
                      flex items-center justify-center
                      rounded-050 transition-all duration-200 ease-linear
                      bg-button-ghost-background
                      lg:hover:bg-button-ghost-background-hovered
                      active:bg-button-ghost-background-pressed
                      border-0125 border-transparent p-100"
                          >
                            <i className="ab-icon !not-italic ab-link text-size-800 text-button-ghost-icon" />
                          </button>

                          {/* TOOLTIP */}
                          <div
                            className="w-max h-max absolute z-10 overflow-hidden
                      px-075 py-050 text-size-400
                      transition-transform ease-linear
                      rounded-050 border border-tooltip-background
                      bg-tooltip-background text-tooltip-text
                      shadow-elevation-none
                      lg:group-hover/tooltip:shadow-elevation-200
                      mb-150 bottom-100%
                      translate-y-100
                      lg:group-hover/tooltip:translate-y-0
                      left-1/2 -translate-x-1/2"
                            style={{ transitionDuration: "0ms" }}
                          >
                            Copy link
                            <div className="tooltip-arrow" />
                          </div>
                        </div>

                        {/* FOLLOWING */}
                        <button
                          type="button"
                          className="group/ab-button relative select-none
                    flex items-center justify-center
                    rounded-050 transition-all duration-200 ease-linear
                    bg-button-tertiary-background
                    lg:hover:bg-button-tertiary-background-hovered
                    active:bg-button-tertiary-background-pressed
                    border-0125 border-button-tertiary-border
                    py-050 px-100"
                        >
                          <span className="select-none text-button-tertiary-text button-text-medium">
                            Following
                          </span>
                        </button>
                      </div>
                    </div>
                  </picture>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
