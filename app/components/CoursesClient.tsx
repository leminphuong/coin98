"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Instructor = {
  id: number;
  name: string;
  slug: string;
  avatar: string;
  url: string;
};

type Course = {
  id: number;
  title: string;
  slug: string;
  image: string;
  level: string;
  instructor?: Instructor[];
  duration: {
    lessons: number;
    text: string;
  };
};

export default function CoursesClient({ courses }: { courses: Course[] }) {
  const sliderRef = useRef<Slider | null>(null);
  const next = () => sliderRef.current?.slickNext();
  const prev = () => sliderRef.current?.slickPrev();
  const [activeTab, setActiveTab] = React.useState<"all" | "courses">("all");

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      {/* HEADER SECTION */}
      <div className="relative w-full max-w-w1440 mx-auto">
        <div className="px-200">
          <div className="flex flex-col items-center py-600 lg:py-1000">
            <h2 className="ui-h1-emphasis"></h2>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 hidden lg:block">
          <div className="bg-divider-subtle h-0125 w-full"></div>
        </div>
      </div>

      {/* MAIN WRAPPER */}
      <div className="w-full max-w-w1440 mx-auto flex flex-1 flex-col lg:flex-row">
        {/* LEFT MENU */}
        <div className="w-full lg:w-w280 sticky lg:relative lg:top-0 bg-background z-10 top-1600 md:top-sp160">
          <div className="lg:pl-1000 lg:py-400 lg:h-full overflow-x-scroll lg:overflow-x-visible no-scrollbar">
            {/* Divider (mobile horizontal / desktop vertical) */}
            <div className="absolute w-full lg:w-auto bottom-0 lg:left-none lg:top-0 lg:right-0 lg:py-400">
              <div className="bg-divider-subtle h-0125 w-full lg:h-full lg:w-0125"></div>
            </div>

            {/* MENU */}
            <div className="lg:sticky flex flex-row lg:flex-col lg:top-sp160">
              {/* ITEM 1 */}
              <div
                onClick={() => setActiveTab("all")}
                className="px-200 py-100 md:px-300 md:py-200 relative flex flex-none flex-row lg:flex-col select-none cursor-pointer"
              >
                <div
                  className={`p-150 rounded-050 transition-all duration-200 ease-linear
      ${
        activeTab === "all"
          ? "bg-menu-item-background"
          : "lg:hover:bg-menu-item-background"
      }
    `}
                >
                  <span
                    className={`ui-text-medium
        ${
          activeTab === "all"
            ? "text-menu-item-text-emphasis"
            : "text-menu-item-text"
        }
      `}
                  >
                    All courses
                  </span>
                </div>
              </div>

              {/* ITEM 2 */}
              <div
                onClick={() => setActiveTab("courses")}
                className="px-200 py-100 md:px-300 md:py-200 relative flex flex-none flex-row lg:flex-col group/course-section-menu select-none cursor-pointer"
              >
                {/* LABEL */}
                <div className="pl-0 py-150 pr-150 lg:pl-150">
                  <span className="ui-text-x-small-emphasis text-text-subtlest uppercase">
                    Topics
                  </span>
                </div>

                {/* TAB BUTTON */}
                <div
                  className={`p-150 rounded-050 transition-all duration-200 ease-linear
      ${
        activeTab === "courses"
          ? "bg-menu-item-background"
          : "lg:hover:bg-menu-item-background"
      }
    `}
                >
                  <span
                    className={`ui-text-medium
        ${
          activeTab === "courses"
            ? "text-menu-item-text-emphasis"
            : "text-menu-item-text"
        }
      `}
                  >
                    Khoá học
                  </span>
                </div>

                {/* DIVIDER */}
                <div className="absolute top-0 left-0 py-250 h-full lg:h-auto lg:py-0 lg:px-300 lg:w-full group-first/course-section-menu:hidden">
                  <div className="bg-divider-subtle h-full w-0125 lg:h-0125 lg:w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT — SLIDER */}
        <div className="w-full lg:w-[calc(100%_-_280px)]">
          <div className="pt-200 md:pt-400 md:px-100 pb-600 md:pb-1000 relative select-none">
            {/* SLIDER HEADER */}
            <div className="flex items-center px-200 md:px-300 py-200">
              <div className="flex grow flex-col">
                <span className="ui-text-large-emphasis md:ui-h3-emphasis text-text-primary">
                  Khoá học
                </span>
              </div>

              <div className="min-h-500 ml-150">
                <div className="hidden lg:flex rounded-circle border-0125 border-button-tertiary-border bg-transparent overflow-hidden">
                  {/* LEFT */}
                  <button
                    onClick={prev}
                    className="group/ab-button relative select-none flex items-center justify-center    rounded-050 transition-all duration-200 ease-linear    bg-button-ghost-background p-100 border-0125 border-transparent"
                  >
                    <i className="ab-icon text-button-ghost-icon text-size-800 ab-chevron_left"></i>
                  </button>

                  {/* RIGHT */}
                  <button
                    onClick={next}
                    className="group/ab-button relative select-none flex items-center justify-center    rounded-050 transition-all duration-200 ease-linear    bg-button-ghost-background p-100 border-0125 border-transparent"
                  >
                    <i className="ab-icon text-button-ghost-icon text-size-800 ab-chevron_right"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* DESKTOP SLIDER */}
            <div className="hidden lg:block">
              <Slider ref={sliderRef} {...settings}>
                {courses.map((c) => {
                  const instructor = c.instructor?.[0];

                  return (
                    <div key={c.id}>
                      <Link href={`/courses/${c.slug}`} target="_blank">
                        <div className="transition-all duration-300 bg-background lg:hover:bg-background-hovered py-400 px-200 md:px-300 h-full flex flex-col">
                          {/* IMAGE */}
                          <div className="w-full relative mb-200 aspect-video rounded-050 overflow-hidden">
                            <img
                              src={c.image}
                              alt={c.title}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* TITLE */}
                          <p className="article-h5 break-words">{c.title}</p>

                          {/* LEVEL */}
                          <div className="mt-100 h-250 flex items-center">
                            <i className="ab-icon mr-100 text-size-400 text-ay ab-ribbon_filled"></i>
                            <span className="ui-text-small">{c.level}</span>
                          </div>

                          {/* META */}
                          <div className="relative mt-200 pt-050 grow flex flex-col justify-end">
                            <div className="bg-divider h-0125 w-full"></div>

                            {/* INSTRUCTOR */}
                            <div className="flex items-center w-full mt-100">
                              <div className="ui-text-small text-text-subtlest">
                                Instructor
                              </div>

                              <div className="flex-1 flex justify-end">
                                {instructor && (
                                  <div className="flex items-center ui-text-small text-text-primary">
                                    <div className="aspect-square ab-avatar-people ab-avatar-size-24 flex-none mr-100">
                                      <img
                                        src={instructor.avatar}
                                        alt={instructor.name}
                                        loading="lazy"
                                        className="avatar-img aspect-square w-full object-cover rounded-full"
                                      />
                                    </div>

                                    <span className="line-clamp-1 break-all max-w-w160 ui-text-x-small md:ui-text-small">
                                      {instructor.name}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* DURATION */}
                          <div className="flex items-center w-full mt-100">
                            <span className="ui-text-small text-text-subtlest">
                              Duration
                            </span>

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
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </Slider>
            </div>

            {/* MOBILE GRID */}
            <div className="grid lg:hidden grid-cols-1 s640:grid-cols-2">
              {courses.map((c) => {
                const instructor = c.instructor?.[0];

                return (
                  <Link
                    key={c.id}
                    href={`/courses/${c.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="transition-all duration-300 bg-background p-200 md:px-300 py-400 flex flex-col h-full">
                      {/* IMAGE */}
                      <div className="w-full aspect-video rounded-050 overflow-hidden mb-200">
                        <img
                          src={c.image}
                          alt={c.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* TITLE */}
                      <p className="article-h5 line-clamp-2">{c.title}</p>

                      {/* LEVEL */}
                      <div className="mt-100 flex items-center h-250">
                        <i className="ab-icon mr-100 text-size-400 text-ay ab-ribbon_filled"></i>
                        <span className="ui-text-small">{c.level}</span>
                      </div>

                      {/* META */}
                      <div className="mt-auto pt-200">
                        <div className="bg-divider h-0125 w-full mb-100"></div>

                        {/* INSTRUCTOR */}
                        {instructor && (
                          <div className="flex items-center justify-between mb-050">
                            <span className="ui-text-x-small text-text-subtlest">
                              Instructor
                            </span>

                            <div className="flex items-center ui-text-x-small text-text-primary">
                              <img
                                src={instructor.avatar}
                                alt={instructor.name}
                                className="w-300 h-300 rounded-full mr-075"
                                loading="lazy"
                              />
                              <span className="line-clamp-1 max-w-w120">
                                {instructor.name}
                              </span>
                            </div>
                          </div>
                        )}

                        {/* DURATION */}
                        <div className="flex items-center justify-between">
                          <span className="ui-text-x-small text-text-subtlest">
                            Duration
                          </span>

                          <span className="ui-text-x-small text-text-secondary">
                            {c.duration.lessons} lessons · {c.duration.text}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
