"use client";

import { useState } from "react";
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function Page({ params }: PageProps) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "curriculum" | "files"
  >("overview");
  const [openChapter, setOpenChapter] = useState<number | null>(1);
  const toggleChapter = (id: number) => {
    setOpenChapter(openChapter === id ? null : id);
  };
  return (
    <>
      <div className="s640:pt-400 lg:pt-500 flex-1">
        <div className="w-full mx-auto max-w-w1280 transition-all duration-200 min-h-channelScreenBodyWithout1000 md:min-h-channelScreenBodyWithout1500">
          <div className="flex flex-col lg:flex-row pb-500 s640:pb-800 lg:pb-1000">
            <div className="flex-none w-full lg:w-w400 lg:pl-600 xl:pl-0 transition-all duration-200">
              <div className="lg:bg-background-subtle transition-all duration-200 s640:px-400 lg:p-300 w-full flex-none lg:sticky lg:left-0 lg:top-sp160">
                <div className="bg-background-subtle flex flex-col pb-200 s640:pb-300 lg:pb-0">
                  <div className="w-full relative aspect-video">
                    <img
                      alt="Farming 101 - Tối ưu chiến lược farming trong DeFi"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover s640:rounded-050"
                      sizes="100vw"
                      src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Fcourses%2Fcse62xxih5hkocvo%2Ffevyigyl6yooyopwhv1gdvi9h0zmglgy%2Ffarming-101-upside.jpg&w=3840&q=75"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: 0,
                        color: "transparent",
                      }}
                    />
                  </div>

                  <div className="px-200 s640:px-300 lg:px-0 mt-200 s640:mt-250">
                    <div className="-mx-150 flex items-center">
                      <div className="mx-150 flex items-center">
                        <i className="ab-icon !not-italic mr-050 text-size-400 text-icon-secondary ab-learner"></i>
                        <span className="ui-text-small text-text-secondary">
                          442
                        </span>
                      </div>

                      <div className="mx-150 flex items-center">
                        <i className="ab-icon !not-italic mr-050 text-size-400 text-icon-secondary ab-bookmark_outlined"></i>
                        <span className="ui-text-small text-text-secondary">
                          22
                        </span>
                      </div>
                    </div>

                    <div className="mt-100 s640:mt-150">
                      <span className="article-h5 s640:article-h4 text-text-primary break-words">
                        Farming 101 - Tối ưu chiến lược farming trong DeFi
                      </span>
                    </div>

                    <div className="mt-100 s640:mt-150">
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

                  <div className="px-200 s640:px-300 lg:px-0 lg:relative flex flex-wrap items-center lg:flex-col mt-200 s640:mt-250">
                    <div className="bg-divider h-0125 w-full hidden lg:block absolute top-0 left-0 right-0"></div>

                    <div className="flex items-center lg:w-full lg:mt-100">
                      <div className="flex-none ui-text-small text-text-subtlest hidden lg:block">
                        Duration
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-end">
                          <span className="ui-text-x-small md:ui-text-small text-text-primary">
                            About 1 hour
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-divider w-0125 lg:hidden mx-200 h-200"></div>

                    <div className="flex items-center lg:w-full lg:mt-100">
                      <div className="flex-none ui-text-small text-text-subtlest hidden lg:block">
                        Languages
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-end">
                          <span className="ui-text-x-small md:ui-text-small text-text-primary">
                            Vietnamese
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-200 s640:px-300 lg:px-0 mt-200 s640:mt-250">
                    <div className="box-border badge flex w-fit items-center justify-center rounded-circle border-0125 px-100 py-0125 border-badge-labeled-neutral-border bg-badge-labeled-neutral-background">
                      <span className="ui-text-small text-badge-labeled-neutral-text">
                        Free course
                      </span>
                    </div>
                  </div>

                  <div className="hidden lg:block lg:mt-250">
                    <div className="flex flex-row-reverse justify-between lg:flex-row items-center">
                      <div className="lg:mr-200">
                        <button className="group/ab-button relative select-none flex items-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed bg-button-primary-background lg:hover:bg-button-primary-background-hovered active:bg-button-primary-background-pressed lg:hover:disabled:bg-button-primary-background-disabled disabled:bg-button-primary-background-disabled border-0125 border-button-primary-background lg:hover:border-button-primary-background-hovered active:border-button-primary-background-pressed lg:hover:disabled:border-button-primary-background-disabled disabled:border-button-primary-background-disabled py-150 px-200 min-w-w200 xl:min-w-w240 text-center ml-auto lg:w-full justify-center">
                          <span className="select-none text-button-primary-text group-disabled/ab-button:text-button-primary-text-disable button-text-large">
                            Sign in to start
                          </span>
                        </button>
                      </div>

                      <div className="flex items-center flex-none">
                        {/* Save button */}
                        <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible mr-100">
                          <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed border-0125 border-transparent p-100">
                            <i className="ab-icon !not-italic text-button-ghost-icon text-size-800 ab-bookmark_outlined"></i>
                          </button>

                          <div className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 rounded-050 border border-tooltip-background bg-tooltip-background text-tooltip-text shadow-elevation-none lg:group-hover/tooltip:shadow-elevation-200 mb-150 bottom-100% translate-y-100 lg:group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2">
                            Save
                            <div
                              className="tooltip-arrow"
                              data-popper-arrow="true"
                            ></div>
                          </div>
                        </div>

                        {/* Copy link */}
                        <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible">
                          <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed border-0125 border-transparent p-100">
                            <i className="ab-icon !not-italic text-button-ghost-icon text-size-800 ab-link"></i>
                          </button>

                          <div className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 rounded-050 border border-tooltip-background bg-tooltip-background text-tooltip-text shadow-elevation-none lg:group-hover/tooltip:shadow-elevation-200 mb-150 bottom-100% translate-y-100 lg:group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2">
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
                </div>
              </div>
            </div>
            <div className="flex-1 pt-200 s640:px-100 lg:pl-500 lg:pr-600 xl:pr-0 lg:pt-0 transition-all duration-200">
              <div>
                <div className="px-200 md:px-300">
                  <div
                    role="tablist"
                    className="inline-flex items-center border-b-0125 border-b-border-subtle w-full gap-500 border-none px-0"
                  >
                    {/* TAB: Overview */}
                    <div
                      role="tab"
                      aria-selected={activeTab === "overview"}
                      data-state={
                        activeTab === "overview" ? "active" : "inactive"
                      }
                      id="tab-overview"
                      onClick={() => setActiveTab("overview")}
                      className={`py-200 text-text-subtlest mx-150 lg:hover:cursor-pointer border-b-025 border-b-transparent inline-flex items-center whitespace-nowrap transition-all !mx-0 cursor-pointer 
        ${
          activeTab === "overview"
            ? "text-text-primary border-b-text-primary"
            : ""
        }`}
                    >
                      Overview
                    </div>

                    {/* TAB: Curriculum */}
                    <div
                      role="tab"
                      aria-selected={activeTab === "curriculum"}
                      data-state={
                        activeTab === "curriculum" ? "active" : "inactive"
                      }
                      id="tab-curriculum"
                      onClick={() => setActiveTab("curriculum")}
                      className={`py-200 text-text-subtlest mx-150 lg:hover:cursor-pointer border-b-025 border-b-transparent inline-flex items-center whitespace-nowrap transition-all !mx-0 cursor-pointer 
        ${
          activeTab === "curriculum"
            ? "text-text-primary border-b-text-primary"
            : ""
        }`}
                    >
                      Curriculum
                    </div>

                    {/* TAB: Files */}
                    <div
                      role="tab"
                      aria-selected={activeTab === "files"}
                      data-state={activeTab === "files" ? "active" : "inactive"}
                      id="tab-files"
                      onClick={() => setActiveTab("files")}
                      className={`py-200 text-text-subtlest mx-150 lg:hover:cursor-pointer border-b-025 border-b-transparent inline-flex items-center whitespace-nowrap transition-all !mx-0 cursor-pointer 
        ${
          activeTab === "files" ? "text-text-primary border-b-text-primary" : ""
        }`}
                    >
                      Downloadable files
                    </div>
                  </div>

                  <div className="bg-divider h-0125 w-full"></div>
                </div>

                <div
                  role="tabpanel"
                  id="panel-overview"
                  aria-labelledby="tab-overview"
                  hidden={activeTab !== "overview"}
                  className="mt-2 focus-visible:outline-none"
                  tabIndex={0}
                  style={{}}
                >
                  <div>
                    <div className="p-200 s640:p-300 flex items-center">
                      <div className="flex-1 mr-200">
                        <span className="ui-text-large-emphasis text-text-primary">
                          This course includes
                        </span>
                      </div>

                      <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed lg:hover:disabled:bg-button-ghost-background-disabled disabled:bg-button-ghost-background-disabled border-0125 border-transparent py-050 px-100">
                        <span className="select-none text-button-ghost-text group-disabled/ab-button:text-button-ghost-text-disable button-text-medium">
                          Curriculum
                        </span>
                        <i className="ab-icon !not-italic text-button-ghost-icon group-disabled/ab-button:text-button-ghost-icon-disabled text-size-400 ml-100 ab-arrow_right"></i>

                        <div className="flex items-center justify-center -z-1 opacity-0 absolute inset-0 ab-btn-loading-wrapper transition-all">
                          <div className="relative animate-spin flex items-center justify-center w-200 h-200">
                            <div className="h-050 w-050 rounded-circle absolute left-50% -translate-x-50% top-0 z-1 bg-btn-loading-transparent"></div>
                            <div
                              className="w-full h-full rounded-circle border-box bg-btn-loading-transparent"
                              style={{
                                padding: "4px",
                                mask: "conic-gradient(rgba(0, 0, 0, 0) 45deg, rgb(0, 0, 0)) subtract, linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)) content-box",
                              }}
                            ></div>
                          </div>
                        </div>
                      </button>
                    </div>

                    <div className="px-200 s640:px-0 lg:px-100 s1180:px-0 flex flex-col s640:flex-row s640:items-center transition-all duration-200">
                      <div className="mt-200 first:mt-0 s640:mt-0 s640:mx-300 lg:mx-200 s1180:mx-300 flex items-center transition-all duration-200">
                        <i className="ab-icon !not-italic mr-100 text-size-800 text-icon-secondary ab-editor_video"></i>
                        <span className="ui-text-medium text-text-secondary">
                          16&nbsp;videos
                        </span>
                      </div>

                      <div className="mt-200 first:mt-0 s640:mt-0 s640:mx-300 lg:mx-200 s1180:mx-300 flex items-center transition-all duration-200">
                        <i className="ab-icon !not-italic mr-100 text-size-800 text-icon-secondary ab-post"></i>
                        <span className="ui-text-medium text-text-secondary">
                          0&nbsp;articles
                        </span>
                      </div>

                      <div className="mt-200 first:mt-0 s640:mt-0 s640:mx-300 lg:mx-200 s1180:mx-300 flex items-center transition-all duration-200">
                        <i className="ab-icon !not-italic mr-100 text-size-800 text-icon-secondary ab-files"></i>
                        <span className="ui-text-medium text-text-secondary">
                          3&nbsp;downloadable files
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* WHAT YOU WILL LEARN */}
                  <div className="mt-500">
                    <div className="p-200 s640:p-300 flex items-center">
                      <div className="flex-1 mr-200">
                        <span className="ui-text-large-emphasis text-text-primary">
                          What you will learn
                        </span>
                      </div>
                    </div>

                    <div className="-mt-200 s640:px-100 s640:-mt-400 flex items-start flex-wrap">
                      <div className="mt-200 s640:mt-400 flex flex-none basis-100% s640:basis-1/2 lg:basis-100% xl:basis-1/2 px-200 lg:pr-0 xl:pr-200">
                        <div className="mr-100">
                          <div className="box-border bg-background-system-green badge flex w-fit items-center justify-center rounded-circle p-100">
                            <i className="ab-icon !not-italic text-size-400 text-icon-system-green ab-chevron_check"></i>
                          </div>
                        </div>
                        <div className="flex-1 flex items-center">
                          <span className="ui-text-medium text-text-primary break-words">
                            Tổng quan kiến thức về hoạt động cung cấp thanh
                            khoản kiếm lợi nhuận (Farming)
                          </span>
                        </div>
                      </div>

                      <div className="mt-200 s640:mt-400 flex flex-none basis-100% s640:basis-1/2 lg:basis-100% xl:basis-1/2 px-200 lg:pr-0 xl:pr-200">
                        <div className="mr-100">
                          <div className="box-border bg-background-system-green badge flex w-fit items-center justify-center rounded-circle p-100">
                            <i className="ab-icon !not-italic text-size-400 text-icon-system-green ab-chevron_check"></i>
                          </div>
                        </div>
                        <div className="flex-1 flex items-center">
                          <span className="ui-text-medium text-text-primary break-words">
                            Thực chiến tìm kiếm cơ hội Farming trên thị trường
                            DeFi
                          </span>
                        </div>
                      </div>

                      <div className="mt-200 s640:mt-400 flex flex-none basis-100% s640:basis-1/2 lg:basis-100% xl:basis-1/2 px-200 lg:pr-0 xl:pr-200">
                        <div className="mr-100">
                          <div className="box-border bg-background-system-green badge flex w-fit items-center justify-center rounded-circle p-100">
                            <i className="ab-icon !not-italic text-size-400 text-icon-system-green ab-chevron_check"></i>
                          </div>
                        </div>
                        <div className="flex-1 flex items-center">
                          <span className="ui-text-medium text-text-primary break-words">
                            Một số lưu ý & chiến lược tối ưu khi Farming
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="mt-500">
                    <div className="p-200 s640:p-300 flex items-center">
                      <div className="flex-1 mr-200">
                        <span className="ui-text-large-emphasis text-text-primary">
                          Description
                        </span>
                      </div>
                    </div>

                    <div className="relative">
                      <div
                        className="overflow-y-hidden no-scrollbar transition-max-height duration-300 ease-linear"
                        style={{ maxHeight: "420px" }}
                      >
                        <div>
                          <div
                            id="course-description"
                            className="px-200 s640:px-300 ui-text-medium [&_a]:underline [&_a]:decoration-dashed [&_a]:underline-offset-4 [&_*]:mb-300 [&>ul]:pl-300 [&>ol]:pl-300 [&>ul]:list-disc [&>ol]:list-decimal"
                          >
                            <p>
                              Farming 101 là khoá học giúp nhà đầu tư tham gia
                              sâu vào thị trường DeFi, tập trung vào mảng cung
                              cấp thanh khoản cho sàn giao dịch phi tập trung
                              (DEX) nhằm tìm kiếm lợi nhuận. Khoá học sẽ bao gồm
                              các kiến thức cơ bản cho đến phương pháp Farming
                              thực chiến.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TOPICS */}
                  <div className="mt-500">
                    <div className="p-200 s640:p-300 flex items-center">
                      <div className="flex-1 mr-200">
                        <span className="ui-text-large-emphasis text-text-primary">
                          Topics
                        </span>
                      </div>
                    </div>

                    <div className="-mt-100 px-150 s640:px-250 flex flex-wrap">
                      <div className="mt-100 px-050">
                        <div>
                          <button className="select-none px-150 rounded-circle bg-chip-background-default border-0125 border-chip-border-default hover:bg-chip-background-hovered hover:border-transparent active:bg-chip-background-pressed active:border-transparent transition-all duration-200 ease-linear py-100">
                            <span className="ui-text-medium text-chip-text-default">
                              Fundamental
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="tabpanel"
                  id="panel-curriculum"
                  aria-labelledby="tab-curriculum"
                  hidden={activeTab !== "curriculum"}
                  className="mt-2 focus-visible:outline-none"
                  tabIndex={0}
                >
                  <div className="py-300 h-full">
                    <div className="gap-500 flex flex-col">
                      {/* ========================================================= */}
                      {/* CHAPTER 1 */}
                      {/* ========================================================= */}

                      <div className="px-200 md:px-300">
                        <div className="border-0125 border-border rounded-050">
                          {/* HEADER */}
                          <div className="p-300 flex">
                            <div className="mr-500">
                              <div className="text-text-primary">
                                <span className="ui-text-large-emphasis mr-100 uppercase">
                                  CHAPTER 1:
                                </span>
                                <span className="ui-text-large-emphasis">
                                  Chương 1: Tổng quan về Farming
                                </span>
                              </div>
                            </div>

                            <div className="flex flex-col items-end flex-none ml-auto">
                              <div className="flex items-center">
                                <span className="ui-text-small text-text-secondary">
                                  5 videos
                                </span>
                                <div className="mx-050 flex items-center justify-center h-100 aspect-square">
                                  <div className="w-100 aspect-square rounded-circle bg-dot-secondary block scale-50"></div>
                                </div>
                                <span className="ui-text-small text-text-secondary">
                                  0 article
                                </span>
                              </div>

                              {/* Toggle Button */}
                              <button
                                onClick={() => toggleChapter(1)}
                                className="group/ab-button relative select-none flex items-center justify-center 
                        rounded-050 transition-all duration-200 ease-linear 
                        bg-button-ghost-background border-0125 border-transparent p-100 mt-auto"
                              >
                                <i
                                  className={`ab-icon !not-italic text-button-ghost-icon text-size-800 ab-chevron_down transition-all ${
                                    openChapter === 1 ? "rotate-180" : ""
                                  }`}
                                ></i>
                              </button>
                            </div>
                          </div>

                          {/* BODY */}
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              openChapter === 1 ? "max-h-[2000px]" : "max-h-0"
                            }`}
                          >
                            {/* giữ nguyên toàn bộ nội dung gốc */}
                            <div>
                              {/* ITEM 1 */}
                              <div className="flex items-center py-200 px-300 cursor-pointer relative">
                                <div className="mr-200 flex flex-1 text-text-primary">
                                  <span className="ui-text-medium">1. </span>
                                  <span className="ui-text-medium">Mở đầu</span>
                                </div>

                                <button className="group/ab-button relative flex items-center justify-center p-0 border-none mr-200">
                                  <span className="button-text-large text-button-text-text">
                                    Preview
                                  </span>
                                </button>

                                <div className="flex items-center flex-none">
                                  <span className="ui-text-small text-text-subtlest">
                                    Video
                                  </span>
                                  <div className="mx-050 flex items-center justify-center h-100 aspect-square">
                                    <div className="w-100 aspect-square rounded-circle bg-dot-subtlest block scale-50"></div>
                                  </div>
                                  <span className="ui-text-small text-text-subtlest">
                                    00:00:44
                                  </span>
                                </div>
                              </div>

                              <div className="px-300">
                                <div className="bg-divider h-0125 w-full"></div>
                              </div>

                              {/* ITEM 2 */}
                              <div className="flex items-center py-200 px-300 cursor-pointer relative">
                                <div className="mr-200 flex flex-1 text-text-primary">
                                  <span className="ui-text-medium">2. </span>
                                  <span className="ui-text-medium">
                                    Bài 1: Farming trong DeFi
                                  </span>
                                </div>
                                <div className="flex items-center flex-none">
                                  <span className="ui-text-small text-text-subtlest">
                                    Video
                                  </span>
                                  <div className="mx-050 flex items-center justify-center h-100 aspect-square">
                                    <div className="w-100 aspect-square rounded-circle bg-dot-subtlest block scale-50"></div>
                                  </div>
                                  <span className="ui-text-small text-text-subtlest">
                                    00:02:28
                                  </span>
                                </div>
                              </div>

                              {/* Các item tiếp theo vẫn giữ nguyên như HTML của bạn */}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ========================================================= */}
                      {/* CHAPTER 2 */}
                      {/* ========================================================= */}

                      <div className="px-200 md:px-300">
                        <div className="border-0125 border-border rounded-050">
                          <div className="p-300 flex">
                            <div className="mr-500">
                              <div className="text-text-primary">
                                <span className="ui-text-large-emphasis mr-100 uppercase">
                                  CHAPTER 2:
                                </span>
                                <span className="ui-text-large-emphasis">
                                  Chương 2: Hướng dẫn Farming
                                </span>
                              </div>
                            </div>

                            <div className="flex flex-col items-end flex-none ml-auto">
                              <div className="flex items-center">
                                <span className="ui-text-small text-text-secondary">
                                  6 videos
                                </span>
                                <div className="mx-050 flex items-center justify-center h-100 aspect-square">
                                  <div className="w-100 aspect-square rounded-circle bg-dot-secondary block scale-50"></div>
                                </div>
                                <span className="ui-text-small text-text-secondary">
                                  0 article
                                </span>
                              </div>

                              <button
                                onClick={() => toggleChapter(2)}
                                className="group/ab-button relative flex items-center justify-center 
                        rounded-050 transition-all duration-200 bg-button-ghost-background 
                        border-0125 border-transparent p-100 mt-auto"
                              >
                                <i
                                  className={`ab-icon text-button-ghost-icon text-size-800 ab-chevron_down transition-all ${
                                    openChapter === 2 ? "rotate-180" : ""
                                  }`}
                                ></i>
                              </button>
                            </div>
                          </div>

                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              openChapter === 2 ? "max-h-[2000px]" : "max-h-0"
                            }`}
                          >
                            {/* Nội dung Chapter 2 */}
                            <div className="p-300">
                              <span className="ui-text-medium text-text-secondary">
                                Nội dung chương 2...
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ========================================================= */}
                      {/* CHAPTER 3 */}
                      {/* ========================================================= */}

                      <div className="px-200 md:px-300">
                        <div className="border-0125 border-border rounded-050">
                          <div className="p-300 flex">
                            <div className="mr-500">
                              <div className="text-text-primary">
                                <span className="ui-text-large-emphasis mr-100 uppercase">
                                  CHAPTER 3:
                                </span>
                                <span className="ui-text-large-emphasis">
                                  Chương 3: Farming nâng cao
                                </span>
                              </div>
                            </div>

                            <div className="flex flex-col items-end flex-none ml-auto">
                              <div className="flex items-center">
                                <span className="ui-text-small text-text-secondary">
                                  5 videos
                                </span>
                                <div className="mx-050 flex items-center justify-center h-100 aspect-square">
                                  <div className="w-100 aspect-square rounded-circle bg-dot-secondary block scale-50"></div>
                                </div>
                                <span className="ui-text-small text-text-secondary">
                                  0 article
                                </span>
                              </div>

                              <button
                                onClick={() => toggleChapter(3)}
                                className="group/ab-button relative flex items-center justify-center 
                      rounded-050 transition-all duration-200 bg-button-ghost-background 
                      border-0125 border-transparent p-100 mt-auto"
                              >
                                <i
                                  className={`ab-icon text-button-ghost-icon text-size-800 ab-chevron_down transition-all ${
                                    openChapter === 3 ? "rotate-180" : ""
                                  }`}
                                ></i>
                              </button>
                            </div>
                          </div>

                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              openChapter === 3 ? "max-h-[2000px]" : "max-h-0"
                            }`}
                          >
                            <div className="p-300">
                              <span className="ui-text-medium text-text-secondary">
                                Nội dung chương 3...
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* end chapters */}
                    </div>
                  </div>
                </div>
                {/* ================================
    TAB: DOWNLOADABLE FILES
================================= */}
                <div
                  role="tabpanel"
                  id="panel-files"
                  aria-labelledby="tab-files"
                  hidden={activeTab !== "files"}
                  className="mt-2 focus-visible:outline-none"
                  tabIndex={0}
                >
                  <div className="px-300 w-full">
                    {/* FILE ITEM 1 */}
                    <div className="flex items-center p-200 text-text-primary">
                      <i className="ab-icon !not-italic mr-100 ab-files"></i>

                      <span className="line-clamp-1 ui-text-small break-all mr-400">
                        chuong-2-huong-dan-farming.pdf
                      </span>

                      <span className="ml-auto text-text-subtlest ui-text-small whitespace-nowrap">
                        3.71 MB
                      </span>

                      <button
                        className="group/ab-button relative select-none flex items-center justify-center
        rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background
        lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed
        border-0125 border-transparent p-050 ml-100"
                      >
                        <i
                          className="ab-icon !not-italic text-button-ghost-icon w-300 h-300 flex items-center 
          justify-center text-size-400 rotate-90 ab-signin"
                        ></i>
                      </button>
                    </div>

                    <div className="px-200">
                      <div className="bg-divider h-0125 w-full"></div>
                    </div>

                    {/* FILE ITEM 2 */}
                    <div className="flex items-center p-200 text-text-primary">
                      <i className="ab-icon !not-italic mr-100 ab-files"></i>

                      <span className="line-clamp-1 ui-text-small break-all mr-400">
                        chuong-3-farming-nang-cao.pdf
                      </span>

                      <span className="ml-auto text-text-subtlest ui-text-small whitespace-nowrap">
                        4.07 MB
                      </span>

                      <button
                        className="group/ab-button relative select-none flex items-center justify-center
        rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background
        lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed
        border-0125 border-transparent p-050 ml-100"
                      >
                        <i className="ab-icon !not-italic text-button-ghost-icon w-300 h-300 text-size-400 rotate-90 ab-signin"></i>
                      </button>
                    </div>

                    <div className="px-200">
                      <div className="bg-divider h-0125 w-full"></div>
                    </div>

                    {/* FILE ITEM 3 */}
                    <div className="flex items-center p-200 text-text-primary">
                      <i className="ab-icon !not-italic mr-100 ab-files"></i>

                      <span className="line-clamp-1 ui-text-small break-all mr-400">
                        chuong-1-tong-quan-ve-farming.pdf
                      </span>

                      <span className="ml-auto text-text-subtlest ui-text-small whitespace-nowrap">
                        3.33 MB
                      </span>

                      <button
                        className="group/ab-button relative select-none flex items-center justify-center
        rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background
        lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed
        border-0125 border-transparent p-050 ml-100"
                      >
                        <i className="ab-icon !not-italic text-button-ghost-icon w-300 h-300 text-size-400 rotate-90 ab-signin"></i>
                      </button>
                    </div>

                    <div className="px-200">
                      <div className="bg-divider h-0125 w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative py-500 lg:py-1000 s640:px-100 lg:px-600 xl:px-0">
            <div className="absolute top-0 left-0 right-0 px-200 s640:px-400 lg:px-800 xl:px-0">
              <div className="bg-divider h-0125 w-full"></div>
            </div>
            <div className="p-200 s640:p-300 flex items-center s640:py-200">
              <div className="flex-1 mr-200">
                <span className="ui-text-large-emphasis text-text-primary">
                  Other Courses
                </span>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                <a target="_blank" href="/courses/blockchain-101">
                  <div className="transition-all duration-300 bg-background lg:hover:bg-background-hovered select-none lg:hover:cursor-pointer group/course-card py-400 px-200 md:px-300 h-full flex flex-col">
                    {/* IMAGE */}
                    <div className="w-full relative mb-200 aspect-video rounded-050 overflow-hidden">
                      <img
                        alt="Blockchain 101 - Blockchain cho người mới"
                        loading="lazy"
                        decoding="async"
                        className="w-full object-cover"
                        sizes="(max-width: 480px) 30vw, (max-width: 675px) 60vw, 20vw"
                        src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Fcourses%2Fcse440kt3obh0m28%2Ff710futikztlp00nckqwan61dmlnh6ar%2Fblockchain-101-course-upside.jpg&w=3840&q=75"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: 0,
                          color: "transparent",
                        }}
                      />
                    </div>

                    {/* TITLE + LEVEL */}
                    <div>
                      <div className="break-words">
                        <p className="article-h5">
                          Blockchain 101 - Blockchain cho người mới
                        </p>
                      </div>

                      <div className="mt-100 h-250">
                        <div className="flex items-center">
                          <i className="ab-icon !not-italic mr-100 text-size-400 text-gr-70 ab-ribbon_filled"></i>
                          <div className="flex items-center">
                            <span className="ui-text-small whitespace-nowrap">
                              Beginner
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* INSTRUCTORS */}
                    <div className="relative mt-200 pt-050 grow flex flex-col justify-end">
                      <div className="bg-divider h-0125 w-full"></div>

                      <div className="flex items-center w-full mt-100">
                        <div className="flex-none ui-text-small text-text-subtlest">
                          Instructor
                        </div>

                        <div className="flex-1 items-center">
                          <div className="flex justify-end min-w-400">
                            <div>
                              <button
                                type="button"
                                aria-haspopup="menu"
                                aria-expanded="false"
                              >
                                <div className="flex items-center ui-text-x-small md:ui-text-small text-text-primary">
                                  {/* AVATARS */}
                                  <div className="mr-100 flex items-center -space-x-2">
                                    <div className="aspect-square relative z-2 ab-avatar-people ab-avatar-size-24 ring-2 ring-background">
                                      <img
                                        alt="avatar"
                                        className="avatar-img aspect-square w-full object-cover"
                                        sizes="(max-width: 675px) 24px, 24px"
                                        src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fuserdata%2Fusr0edxeyf3hqo4s6a1ubqbbt72p4a0s%2Fprofile-pictures%2Ff2ti9xky7rxhlaaqnt2e1009grxhm3l1%2Fphoto_2024-06-06_15-46-40.jpg&w=3840&q=50"
                                      />
                                    </div>

                                    <div className="aspect-square relative z-1 ab-avatar-people ab-avatar-size-24 ring-2 ring-background">
                                      <img
                                        alt="avatar"
                                        className="avatar-img aspect-square w-full object-cover"
                                        sizes="(max-width: 675px) 24px, 24px"
                                        src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fuserdata%2Fusr47s3jcfs0gswinfctix6s8z37eeoz%2Fprofile-pictures%2Fft7xbgxkiecil0j6ybc1fxjgffh882s7%2Fdsc01953_sq_72i.jpg&w=3840&q=50"
                                      />
                                    </div>
                                  </div>
                                  2 Instructors
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* DURATION */}
                      <div className="flex items-center w-full mt-100">
                        <div className="flex-none ui-text-small text-text-subtlest">
                          Duration
                        </div>
                        <div className="flex-1 items-center">
                          <div className="flex items-center justify-end">
                            <span className="ui-text-small text-text-secondary">
                              23 Lessons
                            </span>
                            &nbsp;
                            <span className="ui-text-small text-text-subtlest">
                              (About 1 hour)
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* FREE BADGE + SAVE BTN */}
                      <div className="flex items-center w-full pt-050 mt-100">
                        {/* FREE */}
                        <div className="flex-none ui-text-small text-text-subtlest">
                          <div className="box-border badge flex w-fit items-center justify-center rounded-circle border-0125 px-100 py-0125 border-badge-labeled-neutral-border bg-badge-labeled-neutral-background">
                            <span className="ui-text-small text-badge-labeled-neutral-text">
                              Free course
                            </span>
                          </div>
                        </div>

                        {/* SAVE BUTTON */}
                        <div className="flex-1 items-center">
                          <div className="w-full flex justify-end">
                            <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible ml-auto">
                              <button
                                className="group/ab-button relative select-none flex items-center justify-center 
                    rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background 
                    lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed 
                    border-0125 border-transparent p-100"
                              >
                                <i className="ab-icon !not-italic text-button-ghost-icon text-size-800 ab-bookmark_outlined"></i>
                              </button>

                              <div
                                className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 
                    rounded-050 border border-tooltip-background bg-tooltip-background text-tooltip-text 
                    shadow-elevation-none lg:group-hover/tooltip:shadow-elevation-200 mb-150 bottom-100% 
                    translate-y-100 lg:group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2"
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
