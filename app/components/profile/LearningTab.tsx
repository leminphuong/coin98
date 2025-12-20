"use client";

import Link from "next/link";

import type { CourseItem } from "@/types/course";

type Props = {
  courses: CourseItem[];
};

export default function LearningTab({ courses }: Props) {
  console.log(courses);

  if (!courses || courses.length === 0) {
    return (
      <div className="lg:pl-1000 mx-auto h-full">
        <div className="h-full">
          {/* HEADER */}
          <div className="flex items-center px-200 md:px-300 py-200">
            <button
              className="group/ab-button relative select-none flex items-center justify-center
        rounded-050 transition-all duration-200 ease-linear
        bg-button-tertiary-background
        lg:hover:bg-button-tertiary-background-hovered
        active:bg-button-tertiary-background-pressed
        border-0125 border-button-tertiary-border
        p-050 lg:hidden mr-150"
            >
              <i className="ab-icon !not-italic text-button-tertiary-icon w-300 h-300 flex items-center justify-center text-size-400 ab-menu" />
            </button>

            <div className="flex grow flex-col break-words">
              <span className="ui-text-large-emphasis md:ui-h3-emphasis text-text-primary line-clamp-1">
                Learning courses
              </span>
            </div>

            <div className="min-h-500" />
          </div>

          {/* EMPTY STATE */}
          <div className="flex flex-wrap">
            <div className="flex items-center justify-center w-full p-500 ab-empty-large">
              <div className="ab-empty-content w-full flex flex-col items-center justify-center">
                <div className="empty-img">
                  <img
                    src="https://admin.coinjdg.com/wp-content/uploads/2025/12/series.svg"
                    alt="empty-learning"
                    className=" aspect-square object-cover"
                  />
                </div>

                <div className="ab-empty-message text-text-subtlest break-words whitespace-pre-line text-center mt-150">
                  You haven’t started any courses yet.
                  <br />
                  Explore courses and begin learning today.
                </div>

                <div className="empty-footer flex items-center justify-center mt-300">
                  <Link
                    href="/courses"
                    className="group/ab-button relative select-none flex items-center justify-center
  rounded-050 transition-all duration-200 ease-linear
  bg-button-primary-background
  lg:hover:bg-button-primary-background-hovered
  active:bg-button-primary-background-pressed
  border-0125 border-button-primary-background
  py-100 px-150"
                  >
                    <span className="select-none text-button-primary-text button-text-large">
                      Explore courses
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-2 focus-visible:outline-none">
      <div className="flex items-center px-200 md:px-300 py-200">
        <div className="flex grow flex-col break-words">
          <span className="ui-text-large-emphasis md:ui-h3-emphasis text-text-primary line-clamp-1">
            Learning
          </span>
        </div>
      </div>

      <div className="flex flex-wrap">
        {courses.map((course) => (
          <Link
            key={course.id}
            className="block w-full md:w-1/2 s1180:w-1/3"
            href={`/courses/${course.slug}`}
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
                <p className="article-h5 break-words">{course.title}</p>

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
  );
}
