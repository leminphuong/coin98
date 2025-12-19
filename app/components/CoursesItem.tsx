"use client";

import Link from "next/link";
import type { CourseItem } from "@/types/course";
import { useEffect, useState } from "react";

type Props = {
  item: CourseItem;
};

export default function CoursesItem({ item }: Props) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "curriculum" | "files"
  >("overview");
  const [openChapter, setOpenChapter] = useState<number | null>(1);

  useEffect(() => {
    if (item.chapters?.length) {
      setOpenChapter(1);
    }
  }, [item.chapters]);
  const formatFileSize = (bytes: number) => {
    if (!bytes) return "";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  const toggleChapter = (chapterNo: number) => {
    setOpenChapter((prev) => (prev === chapterNo ? null : chapterNo));
  };

  return (
    <div className="s640:pt-400 lg:pt-500 flex-1">
      <div className="w-full mx-auto max-w-w1280 transition-all duration-200 min-h-channelScreenBodyWithout1000 md:min-h-channelScreenBodyWithout1500">
        <div className="flex flex-col lg:flex-row pb-500 s640:pb-800 lg:pb-1000">
          <div className="flex-none w-full lg:w-w400 lg:pl-600 xl:pl-0 transition-all duration-200">
            <div className="lg:bg-background-subtle transition-all duration-200 s640:px-400 lg:p-300 w-full flex-none lg:sticky lg:left-0 lg:top-sp160">
              <div className="bg-background-subtle flex flex-col pb-200 s640:pb-300 lg:pb-0">
                <div className="w-full relative aspect-video">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover s640:rounded-050"
                    sizes="100vw"
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
                        {item.followers ?? 0}
                      </span>
                    </div>

                    <div className="mx-150 flex items-center">
                      <i className="ab-icon !not-italic mr-050 text-size-400 text-icon-secondary ab-bookmark_outlined"></i>
                      <span className="ui-text-small text-text-secondary">
                        {item.saved ?? 0}
                      </span>
                    </div>
                  </div>

                  <div className="mt-100 s640:mt-150">
                    <span className="article-h5 s640:article-h4 text-text-primary break-words">
                      {item.title}
                    </span>
                  </div>

                  <div className="mt-100 s640:mt-150">
                    <div className="flex items-center">
                      <i className="ab-icon !not-italic mr-100 text-size-400 text-ay ab-ribbon_filled"></i>
                      <div className="flex items-center">
                        <span className="ui-text-small whitespace-nowrap">
                          {item.level}
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
                          {item.duration?.text}
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
                          {item.language}
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
                    className={`py-200 text-text-subtlest mx-150 lg:hover:cursor-pointer border-b-025 border-b-transparent inline-flex items-center whitespace-nowrap transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 lg:hover:text-text-primary data-[state=active]:text-text-primary data-[state=active]:border-b-text-primary !mx-0 cursor-pointer 
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
                    className={`py-200 text-text-subtlest mx-150 lg:hover:cursor-pointer border-b-025 border-b-transparent inline-flex items-center whitespace-nowrap transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 lg:hover:text-text-primary data-[state=active]:text-text-primary data-[state=active]:border-b-text-primary !mx-0 cursor-pointer 
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
                    className={`py-200 text-text-subtlest mx-150 lg:hover:cursor-pointer border-b-025 border-b-transparent inline-flex items-center whitespace-nowrap transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 lg:hover:text-text-primary data-[state=active]:text-text-primary data-[state=active]:border-b-text-primary !mx-0 cursor-pointer 
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

                    <button     onClick={() => setActiveTab("curriculum")} className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed lg:hover:disabled:bg-button-ghost-background-disabled disabled:bg-button-ghost-background-disabled border-0125 border-transparent py-050 px-100">
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
                        {item.duration?.lessons} videos
                      </span>
                    </div>

                    <div className="mt-200 first:mt-0 s640:mt-0 s640:mx-300 lg:mx-200 s1180:mx-300 flex items-center transition-all duration-200">
                      <i className="ab-icon !not-italic mr-100 text-size-800 text-icon-secondary ab-post"></i>
                      <span className="ui-text-medium text-text-secondary">
                        {item.articles ?? 0} articles
                      </span>
                    </div>

                    <div className="mt-200 first:mt-0 s640:mt-0 s640:mx-300 lg:mx-200 s1180:mx-300 flex items-center transition-all duration-200">
                      <i className="ab-icon !not-italic mr-100 text-size-800 text-icon-secondary ab-files"></i>
                      <span className="ui-text-medium text-text-secondary">
                        {item.download_files ?? 0} downloadable files
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
                    {item.what_you_will_learn?.map((it, i) => (
                      <div
                        key={i}
                        className="mt-200 s640:mt-400 flex flex-none basis-100% 
                 s640:basis-1/2 lg:basis-100% xl:basis-1/2 
                 px-200 lg:pr-0 xl:pr-200"
                      >
                        <div className="mr-100">
                          <div
                            className="box-border bg-background-system-green badge 
                        flex w-fit items-center justify-center 
                        rounded-circle p-100"
                          >
                            <i
                              className="ab-icon !not-italic text-size-400 
                        text-icon-system-green ab-chevron_check"
                            />
                          </div>
                        </div>

                        <div className="flex-1 flex items-center">
                          <span className="ui-text-medium text-text-primary break-words">
                            {it.neu_hoc_duợc_gi}
                          </span>
                        </div>
                      </div>
                    ))}
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
                          className="px-200 s640:px-300 ui-text-medium 
                   [&_a]:underline [&_a]:decoration-dashed 
                   [&_a]:underline-offset-4 
                   [&_*]:mb-300 
                   [&>ul]:pl-300 [&>ol]:pl-300 
                   [&>ul]:list-disc [&>ol]:list-decimal"
                          dangerouslySetInnerHTML={{
                            __html: item.description || "",
                          }}
                        />
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
                    {item.topics?.map((topic, index) => (
                      <div key={index} className="mt-100 px-050">
                        <button
                          type="button"
                          className="select-none px-150 rounded-circle 
                   bg-chip-background-default 
                   border-0125 border-chip-border-default 
                   hover:bg-chip-background-hovered 
                   hover:border-transparent 
                   active:bg-chip-background-pressed 
                   active:border-transparent 
                   transition-all duration-200 ease-linear py-100"
                        >
                          <span className="ui-text-medium text-chip-text-default">
                            {topic.how_to_guide}
                          </span>
                        </button>
                      </div>
                    ))}
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
                    {item.chapters?.map((chapter, chapterIndex) => {
                      const chapterNo = chapterIndex + 1;
                      const isOpen = openChapter === chapterNo;

                      return (
                        <div key={chapterIndex} className="px-200 md:px-300">
                          <div className="border-0125 border-border rounded-050">
                            {/* ================= HEADER ================= */}
                            <div className="p-300 flex">
                              <div className="mr-500">
                                <div className="text-text-primary">
                                  <span className="ui-text-large-emphasis mr-100 uppercase">
                                    CHAPTER {chapterNo}:
                                  </span>
                                  <span className="ui-text-large-emphasis">
                                    {chapter.tieu_de_chuong.replace(
                                      /^CHAPTER\s*\d*:/i,
                                      ""
                                    )}
                                  </span>
                                </div>
                              </div>

                              <div className="flex flex-col items-end flex-none ml-auto">
                                <div className="flex items-center">
                                  <span className="ui-text-small text-text-secondary">
                                    {chapter.so_video_cua_chuong} videos
                                  </span>

                                  <div className="mx-050 flex items-center justify-center h-100 aspect-square">
                                    <div className="w-100 aspect-square rounded-circle bg-dot-secondary block scale-50"></div>
                                  </div>

                                  <span className="ui-text-small text-text-secondary">
                                    {chapter.so_bai_viet_cua_chuong} article
                                  </span>
                                </div>

                                <button
                                  onClick={() => toggleChapter(chapterNo)}
                                  className="group/ab-button relative select-none flex items-center justify-center 
                             rounded-050 transition-all duration-200 ease-linear 
                             bg-button-ghost-background border-0125 border-transparent p-100 mt-auto"
                                >
                                  <i
                                    className={`ab-icon !not-italic text-button-ghost-icon text-size-800 
                    ab-chevron_down transition-all ${
                      isOpen ? "rotate-180" : ""
                    }`}
                                  />
                                </button>
                              </div>
                            </div>

                            {/* ================= BODY ================= */}
                            {isOpen && (
                              <div className="overflow-hidden transition-all duration-300">
                                {chapter.tung_bai?.map(
                                  (lesson, lessonIndex) => {
                                    const isLastLesson =
                                      lessonIndex ===
                                      chapter.tung_bai.length - 1;

                                    return (
                                      <div key={lessonIndex}>
                                        {/* ===== LESSON ITEM ===== */}
                                        <div className="flex items-center py-200 px-300 cursor-pointer relative">
                                          <div className="mr-200 flex flex-1 text-text-primary">
                                            <span className="ui-text-medium">
                                              {lessonIndex + 1}.&nbsp;
                                            </span>
                                            <span className="ui-text-medium">
                                              {lesson.tieu_de_tung_bai}
                                            </span>
                                          </div>

                                          <Link
                                            href={lesson.url_video_tung_bai}
                                            target="_blank"
                                            className="group/ab-button relative flex items-center justify-center p-0 border-none mr-200"
                                          >
                                            <span className="button-text-large text-button-text-text">
                                              Preview
                                            </span>
                                          </Link>

                                          <div className="flex items-center flex-none">
                                            <span className="ui-text-small text-text-subtlest">
                                              Video
                                            </span>
                                          </div>
                                        </div>

                                        {/* ===== DIVIDER (KHÔNG HIỆN Ở LESSON CUỐI) ===== */}
                                        {!isLastLesson && (
                                          <div className="px-300">
                                            <div className="bg-divider h-0125 w-full"></div>
                                          </div>
                                        )}
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
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
                  {item.files?.map((fileItem, index) => {
                    const file = fileItem.noi_up_file;

                    return (
                      <div key={file.filename || index}>
                        {/* FILE ITEM */}
                        <div className="flex items-center p-200 text-text-primary">
                          <i className="ab-icon !not-italic mr-100 ab-files"></i>

                          <span className="line-clamp-1 ui-text-small break-all mr-400">
                            {file.filename}
                          </span>

                          <span className="ml-auto text-text-subtlest ui-text-small whitespace-nowrap">
                            {formatFileSize(file.filesize)}
                          </span>

                          <a
                            href={file.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/ab-button relative select-none flex items-center justify-center
              rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background
              lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed
              border-0125 border-transparent p-050 ml-100"
                          >
                            <i
                              className="ab-icon !not-italic text-button-ghost-icon w-300 h-300
              flex items-center justify-center text-size-400 rotate-90 ab-signin"
                            ></i>
                          </a>
                        </div>

                        {/* DIVIDER */}
                        <div className="px-200">
                          <div className="bg-divider h-0125 w-full"></div>
                        </div>
                      </div>
                    );
                  })}
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
            {item.more_courses?.map((c) => (
              <div key={c.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                <Link href={`/courses/${c.slug}`} target="_blank">
                  <div className="transition-all duration-300 bg-background lg:hover:bg-background-hovered select-none lg:hover:cursor-pointer group/course-card py-400 px-200 md:px-300 h-full flex flex-col">
                    {/* IMAGE */}
                    <div className="w-full relative mb-200 aspect-video rounded-050 overflow-hidden">
                      <img
                        alt={c.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full object-cover"
                        sizes="(max-width: 480px) 30vw, (max-width: 675px) 60vw, 20vw"
                        src={c.image}
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: 0,
                        }}
                      />
                    </div>

                    {/* TITLE + LEVEL */}
                    <div>
                      <div className="break-words">
                        <p className="article-h5">{c.title}</p>
                      </div>

                      <div className="mt-100 h-250">
                        <div className="flex items-center">
                          <i className="ab-icon !not-italic mr-100 text-size-400 text-gr-70 ab-ribbon_filled"></i>
                          <span className="ui-text-small whitespace-nowrap">
                            {c.level}
                          </span>
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

                        <div className="flex-1 flex justify-end">
                          {c.instructor?.length ? (
                            <div className="flex items-center ui-text-small text-text-primary">
                              <div className="mr-100 flex items-center -space-x-2">
                                {c.instructor.slice(0, 2).map((i) => (
                                  <div
                                    key={i.id}
                                    className="aspect-square relative ab-avatar-people ab-avatar-size-24 ring-2 ring-background"
                                  >
                                    <img
                                      alt={i.name}
                                      className="avatar-img aspect-square w-full object-cover"
                                      src={i.avatar}
                                    />
                                  </div>
                                ))}
                              </div>
                              {c.instructor.length} Instructor
                            </div>
                          ) : (
                            <span className="ui-text-small text-text-subtlest">
                              Updating
                            </span>
                          )}
                        </div>
                      </div>

                      {/* DURATION */}
                      <div className="flex items-center w-full mt-100">
                        <div className="flex-none ui-text-small text-text-subtlest">
                          Duration
                        </div>
                        <div className="flex-1 flex justify-end">
                          <span className="ui-text-small text-text-secondary">
                            {c.duration.lessons} Lessons
                          </span>
                          &nbsp;
                          <span className="ui-text-small text-text-subtlest">
                            ({c.duration.text})
                          </span>
                        </div>
                      </div>

                      {/* FREE BADGE */}
                      <div className="flex items-center w-full pt-050 mt-100">
                        <div className="box-border badge flex w-fit items-center justify-center rounded-circle border-0125 px-100 py-0125 border-badge-labeled-neutral-border bg-badge-labeled-neutral-background">
                          <span className="ui-text-small text-badge-labeled-neutral-text">
                            Free course
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
