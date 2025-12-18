"use client";

import { useEffect, useRef, useState } from "react";
import AvatarCircle from "@/components/AvatarCircle";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import type { PostItem } from "@/types/post";
import type { SeriesItem } from "@/types/series";
import MenuHeader from "@/components/Header/MenuHeader";
import { useRouter } from "next/navigation";
import { useSearch } from "@/components/SearchContext";

interface Props {
  locale: "vi" | "en";
  initialPosts: PostItem[];
  initialSeries: SeriesItem[];
}

export default function HeaderClient({
  locale,
  initialPosts,
  initialSeries,
}: Props) {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [searchPosts, setSearchPosts] = useState(initialPosts);
  const [seriesList, setSeriesList] = useState(initialSeries);
  const [loading, setLoading] = useState(false);

  const { isSearchOpen, setIsSearchOpen } = useSearch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isSearchOpen) {
      // đợi modal render xong
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (!query.trim()) return;

    const timer = setTimeout(async () => {
      setLoading(true);

      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();

      setSearchPosts(data.posts);
      setSeriesList(data.series);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);
  return (
    <>
      {isSearchOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center transition-all duration-150 ease-linear group-data-[modal=hide]/body:opacity-0 group-data-[modal=show]/body:opacity-100 bg-transparent">
          <div
            role="dialog-content"
            className="relative p-100 rounded-050 bg-background shadow-elevation-300 transition-all duration-200 ease-linear w-full h-full opacity-100 translate-y-0"
          >
            {/* TOP */}
            <div className="flex-none w-full md:pb-300 sticky md:pt-1000 md:top-0 bg-background z-10">
              <div className="relative w-full py-300 px-100 sm:px-400 md:p-0 md:w-w680 md:mx-auto">
                {/* BACK BUTTON */}
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed lg:hover:disabled:bg-button-ghost-background-disabled disabled:bg-button-ghost-background-disabled border-0125 border-transparent py-050 px-100 mb-200 lg:mb-0 lg:absolute lg:right-100% lg:top-50% lg:-translate-y-50% lg:mr-300"
                >
                  <i className="ab-icon !not-italic text-button-ghost-icon group-disabled/ab-button:text-button-ghost-icon-disabled text-size-400 mr-100 ab-arrow_left" />
                  <span className="select-none text-button-ghost-text group-disabled/ab-button:text-button-ghost-text-disable button-text-medium">
                    Back
                  </span>

                  <div className="flex items-center justify-center -z-1 opacity-0 absolute inset-0 ab-btn-loading-wrapper transition-all">
                    <div className="relative animate-spin flex items-center justify-center w-200 h-200">
                      <div className="h-050 w-050 rounded-circle absolute left-50% -translate-x-50% top-0 z-1 bg-btn-loading-transparent" />
                      <div
                        className="w-full h-full rounded-circle border-box bg-btn-loading-transparent"
                        style={{
                          padding: "4px",
                          mask: "conic-gradient(rgba(0, 0, 0, 0) 45deg, rgb(0, 0, 0)) subtract, linear-gradient(rgb(0,0,0) 0px, rgb(0,0,0) 0px) content-box",
                        }}
                      />
                    </div>
                  </div>
                </button>

                {/* SEARCH BAR */}
                <div className="flex flex-col">
                  <label
                    htmlFor="waus9"
                    className="h-600 bg-background flex items-center py-150 px-200 rounded-050 border-0125 border-border transition-all duration-200 focus-within:border-cbr-50 focus-within:shadow-outline-primary cursor-text rounded-circle"
                  >
                    <i className="ab-icon !not-italic mr-150 flex-none transition-all duration-200 text-size-800 text-icon ab-search" />
                    <input
                      ref={inputRef}
                      placeholder="Search"
                      value={query}
                      autoComplete="off"
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && query.trim()) {
                          e.preventDefault(); // tránh submit form nếu có

                          router.push(
                            `/search?keyword=${encodeURIComponent(
                              query
                            )}&searchType=keyword`
                          );

                          // đóng modal + reset input
                          setIsSearchOpen(false);
                          setQuery("");
                        }
                      }}
                      className="outline-none bg-transparent align-middle flex-1 text-text-primary placeholder:text-text-subtlest"
                    />

                    <div className="w-300 h-300 flex items-center justify-center ml-150 lg:hover:cursor-pointer visible">
                      <i
                        onClick={() => {
                          setQuery("");
                          inputRef.current?.focus();
                        }}
                        className="ab-icon !not-italic flex-none text-size-400 text-icon-subtlest ab-cancel"
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
            {/* MAIN SCROLL AREA */}
            <div className="no-scrollbar h-full w-full overflow-y-auto flex-1 relative flex flex-col">
              {searchPosts.length > 0 && (
                <div className="w-full sm:px-200 md:px-0 mx-auto max-w-w960 overflow-y-auto no-scrollbar">
                  <div className="w-full relative md:px-200 pb-sp200 lg:pb-0">
                    <div className="flex flex-col lg:flex-row">
                      {/* LEFT COLUMN */}
                      <div className="lg:w-w430 lg:flex-none">
                        <div className="py-100 px-100 sm:px-200">
                          <div className="relative py-100">
                            <span className="ui-text-x-small-emphasis text-text-subtlest">
                              POSTS
                            </span>
                            <div className="bg-divider-subtle h-0125 w-full absolute -bottom-100 left-0" />
                          </div>
                        </div>

                        {searchPosts.map((post, index) => (
                          <React.Fragment key={post.slug}>
                            <Link
                              href={`/${post.slug}`}
                              className="block grow group/search-suggest"
                            >
                              <div className="flex py-300 px-100 sm:px-200 gap-200">
                                <div className="w-w90 flex-none">
                                  <img
                                    src={post.image}
                                    alt={post.title}
                                    width={90}
                                    height={60}
                                    className="rounded-050 object-cover"
                                  />
                                </div>

                                <div className="flex flex-col flex-1">
                                  <p className="ui-text-small-emphasis text-text-primary line-clamp-2">
                                    {post.title}
                                  </p>

                                  <div className="flex items-center gap-100 mt-050 ui-text-small">
                                    <span>{post.date}</span>
                                    <AvatarCircle />
                                    <span className="badge">
                                      {post.readTime}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Link>

                            {/* DIVIDER – trừ bài cuối */}
                            {index !== searchPosts.length - 1 && (
                              <div className="px-200">
                                <div className="bg-divider h-0125 w-full" />
                              </div>
                            )}
                          </React.Fragment>
                        ))}
                      </div>

                      {/* RIGHT COLUMN */}
                      <div className="lg:flex-1">
                        <div className="w-full">
                          <div className="py-100 px-200">
                            <div className="relative py-100">
                              <span className="ui-text-x-small-emphasis text-text-subtlest">
                                SERIES
                              </span>
                              <div className="bg-divider-subtle h-0125 w-full absolute -bottom-100 left-0" />
                            </div>
                          </div>

                          {/* SERIES SCROLL */}
                          <div className="flex overflow-x-auto no-scrollbar">
                            {seriesList.slice(0, 2).map((series) => (
                              <Link
                                key={series.id}
                                className="min-w-w320 lg:min-w-0 w-1/2"
                                href={`/series/${series.slug}`}
                              >
                                <div className="transition-all duration-300 bg-background lg:hover:bg-background-hovered group/seriesCard p-200">
                                  <div className="w-full relative overflow-hidden rounded-050">
                                    <picture>
                                      <img
                                        alt={series.name}
                                        width={379}
                                        height={379}
                                        className="transition-all duration-200 ease-linear object-cover 
                         lg:group-hover/seriesCard:scale-105 
                         aspect-3-2 md:aspect-square w-full rounded-050"
                                        src={series.image}
                                      />
                                    </picture>

                                    {/* OVERLAY TEXT */}
                                    <div className="pb-200 px-200 top-400 flex flex-col justify-end absolute inset-x-0 bottom-0 rounded-050 bg-series-overlay">
                                      <div
                                        data-theme="dark"
                                        className="select-none flex-1 relative overflow-hidden flex flex-col justify-end"
                                      >
                                        <div className="text-text-primary article-h6">
                                          {series.name}
                                        </div>
                                        <div className="ui-text-x-small text-text-secondary mt-100">
                                          {series.count} POSTS
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sticky bottom-0 inset-x-0 flex justify-center lg:justify-end bg-background md:mt-200 md:mb-800 py-100 z-1">
                      <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed lg:hover:disabled:bg-button-ghost-background-disabled disabled:bg-button-ghost-background-disabled border-0125 border-transparent py-100 px-150">
                        <i className="ab-icon !not-italic text-button-ghost-icon group-disabled/ab-button:text-button-ghost-icon-disabled text-size-400 mr-100 ab-enter"></i>
                        <span className="select-none text-button-ghost-text group-disabled/ab-button:text-button-ghost-text-disable button-text-large">
                          Enter for more
                        </span>
                        <div className="flex items-center justify-center -z-1 opacity-0 absolute inset-0 ab-btn-loading-wrapper transition-all">
                          <div className="relative animate-spin flex items-center justify-center w-300 h-300">
                            <div className="h-050 w-050 rounded-circle absolute left-50% -translate-x-50% top-0 z-1 bg-btn-loading-transparent"></div>
                            <div
                              className="w-full h-full rounded-circle border-box bg-btn-loading-transparent"
                              style={{
                                padding: "4px",
                                mask: "conic-gradient(rgba(0, 0, 0, 0) 45deg, rgb(0, 0, 0)) subtract, linear-gradient(rgb(0, 0, 0) 0px, rgb(0, 0, 0) 0px) content-box",
                                WebkitMask:
                                  "conic-gradient(rgba(0, 0, 0, 0) 45deg, rgb(0, 0, 0)) subtract, linear-gradient(rgb(0, 0, 0) 0px, rgb(0, 0, 0) 0px) content-box",
                              }}
                            />
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-200 left-200 h-fit w-fit -z-1"></div>
      <MenuHeader
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        locale={locale}
      />
    </>
  );
}
