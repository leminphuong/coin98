"use client";
import ArticleAuthors from "@/components/ArticleAuthors";
import AvatarCircle from "@/components/AvatarCircle";
import { PostItem } from "@/types/post";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchPage() {
  const [results, setResults] = useState<{
    posts: PostItem[];
    courses: any[];
    series: any[];
  }>({
    posts: [],
    courses: [],
    series: [],
  });
const totalResults =
  (results.posts?.length || 0) +
  (results.courses?.length || 0) +
  (results.series?.length || 0);

  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const keywordParam = searchParams.get("keyword") || "";
  const [keyword, setKeyword] = useState(keywordParam);
  useEffect(() => {
    if (!keyword.trim()) return;

    setLoading(true);

    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(keyword)}`);
        console.log(res);

        const data = await res.json();
        setResults({
          posts: data.posts || [],
          courses: data.courses || [],
          series: data.series || [],
        });
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [keyword]);

  // TAB STATE
  const [activeTab, setActiveTab] = useState<
    "all" | "posts" | "courses" | "series"
  >("all");

  useEffect(() => {
    setKeyword(keywordParam);
  }, [keywordParam]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    router.push(
      `/search?keyword=${encodeURIComponent(keyword)}&searchType=keyword`,
      { scroll: false }
    );
  };

  return (
    <>
      <div className="pt-300 mx-auto w-full max-w-w1440 relative transition-all duration-200 ease-linear flex flex-col bg-background">
        <div className="flex flex-col lg:items-center">
          {/* SEARCH INPUT */}
          <div className="w-full px-200 pb-200 md:py-300 md:px-400 lg:p-0">
            <form
              onSubmit={handleSearch}
              className="flex flex-col w-full mx-auto lg:max-w-w680"
            >
              <label
                htmlFor="aa7le"
                className="h-600 bg-background flex items-center py-150 px-200 rounded-050 border-0125 border-border transition-all duration-200 cursor-text rounded-circle"
              >
                <i className="ab-icon !not-italic mr-150 flex-none text-size-800 text-icon ab-search" />

                <input
                  id="aa7le"
                  placeholder="Search"
                  autoComplete="off"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="outline-none bg-transparent flex-1 text-text-primary placeholder:text-text-subtlest"
                />
              </label>
            </form>
          </div>

          {/* RESULT COUNT */}
          <div className="px-200 md:px-400 md:pt-300 mb-300">
            <div className="py-100 lg:text-center">
              <span className="ui-text-x-small-emphasis text-text-subtlest uppercase">
                {totalResults} results for
              </span>
            </div>

            <div className="py-050 lg:text-center">
              <span className="ui-h3-emphasis md:ui-h2-emphasis text-text-primary">
                {keyword}
              </span>
            </div>
          </div>
        </div>
        {loading && (
          <div className="flex justify-center py-400">
            <div className="animate-spin w-300 h-300 border-2 border-t-transparent rounded-full" />
          </div>
        )}

        {/* --------------------------- TABS --------------------------- */}
        <div className="md:px-100 lg:px-0">
          <div>
            <div className="px-200 md:px-300">
              <div
                role="tablist"
                className="items-center border-b-0125 border-b-border-subtle w-full px-0 flex gap-500"
              >
                {/* TAB BUTTONS */}
                <button
                  role="tab"
                  aria-selected={activeTab === "all"}
                  onClick={() => setActiveTab("all")}
                  className={`py-200 border-b-025 border-b-transparent inline-flex items-center whitespace-nowrap transition-all mx-0 ${
                    activeTab === "all"
                      ? "text-text-primary border-b-text-primary"
                      : "text-text-subtlest"
                  }`}
                >
                  All
                </button>

                <button
                  role="tab"
                  aria-selected={activeTab === "posts"}
                  onClick={() => setActiveTab("posts")}
                  className={`py-200 border-b-025 border-b-transparent inline-flex items-center whitespace-nowrap transition-all mx-0 ${
                    activeTab === "posts"
                      ? "text-text-primary border-b-text-primary"
                      : "text-text-subtlest"
                  }`}
                >
                  Posts
                </button>

                <button
                  role="tab"
                  aria-selected={activeTab === "courses"}
                  onClick={() => setActiveTab("courses")}
                  className={`py-200 border-b-025 border-b-transparent inline-flex items-center whitespace-nowrap transition-all mx-0 ${
                    activeTab === "courses"
                      ? "text-text-primary border-b-text-primary"
                      : "text-text-subtlest"
                  }`}
                >
                  Courses
                </button>

                <button
                  role="tab"
                  aria-selected={activeTab === "series"}
                  onClick={() => setActiveTab("series")}
                  className={`py-200 border-b-025 border-b-transparent inline-flex items-center whitespace-nowrap transition-all mx-0 ${
                    activeTab === "series"
                      ? "text-text-primary border-b-text-primary"
                      : "text-text-subtlest"
                  }`}
                >
                  Series
                </button>
              </div>
            </div>

            {/* --------------------------- TAB CONTENT --------------------------- */}

            {/* TAB: ALL */}
            {/* TAB: ALL */}
            {activeTab === "all" && (
              <div
                className="mt-2 focus-visible:outline-none"
                role="tabpanel"
                tabIndex={0}
              >
                <div className="flex flex-col pb-800">
                  {/* ================= POSTS ================= */}
                  {results.posts.length > 0 && (
                    <>
                      <div className="px-200 md:px-300 py-200">
                        <span className="ui-text-large-emphasis md:ui-h3-emphasis">
                          Posts
                        </span>
                      </div>

                      <div className="flex flex-wrap">
                        {results.posts.slice(0, 4).map((post) => (
                          <Link
                            key={post.slug}
                            href={`/${post.slug}`}
                            className="group block w-full md:w-50% lg:w-1/3 2xl:w-1/4"
                          >
                            <div
                              className="transition-all duration-300 bg-background
                  lg:hover:bg-background-hovered article-vertical
                  select-none px-200 py-300 md:px-300"
                            >
                              <picture className="relative mb-200 block">
                                <img
                                  src={post.image}
                                  alt={post.title}
                                  className="object-cover rounded-050 aspect-3-2 w-full"
                                />
                              </picture>

                              <ArticleAuthors
                                authors={post.authors ?? []}
                                date={post.date}
                              />

                              <p className="article-h5 text-text-primary break-words">
                                {post.title}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </>
                  )}

                  {/* ================= COURSES ================= */}
                  {results.courses.length > 0 && (
                    <>
                      <div className="px-200 md:px-300 py-200">
                        <span className="ui-text-large-emphasis md:ui-h3-emphasis">
                          Courses
                        </span>
                      </div>

                      <div className="flex flex-wrap">
                        {results.courses.slice(0, 4).map((course) => (
                          <Link
                            key={course.id}
                            href={course.url}
                            target="_blank"
                            className="group block w-full md:w-50% lg:w-1/3 2xl:w-1/4"
                          >
                            {/* dùng y nguyên UI course card */}
                            <div
                              className="transition-all duration-300 bg-background
                  lg:hover:bg-background-hovered
                  select-none py-400 px-200 md:px-300 h-full flex flex-col"
                            >
                              <div className="w-full relative mb-200 aspect-video rounded-050 overflow-hidden">
                                {course.image && (
                                  <img
                                    src={course.image}
                                    alt={course.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                  />
                                )}
                              </div>

                              <p className="article-h5 break-words">
                                {course.title}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </>
                  )}

                  {/* ================= SERIES ================= */}
                  {results.series.length > 0 && (
                    <>
                      <div className="px-200 md:px-300 py-200">
                        <span className="ui-text-large-emphasis md:ui-h3-emphasis">
                          Series
                        </span>
                      </div>

                      <div className="flex flex-wrap">
                        {results.series.slice(0, 4).map((item) => (
                          <Link
                            key={item.id}
                            href={`/series/${item.slug}`}
                            className="group block w-full md:w-50% xl:w-1/4"
                          >
                            {/* dùng y nguyên UI series card */}
                            <div
                              className="transition-all duration-300 bg-background
                  lg:hover:bg-background-hovered p-300"
                            >
                              {item.image ? (
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="aspect-square w-full rounded-050 object-cover"
                                />
                              ) : (
                                <div className="aspect-square w-full rounded-050 bg-background-subtle" />
                              )}

                              <p className="mt-150 article-h5">{item.name}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </>
                  )}

                  {/* ================= EMPTY ================= */}
                  {!loading &&
                    results.posts.length === 0 &&
                    results.courses.length === 0 &&
                    results.series.length === 0 && (
                      <div className="py-800 text-center text-text-subtlest">
                        No results found for "{keyword}"
                      </div>
                    )}
                </div>
              </div>
            )}

            {/* TAB: POSTS */}
            {activeTab === "posts" && (
              <div role="tabpanel" className="mt-2 focus-visible:outline-none">
                <div className="flex flex-col pb-800">
                  {/* HEADER */}
                  <div className="px-200 md:px-300 py-200">
                    <div className="py-050 flex items-center justify-between">
                      <div className="flex h-500 items-center">
                        <span className="ui-text-large-emphasis md:ui-h3-emphasis">
                          Posts
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* EMPTY STATE */}
                  {results.posts.length === 0 && (
                    <div className="px-200 md:px-300 py-600 text-center text-text-subtlest">
                      No posts found
                    </div>
                  )}

                  {/* POSTS LIST */}
                  <div className="flex flex-wrap">
                    {results.posts.map((post) => (
                      <Link
                        key={post.slug}
                        className="group block w-full md:w-50% lg:w-1/3 2xl:w-1/4"
                        href={`/${post.slug}`}
                      >
                        <div
                          draggable="false"
                          className="transition-all duration-300 bg-background lg:hover:bg-background-hovered article-vertical select-none px-200 py-300 md:px-300"
                        >
                          {/* THUMBNAIL */}
                          <picture className="relative mb-200 block">
                            <img
                              alt={post.title}
                              loading="lazy"
                              width="600"
                              height="400"
                              className="object-cover rounded-050 aspect-3-2 w-full"
                              src={post.image}
                            />
                          </picture>

                          <ArticleAuthors
                            authors={post.authors ?? []}
                            date={post.date}
                          />

                          {/* TITLE */}
                          <p className="text-text-primary break-words md:article-h5 article-h5">
                            {post.title}
                          </p>

                          {/* EXCERPT (OPTIONAL) */}
                          {post.excerpt && (
                            <div className="mt-100 hidden">
                              <span className="article-text-x-small break-words line-clamp-3 text-text-secondary">
                                {post.excerpt}
                              </span>
                            </div>
                          )}

                          {/* ACTIONS */}
                          <div className="h-400 items-center justify-between mt-150 flex">
                            <div className="flex items-center">
                              <div className="box-border badge flex w-fit items-center justify-center rounded-circle border-0125 px-100 py-0125 border-badge-labeled-neutral-border bg-badge-labeled-neutral-background h-300 text-text-primary my-050 whitespace-nowrap">
                                <span className="ui-text-small text-badge-labeled-neutral-text">
                                  {post.readTime}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center">
                              {/* SAVE */}
                              <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 bg-button-ghost-background p-100">
                                <i className="ab-icon !not-italic text-button-ghost-icon text-size-800 ab-bookmark_outlined" />
                              </button>

                              {/* COPY LINK */}
                              <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 bg-button-ghost-background p-100 ml-150">
                                <i className="ab-icon !not-italic text-button-ghost-icon text-size-800 ab-link" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB: COURSES */}
            {activeTab === "courses" && (
              <div
                className="mt-2 focus-visible:outline-none"
                data-state="active"
                role="tabpanel"
                aria-labelledby="ymeY58dpSJ7JQrEO-trigger-courses"
                id="ymeY58dpSJ7JQrEO-content-courses"
                tabIndex={0}
              >
                <div className="flex flex-col pb-1500">
                  <div className="px-200 md:px-300 py-200">
                    <div className="py-050 flex items-center justify-between">
                      <div className="flex h-500 items-center">
                        <span className="ui-text-large-emphasis md:ui-h3-emphasis">
                          Courses
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap">
                    {results.courses.map((course) => (
                      <Link
                        key={course.id}
                        className="group block w-full md:w-50% lg:w-1/3 2xl:w-1/4"
                        href={course.url}
                        target="_blank"
                      >
                        <div className="transition-all duration-300 bg-background lg:hover:bg-background-hovered select-none lg:hover:cursor-pointer group/course-card py-400 px-200 md:px-300 h-full flex flex-col">
                          {/* THUMBNAIL */}
                          <div className="w-full relative mb-200 aspect-video rounded-050 overflow-hidden">
                            {course.image && (
                              <img
                                src={course.image}
                                alt={course.title}
                                loading="lazy"
                                className="w-full h-full object-cover absolute inset-0"
                              />
                            )}
                          </div>

                          {/* TITLE + LEVEL */}
                          <div>
                            <p className="article-h5 break-words">
                              {course.title}
                            </p>

                            <div className="mt-100 h-250">
                              <div className="flex items-center">
                                <i className="ab-icon !not-italic mr-100 text-size-400 text-ay ab-ribbon_filled" />
                                <span className="ui-text-small whitespace-nowrap">
                                  {course.level}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* INSTRUCTOR */}
                          <div className="relative mt-200 pt-050 grow flex flex-col justify-end">
                            <div className="bg-divider h-0125 w-full" />

                            <div className="flex items-center w-full mt-100">
                              <span className="flex-none ui-text-small text-text-subtlest">
                                Instructor
                              </span>

                              <div className="flex-1 flex justify-end">
                                {course.instructor?.[0] && (
                                  <div className="flex items-center ui-text-small text-text-primary">
                                    <div className="aspect-square ab-avatar-people ab-avatar-size-24 mr-100">
                                      <img
                                        src={course.instructor[0].avatar}
                                        alt={course.instructor[0].name}
                                        className="avatar-img w-full h-full object-cover"
                                      />
                                    </div>

                                    <span className="line-clamp-1 max-w-w160">
                                      {course.instructor[0].name}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* DURATION */}
                            <div className="flex items-center w-full mt-100">
                              <span className="flex-none ui-text-small text-text-subtlest">
                                Duration
                              </span>

                              <div className="flex-1 flex justify-end ui-text-small">
                                <span className="text-text-secondary">
                                  {course.duration.lessons} Lessons
                                </span>
                                &nbsp;
                                <span className="text-text-subtlest">
                                  ({course.duration.text})
                                </span>
                              </div>
                            </div>

                            {/* BOTTOM */}
                            <div className="flex items-center w-full pt-050 mt-100">
                              <div className="box-border badge rounded-circle border-0125 px-100 py-0125 border-badge-labeled-neutral-border bg-badge-labeled-neutral-background">
                                <span className="ui-text-small text-badge-labeled-neutral-text">
                                  Free course
                                </span>
                              </div>

                              <div className="flex-1 flex justify-end">
                                <button className="group/ab-button relative flex items-center justify-center rounded-050 bg-button-ghost-background p-100">
                                  <i className="ab-icon !not-italic text-size-800 ab-bookmark_outlined" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB: SERIES */}
            {activeTab === "series" && (
              <div
                className="mt-2 focus-visible:outline-none"
                data-state="active"
                role="tabpanel"
                aria-labelledby="uQ9KSC07aNvJUpzF-trigger-series"
                id="uQ9KSC07aNvJUpzF-content-series"
                tabIndex={0}
              >
                <div className="flex flex-col pb-1500">
                  <div className="px-200 md:px-300 py-200">
                    <div className="py-050 flex items-center justify-between">
                      <div className="flex h-500 items-center">
                        <span className="ui-text-large-emphasis md:ui-h3-emphasis">
                          Series
                        </span>
                      </div>

                      <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background border-0125 border-transparent md:py-150 md:px-200 py-050 px-100">
                        <span className="select-none text-button-ghost-text md:button-text-large button-text-medium">
                          More
                        </span>
                        <i className="ab-icon !not-italic text-button-ghost-icon md:text-size-800 text-size-400 ml-100 ab-arrow_right"></i>
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap">
                    {results.series.length === 0 && (
                      <div className="w-full px-200 md:px-300 py-600 text-center text-text-subtlest">
                        No series found
                      </div>
                    )}

                    {results.series.map((item) => (
                      <Link
                        key={item.id}
                        className="group block w-full md:w-50% xl:w-1/4"
                        href={`/series/${item.slug}`}
                      >
                        <div
                          draggable="false"
                          className="transition-all duration-300 bg-background lg:hover:bg-background-hovered group/seriesCard p-300"
                        >
                          <div className="w-full relative overflow-hidden rounded-050">
                            <picture>
                              {item.image ? (
                                <img
                                  alt={item.name}
                                  width="379"
                                  height="379"
                                  className="transition-all duration-200 ease-linear object-cover
                  lg:group-hover/seriesCard:scale-105
                  aspect-3-2 md:aspect-square aspect-square
                  w-full rounded-050"
                                  src={item.image}
                                />
                              ) : (
                                <div className="aspect-square w-full rounded-050 bg-background-subtle" />
                              )}

                              {/* OVERLAY */}
                              <div
                                className="top-40% pb-300 px-300 lg:group-hover/seriesCard:top-0
              transition-all duration-200 ease-linear
              flex flex-col justify-end absolute inset-x-0 bottom-0
              rounded-050 bg-series-overlay"
                              >
                                <div
                                  data-theme="dark"
                                  className="select-none flex-1 relative overflow-hidden flex flex-col justify-end"
                                >
                                  <div
                                    className="text-text-primary article-h4 delay-200
                  lg:group-hover/seriesCard:opacity-0"
                                  >
                                    {item.name}
                                  </div>

                                  <div
                                    className="ui-text-x-small text-text-secondary mt-100 delay-200
                  lg:group-hover/seriesCard:opacity-0"
                                  >
                                    {item.count} POSTS
                                  </div>

                                  {item.description && (
                                    <div
                                      className="inset-x-0 bottom-0 absolute transition-all
                    duration-200 ease-linear article-text-x-small
                    text-text-primary line-clamp-4
                    translate-y-30% opacity-0
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
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      navigator.clipboard.writeText(item.url);
                                    }}
                                    className="group/ab-button relative select-none
                    flex items-center justify-center rounded-050
                    transition-all duration-200
                    bg-button-ghost-background border-0125
                    border-transparent p-100"
                                  >
                                    <i className="ab-icon !not-italic text-button-ghost-icon text-size-800 ab-link" />
                                  </button>

                                  {/* FOLLOW (UI only – API nối sau) */}
                                  <button
                                    className="group/ab-button relative select-none
                    flex items-center justify-center rounded-050
                    transition-all duration-200
                    bg-button-tertiary-background
                    border-0125 border-button-tertiary-border
                    py-050 px-100"
                                  >
                                    <span className="button-text-medium text-button-tertiary-text">
                                      Follow series
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </picture>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
