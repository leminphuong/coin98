"use client";
import AvatarCircle from "@/components/AvatarCircle";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const keywordParam = searchParams.get("keyword") || "";
  const [keyword, setKeyword] = useState(keywordParam);

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
      `/search?keyword=${encodeURIComponent(keyword)}&searchType=keyword`
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
                1001 results for
              </span>
            </div>

            <div className="py-050 lg:text-center">
              <span className="ui-h3-emphasis md:ui-h2-emphasis text-text-primary">
                {keyword}
              </span>
            </div>
          </div>
        </div>

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
            {activeTab === "all" && (
              <div
                className="mt-2 focus-visible:outline-none"
                data-state="active"
                role="tabpanel"
                aria-labelledby="uQ9KSC07aNvJUpzF-trigger-all"
                id="uQ9KSC07aNvJUpzF-content-all"
                tabIndex={0}
              >
                <div className="flex flex-col pb-800">
                  <div className="px-200 md:px-300 py-200">
                    <div className="py-050 flex items-center justify-between">
                      <div className="flex h-500 items-center">
                        <span className="ui-text-large-emphasis md:ui-h3-emphasis">
                          Posts
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap">
                    <Link
                      className="group block w-full md:w-50% lg:w-1/3 2xl:w-1/4"
                      href="/huong-dan-serenity-halo-testnet"
                    >
                      <div
                        id="pzk9gbg78q05k8ds"
                        draggable="false"
                        className="transition-all duration-300 bg-background lg:hover:bg-background-hovered article-vertical select-none px-200 py-300 md:px-300"
                      >
                        <picture className="relative mb-200 block">
                          <img
                            alt="Hướng dẫn làm Serenity & Halo Testnet trên Aura Network"
                            fetchPriority="high"
                            loading="eager"
                            width="600"
                            height="400"
                            decoding="async"
                            data-nimg="1"
                            className="object-cover rounded-050 aspect-3-2 w-full rounded-050"
                            sizes="(max-width: 480px) 100vw, (max-width: 675px) 60vw, 50vw"
                            src="/_next/image?url=https%3A%2F%2Ffile.coin98.com%2Fthumbnail%2Fhuong-dan-serenity-halo-testnet.png&w=3840&q=75"
                            style={{ color: "transparent" }}
                          />
                        </picture>

                        <div className="ui-text-small text-text-secondary min-h-300 flex-wrap items-center mb-100 flex">
                          <div className="flex items-center h-max ui-text-small text-text-primary">
                            <div className="aspect-square ab-avatar-people ab-avatar-size-24 flex-none mr-100">
                              <img
                                alt="Avatar"
                                loading="lazy"
                                width="32"
                                height="32"
                                decoding="async"
                                data-nimg="1"
                                className="avatar-img aspect-square w-full object-cover"
                                sizes="(max-width: 675px) 24px, 24px"
                                src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Fchannel%2Fchnbzaa92ook5tnj%2Ffuyvacrzjs2gap74gp5ulvwf5g1i25zr%2Fupside-logo.png&w=3840&q=50"
                                style={{ color: "transparent" }}
                              />
                            </div>

                            <div className="line-clamp-1 break-all max-w-w160 ui-text-x-small md:ui-text-small">
                              <span>hangduong</span>
                            </div>
                          </div>
                          <AvatarCircle />
                          May 18 2022
                        </div>

                        <p className="text-text-primary break-words md:article-h5 article-h5">
                          Hướng dẫn làm Serenity & Halo Testnet trên Aura
                          Network
                        </p>

                        <div className="mt-100 hidden">
                          <span className="article-text-x-small break-words line-clamp-3 text-text-secondary">
                            Aura vừa thông báo sự kiện testnet mới...
                          </span>
                        </div>

                        {/* Bottom actions */}
                        <div className="h-400 items-center justify-between mt-150 flex">
                          <div className="flex items-center">
                            <div className="box-border badge flex w-fit items-center justify-center rounded-circle border-0125 px-100 py-0125 border-badge-labeled-neutral-border bg-badge-labeled-neutral-background h-300 text-text-primary my-050 whitespace-nowrap">
                              <span className="ui-text-small text-badge-labeled-neutral-text">
                                4 min read
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center">
                            {/* Save */}
                            <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible mr-150">
                              <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background p-100">
                                <i className="ab-icon !not-italic text-button-ghost-icon text-size-800 mr-0 ab-bookmark_outlined"></i>
                              </button>

                              <div className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 rounded-050 border border-tooltip-background bg-tooltip-background text-tooltip-text mb-150 bottom-100% translate-y-100 group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2">
                                Save
                                <div
                                  className="tooltip-arrow"
                                  data-popper-arrow="true"
                                ></div>
                              </div>
                            </div>

                            {/* Copy link */}
                            <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible">
                              <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background p-100">
                                <i className="ab-icon !not-italic text-button-ghost-icon text-size-800 mr-0 ab-link"></i>
                              </button>

                              <div className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 rounded-050 border border-tooltip-background bg-tooltip-background text-tooltip-text mb-150 bottom-100% translate-y-100 group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2">
                                Copy link
                                <div
                                  className="tooltip-arrow"
                                  data-popper-arrow="true"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* More suggestions */}
                  <div className="flex justify-center mt-600">
                    <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 bg-button-tertiary-background border-0125 border-button-tertiary-border md:py-150 md:px-200 py-050 px-100">
                      <span className="text-button-tertiary-text md:button-text-large button-text-medium">
                        More suggestions
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: POSTS */}
            {activeTab === "posts" && (
              <div role="tabpanel" className="mt-2 focus-visible:outline-none">
                <div className="flex flex-col pb-800">
                  <div className="px-200 md:px-300 py-200">
                    <div className="py-050 flex items-center justify-between">
                      <div className="flex h-500 items-center">
                        <span className="ui-text-large-emphasis md:ui-h3-emphasis">
                          Posts
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap">
                    <Link
                      className="group block w-full md:w-50% lg:w-1/3 2xl:w-1/4"
                      href="/huong-dan-serenity-halo-testnet"
                    >
                      <div
                        id="pzk9gbg78q05k8ds"
                        draggable="false"
                        className="transition-all duration-300 bg-background lg:hover:bg-background-hovered article-vertical select-none px-200 py-300 md:px-300"
                      >
                        <picture className="relative mb-200 block">
                          <img
                            alt="Hướng dẫn làm Serenity & Halo Testnet trên Aura Network"
                            fetchPriority="high"
                            loading="eager"
                            width="600"
                            height="400"
                            decoding="async"
                            data-nimg="1"
                            className="object-cover rounded-050 aspect-3-2 w-full rounded-050"
                            sizes="(max-width: 480px) 100vw, (max-width: 675px) 60vw, 50vw"
                            src="/_next/image?url=https%3A%2F%2Ffile.coin98.com%2Fthumbnail%2Fhuong-dan-serenity-halo-testnet.png&w=3840&q=75"
                            style={{ color: "transparent" }}
                          />
                        </picture>

                        <div className="ui-text-small text-text-secondary min-h-300 flex-wrap items-center mb-100 flex">
                          <div className="flex items-center h-max ui-text-small text-text-primary">
                            <div className="aspect-square ab-avatar-people ab-avatar-size-24 flex-none mr-100">
                              <img
                                alt="Avatar"
                                loading="lazy"
                                width="32"
                                height="32"
                                decoding="async"
                                data-nimg="1"
                                className="avatar-img aspect-square w-full object-cover"
                                sizes="(max-width: 675px) 24px, 24px"
                                src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Fchannel%2Fchnbzaa92ook5tnj%2Ffuyvacrzjs2gap74gp5ulvwf5g1i25zr%2Fupside-logo.png&w=3840&q=50"
                                style={{ color: "transparent" }}
                              />
                            </div>

                            <div className="line-clamp-1 break-all max-w-w160 ui-text-x-small md:ui-text-small">
                              <span>hangduong</span>
                            </div>
                          </div>
                          <AvatarCircle />
                          May 18 2022
                        </div>

                        <p className="text-text-primary break-words md:article-h5 article-h5">
                          Hướng dẫn làm Serenity & Halo Testnet trên Aura
                          Network
                        </p>

                        <div className="mt-100 hidden">
                          <span className="article-text-x-small break-words line-clamp-3 text-text-secondary">
                            Aura vừa thông báo sự kiện testnet mới...
                          </span>
                        </div>

                        {/* Bottom actions */}
                        <div className="h-400 items-center justify-between mt-150 flex">
                          <div className="flex items-center">
                            <div className="box-border badge flex w-fit items-center justify-center rounded-circle border-0125 px-100 py-0125 border-badge-labeled-neutral-border bg-badge-labeled-neutral-background h-300 text-text-primary my-050 whitespace-nowrap">
                              <span className="ui-text-small text-badge-labeled-neutral-text">
                                4 min read
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center">
                            {/* Save */}
                            <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible mr-150">
                              <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background p-100">
                                <i className="ab-icon !not-italic text-button-ghost-icon text-size-800 mr-0 ab-bookmark_outlined"></i>
                              </button>

                              <div className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 rounded-050 border border-tooltip-background bg-tooltip-background text-tooltip-text mb-150 bottom-100% translate-y-100 group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2">
                                Save
                                <div
                                  className="tooltip-arrow"
                                  data-popper-arrow="true"
                                ></div>
                              </div>
                            </div>

                            {/* Copy link */}
                            <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible">
                              <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background p-100">
                                <i className="ab-icon !not-italic text-button-ghost-icon text-size-800 mr-0 ab-link"></i>
                              </button>

                              <div className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 rounded-050 border border-tooltip-background bg-tooltip-background text-tooltip-text mb-150 bottom-100% translate-y-100 group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2">
                                Copy link
                                <div
                                  className="tooltip-arrow"
                                  data-popper-arrow="true"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
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
                    <Link
                      className="group block w-full md:w-50% lg:w-1/3 2xl:w-1/4"
                      target="_blank"
                      href="/courses/farming-101"
                    >
                      <div className="transition-all duration-300 bg-background lg:hover:bg-background-hovered select-none lg:hover:cursor-pointer group/course-card py-400 px-200 md:px-300 h-full flex flex-col">
                        {/* Thumbnail */}
                        <div className="w-full relative mb-200 aspect-video rounded-050 overflow-hidden">
                          <img
                            alt="Farming 101 - Tối ưu chiến lược farming trong DeFi"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="w-full object-cover"
                            sizes="(max-width: 480px) 30vw, (max-width: 675px) 60vw, 20vw"
                            src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Fcourses%2Fcse62xxih5hkocvo%2Ffevyigyl6yooyopwhv1gdvi9h0zmglgy%2Ffarming-101-upside.jpg&w=3840&q=75"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: "0px",
                              color: "transparent",
                            }}
                          />
                        </div>

                        {/* Title + Badge */}
                        <div>
                          <div className="break-words">
                            <p className="article-h5">
                              Farming 101 - Tối ưu chiến lược farming trong DeFi
                            </p>
                          </div>

                          <div className="mt-100 h-250">
                            <div className="flex items-center">
                              <i className="ab-icon !not-italic mr-100 text-size-400 text-ay ab-ribbon_filled"></i>
                              <div className="flex items-center">
                                <span className="ui-text-small whitespace-nowrap">
                                  Intermediate
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Instructor */}
                        <div className="relative mt-200 pt-050 grow flex flex-col justify-end">
                          <div className="bg-divider h-0125 w-full"></div>

                          <div className="flex items-center w-full mt-100">
                            <div className="flex-none ui-text-small text-text-subtlest">
                              Instructor
                            </div>

                            <div className="flex-1 items-center">
                              <div className="flex justify-end min-w-400">
                                <div className="flex items-center h-max ui-text-small text-text-primary">
                                  <div className="aspect-square ab-avatar-people ab-avatar-size-24 flex-none mr-100">
                                    <img
                                      alt="Avatar"
                                      loading="lazy"
                                      width="32"
                                      height="32"
                                      decoding="async"
                                      data-nimg="1"
                                      className="avatar-img aspect-square w-full object-cover"
                                      sizes="(max-width: 675px) 24px, 24px"
                                      src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fuserdata%2Fusr0edxeyf3hqo4s6a1ubqbbt72p4a0s%2Fprofile-pictures%2Ff2ti9xky7rxhlaaqnt2e1009grxhm3l1%2Fphoto_2024-06-06_15-46-40.jpg&w=3840&q=50"
                                      style={{ color: "transparent" }}
                                    />
                                  </div>

                                  <div className="line-clamp-1 break-all max-w-w160 ui-text-x-small md:ui-text-small">
                                    <span>Jack Vĩ</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Duration */}
                          <div className="flex items-center w-full mt-100">
                            <div className="flex-none ui-text-small text-text-subtlest">
                              Duration
                            </div>

                            <div className="flex-1 items-center">
                              <div className="flex items-center justify-end">
                                <span className="ui-text-small text-text-secondary">
                                  16 Lessons
                                </span>
                                &nbsp;
                                <span className="ui-text-small text-text-subtlest">
                                  (About 1 hour)
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Bottom: Free Course + Save */}
                          <div className="flex items-center w-full pt-050 mt-100">
                            <div className="flex-none ui-text-small text-text-subtlest">
                              <div>
                                <div className="box-border badge flex w-fit items-center justify-center rounded-circle border-0125 px-100 py-0125 border-badge-labeled-neutral-border bg-badge-labeled-neutral-background">
                                  <span className="ui-text-small text-badge-labeled-neutral-text">
                                    Free course
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="flex-1 items-center">
                              <div className="w-full flex justify-end">
                                <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible ml-auto">
                                  <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background border-0125 border-transparent p-100">
                                    <i className="ab-icon !not-italic text-button-ghost-icon text-size-800 mr-0 ab-bookmark_outlined"></i>

                                    <div className="flex items-center justify-center -z-1 opacity-0 absolute inset-0 ab-btn-loading-wrapper transition-all">
                                      <div className="relative animate-spin flex items-center justify-center w-300 h-300">
                                        <div className="h-050 w-050 rounded-circle absolute left-50% -translate-x-50% top-0 z-1 bg-btn-loading-transparent"></div>
                                        <div
                                          className="w-full h-full rounded-circle border-box bg-btn-loading-transparent"
                                          style={{
                                            padding: "4px",
                                            mask: "conic-gradient(rgba(0,0,0,0) 45deg, #000) subtract, linear-gradient(#000 0px, #000 0px) content-box",
                                          }}
                                        ></div>
                                      </div>
                                    </div>
                                  </button>

                                  <div
                                    className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 rounded-050 border border-tooltip-background bg-tooltip-background text-tooltip-text shadow-elevation-none mb-150 bottom-100% translate-y-100 group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2"
                                    style={{ transitionDuration: "0ms" }}
                                  >
                                    Save
                                    <div
                                      className="tooltip-arrow"
                                      data-popper-arrow="true"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
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
                    <Link
                      className="group block w-full md:w-50% xl:w-1/4"
                      href="/series/the-model"
                    >
                      <div
                        draggable="false"
                        className="transition-all duration-300 bg-background lg:hover:bg-background-hovered group/seriesCard p-300"
                      >
                        <div className="w-full relative overflow-hidden rounded-050">
                          <picture>
                            <img
                              alt="The Model"
                              fetchPriority="high"
                              width="379"
                              height="379"
                              decoding="async"
                              data-nimg="1"
                              className="transition-all duration-200 ease-linear object-cover lg:group-hover/seriesCard:scale-105 aspect-3-2 md:aspect-square aspect-square w-full rounded-050"
                              sizes="(max-width: 675px) 60vw, 20vw"
                              src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Fseries%2Fspe4mstaw549%2Ff0nl9vkpdfmywh874h1lewodhlfc3m7j%2Fthe-model-upside.jpg&w=3840&q=75"
                              style={{ color: "transparent" }}
                            />

                            <div className="top-40% pb-300 px-300 lg:group-hover/seriesCard:top-0 transition-all duration-200 ease-linear flex flex-col justify-end absolute inset-x-0 bottom-0 rounded-050 bg-series-overlay">
                              <div
                                data-theme="dark"
                                className="select-none flex-1 relative overflow-hidden flex flex-col justify-end"
                              >
                                <div className="text-text-primary article-h4 delay-200 lg:group-hover/seriesCard:opacity-0 lg:group-hover/seriesCard:delay-0">
                                  The Model
                                </div>

                                <div className="ui-text-x-small text-text-secondary mt-100 delay-200 lg:group-hover/seriesCard:opacity-0 lg:group-hover/seriesCard:delay-0">
                                  5 POSTS
                                </div>

                                <div className="inset-x-0 bottom-0 absolute transition-all duration-200 ease-linear article-text-x-small text-text-primary line-clamp-4 translate-y-30% opacity-0 lg:group-hover/seriesCard:translate-y-0 lg:group-hover/seriesCard:opacity-100 lg:group-hover/seriesCard:delay-100">
                                  Series giúp độc giả hiểu được cách thức kiếm
                                  lợi nhuận của những thực thể trong thế giới
                                  crypto.
                                </div>
                              </div>

                              {/* bottom actions */}
                              <div
                                data-theme="dark"
                                className="flex items-center justify-between w-full mt-300"
                              >
                                {/* Copy link */}
                                <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible">
                                  <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background border-0125 border-transparent p-100">
                                    <i className="ab-icon !not-italic text-button-ghost-icon text-size-800 mr-0 ab-link"></i>
                                  </button>

                                  <div className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 rounded-050 border border-tooltip-background bg-tooltip-background text-tooltip-text mb-150 bottom-100% translate-y-100 group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2">
                                    Copy link
                                    <div
                                      className="tooltip-arrow"
                                      data-popper-arrow="true"
                                    ></div>
                                  </div>
                                </div>

                                <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-tertiary-background border-0125 border-button-tertiary-border py-050 px-100">
                                  <i className="ab-icon !not-italic text-button-tertiary-icon text-size-400 mr-100 ab-plus"></i>
                                  <span className="select-none text-button-tertiary-text button-text-medium">
                                    Follow series
                                  </span>
                                </button>
                              </div>
                            </div>
                          </picture>
                        </div>
                      </div>
                    </Link>
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
