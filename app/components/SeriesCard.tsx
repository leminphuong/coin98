"use client";
import React from "react";

import type { SeriesItem } from "@/types/series";
import Link from "next/link";

/* ============================================
   SERIES CARD DESKTOP (Upside style - Enhanced)
=============================================== */

export function SeriesCardDesktop({ item }: { item: SeriesItem }) {
  return (
    <Link href={item.url}>
      <div
        draggable={false}
        className="transition-all duration-300 bg-background lg:hover:bg-background-hovered group/seriesCard p-300"
      >
        <div className="w-full relative overflow-hidden rounded-050">
          <picture>
            <img
              alt={item.title}
              width={379}
              height={379}
              fetchPriority="high"
              decoding="async"
              className="transition-all duration-200 ease-linear object-cover lg:group-hover/seriesCard:scale-105 aspect-3-2 md:aspect-square w-full rounded-050"
              src={item.image}
              style={{ color: "transparent" }}
            />

            {/* OVERLAY */}
            <div className="top-40% pb-300 px-300 lg:group-hover/seriesCard:top-0 transition-all duration-200 ease-linear flex flex-col justify-end absolute inset-x-0 bottom-0 rounded-050 bg-series-overlay">
              <div
                data-theme="dark"
                className="select-none flex-1 relative overflow-hidden flex flex-col justify-end"
              >
                <div className="text-text-primary article-h4 delay-200 lg:group-hover/seriesCard:opacity-0 lg:group-hover/seriesCard:delay-0">
                  {item.title}
                </div>

                <div className="ui-text-x-small text-text-secondary mt-100 delay-200 lg:group-hover/seriesCard:opacity-0 lg:group-hover/seriesCard:delay-0">
                  {item.count} count
                </div>

                <div className="inset-x-0 bottom-0 absolute transition-all duration-200 ease-linear article-text-x-small text-text-primary line-clamp-4 translate-y-30% opacity-0 delay-0 lg:group-hover/seriesCard:translate-y-0 lg:group-hover/seriesCard:opacity-100 lg:group-hover/seriesCard:delay-100">
                  {item.description}
                </div>
              </div>

              {/* BUTTONS */}
              <div
                data-theme="dark"
                className="flex items-center justify-between w-full mt-300"
              >
                {/* COPY LINK */}
                <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible">
                  <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed border-0125 border-transparent p-100">
                    <i className="ab-icon text-button-ghost-icon text-size-800 mr-0 ab-link"></i>
                  </button>

                  <div className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 transition-transform ease-linear rounded-050 border border-tooltip-background bg-tooltip-background mb-150 bottom-100% translate-y-100 lg:group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2">
                    Copy link
                    <div
                      className="tooltip-arrow"
                      data-popper-arrow="true"
                    ></div>
                  </div>
                </div>

                {/* FOLLOW BUTTON */}
                <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-tertiary-background lg:hover:bg-button-tertiary-background-hovered active:bg-button-tertiary-background-pressed border-0125 border-button-tertiary-border py-050 px-100">
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

export function SeriesCardMobile({ item }: { item: SeriesItem }) {
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
              alt={item.title}
              fetchPriority="high"
              width="379"
              height="379"
              decoding="async"
              data-nimg="1"
              className="
                transition-all duration-200 ease-linear object-cover
                lg:group-hover/seriesCard:scale-105
                aspect-3-2 md:aspect-square lg:aspect-square
                w-full rounded-050
              "
              src={item.image}
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
                  {item.title}
                </div>

                <div
                  className="
                    ui-text-x-small text-text-secondary mt-100
                    lg:delay-200
                    lg:group-hover/seriesCard:opacity-0 
                    lg:group-hover/seriesCard:delay-0
                  "
                >
                  {item.count} count
                </div>

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

                  <div
                    className="
                      w-max h-max absolute z-10 overflow-hidden px-075 py-050 
                      text-size-400 transition-transform ease-linear 
                      rounded-050 border border-tooltip-background 
                      bg-tooltip-background text-tooltip-text 
                      shadow-elevation-none mb-150 
                      bottom-100% translate-y-100 
                      lg:group-hover/tooltip:translate-y-0 
                      left-1/2 -translate-x-1/2
                    "
                  >
                    Copy link
                    <div
                      className="tooltip-arrow"
                      data-popper-arrow="true"
                    ></div>
                  </div>
                </div>

                {/* FOLLOW BUTTON */}
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
