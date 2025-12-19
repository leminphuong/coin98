"use client";

import { useEffect, useState } from "react";
import { useAuthUser } from "@/hooks/useAuthUser";

/* ===== TYPES ===== */
type AuthorInfo = {
  id: number;
  slug: string;
  name: string;
  avatar: string | false;
};

/* ===== PROPS ===== */
type Props = {
  slug?: string;
  lang?: string;
};

export default function ProfileHeader({ slug, lang = "vi" }: Props) {
  const { user, isLoggedIn } = useAuthUser();
  const [author, setAuthor] = useState<AuthorInfo | null>(null);

  /* =========================
     RESOLVE SLUG
     - author page → slug prop
     - profile page → auth user
  ========================= */
  const resolvedSlug = slug || user?.slug;

  /* =========================
     FETCH AUTHOR
  ========================= */
  useEffect(() => {
    if (!resolvedSlug) return;

    const controller = new AbortController();

    fetch(
      `https://admin.coinjdg.com/wp-json/toan/v1/author?slug=${resolvedSlug}&lang=${lang}`,
      { signal: controller.signal }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "success") {
          setAuthor(data.author);
        }
      })
      .catch(() => {});

    return () => controller.abort();
  }, [resolvedSlug, lang]);

  /* =========================
     FALLBACK DATA
  ========================= */
  const displayName =
    author?.name || resolvedSlug || "User";

  const avatarUrl =
    author?.avatar && typeof author.avatar === "string"
      ? author.avatar
      : `https://ui-avatars.com/api/?size=256&name=${encodeURIComponent(
          displayName
        )}&background=FEEEAF&color=9F6E3C&bold=true`;

  /* =========================
     UI
  ========================= */
  return (
    <div className="relative transition-all flex justify-between px-200 lg:px-300 py-300 lg:py-500">
      {/* LEFT */}
      <div className="flex">
        <div className="aspect-square ab-avatar-people ab-avatar-size-64 md:ab-avatar-size-128 flex-none">
          <img
            alt={`${displayName} profile`}
            loading="lazy"
            className="avatar-img aspect-square w-full object-cover"
            src={avatarUrl}
          />
        </div>

        <div className="flex-1 flex flex-col ml-300 justify-center">
          <span className="article-h5 md:article-h2 text-text-primary capitalize">
            {displayName}
          </span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center">
        <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible">
          <button
            onClick={() =>
              navigator.clipboard.writeText(window.location.href)
            }
            className="group/ab-button relative select-none flex items-center justify-center
              rounded-050 transition-all duration-200 ease-linear
              bg-button-ghost-background border-0125 border-transparent p-100"
          >
            <i className="ab-icon !not-italic text-button-ghost-icon text-size-800 ab-link" />
          </button>

          <div className="w-max h-max absolute overflow-hidden px-075 py-050 text-size-400
            rounded-050 border border-tooltip-background bg-tooltip-background
            text-tooltip-text shadow-elevation-none mb-150 bottom-100%
            translate-y-100 lg:group-hover/tooltip:translate-y-0
            left-1/2 -translate-x-1/2 z-100">
            Copy link
            <div className="tooltip-arrow" />
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="transition-all absolute bottom-0 left-200 right-200">
        <div className="bg-divider h-0125 w-full" />
      </div>
    </div>
  );
}
