"use client";

import { PostItem } from "@/types/post";
import Link from "next/link";



type Props = {
  posts: PostItem[];
};

export default function HistoryTab({ posts }: Props) {
  const groupedPosts = posts.reduce<Record<string, PostItem[]>>(
    (acc, post) => {
      if (!post.date) return acc;

      const dateKey = post.date; // YYYY-MM-DD
      acc[dateKey] = acc[dateKey] || [];
      acc[dateKey].push(post);

      return acc;
    },
    {}
  );

  if (!posts || posts.length === 0) {
    return (
      <>
        <div className="flex items-center px-200 md:px-300 py-200">
          <div className="flex grow flex-col break-words">
            <span className="ui-text-large-emphasis md:ui-h3-emphasis text-text-primary line-clamp-1">
              Viewing history
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
                You don’t have any history yet.
                <br />
                Posts you’ve read or interacted with will appear here.
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="h-full z-0 relative">
      <div className="flex items-center px-200 md:px-300 py-200">
        <div className="flex grow flex-col break-words">
          <span className="ui-text-large-emphasis md:ui-h3-emphasis text-text-primary line-clamp-1">
            Viewing history
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-200">
        {Object.entries(groupedPosts).map(([date, items]) => (
          <div
            key={date}
            className="relative flex flex-col gap-200 items-end mb-300"
          >
            {/* DATE DIVIDER */}
            <div className="absolute z-0 left-0 right-0 flex items-center px-200 md:px-300 py-050">
              <span className="flex-none ui-text-x-small-emphasis md:ui-text-small-emphasis">
                {date}
              </span>
              <div className="bg-divider-subtle w-full ml-200 md:ml-300 h-0125 grow" />
            </div>

            {/* POSTS */}
            <div className="px-100 md:px-0 mt-300 md:mt-0 z-10 w-full">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${post.slug}`}
                  className="block w-full md:max-w-80% md:ml-auto"
                >
                  {/* ===== MOBILE ===== */}
                  <div
                    draggable={false}
                    className="transition-all duration-300 bg-background
            lg:hover:bg-background-hovered
            article-hero-horizontal
            group/history-card select-none overflow-hidden
            py-300 px-200 md:hidden"
                  >
                    <div className="-mx-100 flex items-stretch">
                      {post.image && (
                        <div className="flex-none min-w-800 w-1500">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="object-cover rounded-050 aspect-3-2 w-full"
                          />
                        </div>
                      )}

                      <div className="flex-1 mx-100">
                        <p className="ui-text-x-small-emphasis text-text-subtlest uppercase">
                          Article
                        </p>
                        <p className="text-text-primary break-words article-h6 article-h7">
                          {post.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ===== DESKTOP ===== */}
                  <div
                    draggable={false}
                    className="transition-all duration-300
            lg:hover:bg-background-hovered
            article-hero-horizontal
            group/history-card select-none overflow-hidden
            p-200 bg-background hidden md:block"
                  >
                    <div className="flex items-stretch">
                      {post.image && (
                        <div className="flex-none w-[20%] min-w-w180">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="object-cover rounded-050 aspect-3-2 w-full"
                          />
                        </div>
                      )}

                      <div className="flex-1 mx-300 flex flex-col gap-100">
                        <p className="ui-text-x-small-emphasis text-text-subtlest uppercase">
                          Article
                        </p>
                        <p className="text-text-primary break-words article-h6 article-h4">
                          {post.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
