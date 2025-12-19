"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type AuthorInfo = {
  id: number;
  slug: string;
  name: string;
  bio?: string;
};

export default function AboutTab() {
  const params = useParams();
  const slug = params?.slug as string;

  const [author, setAuthor] = useState<AuthorInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const controller = new AbortController();

    fetch(
      `https://admin.coinjdg.com/wp-json/toan/v1/author?slug=${slug}&lang=vi`,
      { signal: controller.signal }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "success") {
          setAuthor(data.author);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [slug]);

  const displayName = author?.name || slug;

  return (
    <div className="h-full w-full max-w-w728 mx-auto">
      {/* HEADER */}
      <div className="flex items-center px-200 md:px-300 py-200">
        <button className="group/ab-button lg:hidden mr-150 p-050 rounded-050 border-0125 bg-button-tertiary-background">
          <i className="ab-icon ab-menu text-size-400" />
        </button>

        <div className="flex grow flex-col break-words">
          <span className="ui-text-large-emphasis md:ui-h3-emphasis text-text-primary line-clamp-1">
            About
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-200 md:px-300 py-500">
        {loading ? null : author?.bio ? (
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: author.bio }}
          />
        ) : (
          /* EMPTY STATE */
          <div className="flex items-center justify-center w-full p-500 ab-empty-large">
            <div className="ab-empty-content w-full flex flex-col items-center justify-center">
              <div className="empty-img">
                <img
                  alt="ab-empty-image"
                  loading="lazy"
                  width={80}
                  height={80}
                  className="w-full aspect-square object-cover"
                  src="https://admin.coinjdg.com/wp-content/uploads/2025/12/member.svg"
                />
              </div>

              <div className="ab-empty-message text-text-subtlest text-center mt-200">
                <div className="max-w-w240">
                  {displayName} hasn&apos;t updated About information yet
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
