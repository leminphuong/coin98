"use client";

import Link from "next/link";

type HistoryPost = {
  id: number;
  title: string;
  slug: string;
  url: string;
  image?: string;
  viewedAt?: string;
};

type Props = {
  posts: HistoryPost[];
};

export default function HistoryTab({ posts }: Props) {
  if (!posts || posts.length === 0) {
    return (
      <div className="px-200 md:px-300 py-500 text-center">
        <p className="ui-text-small text-text-subtlest">
          Your viewing history is empty.
        </p>
      </div>
    );
  }

  return (
    <div className="px-200 md:px-300">
      <h2 className="ui-text-large-emphasis md:ui-h3-emphasis mb-300">
        Viewing history
      </h2>

      <div className="flex flex-col gap-200">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={post.url || `/post/${post.slug}`}
            className="flex items-center gap-200 p-200 rounded-050
              bg-background hover:bg-background-hovered transition-all"
          >
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-500 h-300 object-cover rounded-050 flex-none"
              />
            )}

            <div className="flex flex-col">
              <span className="ui-text-medium text-text-primary">
                {post.title}
              </span>

              {post.viewedAt && (
                <span className="ui-text-x-small text-text-subtlest mt-050">
                  Viewed{" "}
                  {new Date(post.viewedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
