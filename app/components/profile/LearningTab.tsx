"use client";

import Link from "next/link";

type LearningCourse = {
  id: number;
  title: string;
  slug: string;
  url: string;
  image?: string;
  progress?: number;
};

type Props = {
  courses: LearningCourse[];
};

export default function LearningTab({ courses }: Props) {
  if (!courses || courses.length === 0) {
    return (
      <div className="px-200 md:px-300 py-500 text-center">
        <p className="ui-text-small text-text-subtlest">
          Courses you are learning will show here.
        </p>
      </div>
    );
  }

  return (
    <div className="px-200 md:px-300">
      <h2 className="ui-text-large-emphasis md:ui-h3-emphasis mb-300">
        Learning
      </h2>

      <div className="flex flex-wrap -mx-150">
        {courses.map((course) => (
          <div
            key={course.id}
            className="s560:w-1/2 xl:w-1/3 px-150 mb-300"
          >
            <Link href={course.url || `/courses/${course.slug}`}>
              <div className="bg-background p-300 rounded-050 hover:shadow-soft transition-all">
                {course.image && (
                  <img
                    src={course.image}
                    alt={course.title}
                    className="aspect-3-2 w-full object-cover rounded-050 mb-200"
                  />
                )}

                <div className="article-h5">{course.title}</div>

                {typeof course.progress === "number" && (
                  <div className="mt-200">
                    <div className="ui-text-x-small text-text-secondary mb-050">
                      Progress: {course.progress}%
                    </div>
                    <div className="h-025 bg-divider rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
