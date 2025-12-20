"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  slug: string;
};

const AUTH_KEY = "amberblocks_auth_user";

export default function ArticleActions({ slug }: Props) {
  const router = useRouter();

  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem(AUTH_KEY) || "null")
      : null;

  /* ================= SAVE ================= */
  const handleSave = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // ❌ Chưa login → redirect login
    if (!user?.id) {
      router.push(
        `/signin?redirect=${encodeURIComponent(window.location.pathname)}`
      );
      return;
    }

    if (saving) return;
    setSaving(true);

    try {
      const res = await fetch(
        `https://admin.coinjdg.com/wp-json/toan/v1/author/follow-post` +
          `?author_id=${user.id}&post_slug=${slug}`,
        { method: "GET" }
      );

      const json = await res.json();

      if (json?.status === "success") {
        setSaved(json.action === "follow");
      }
    } catch (err) {
      console.error("Save failed", err);
    } finally {
      setSaving(false);
    }
  };

  /* ================= COPY ================= */
  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const fullUrl = `${window.location.origin}/${slug}`;

    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="flex items-center">
      {/* ================= SAVE ================= */}
      <div className="relative w-max h-max mr-150 group">
        <button
          onClick={handleSave}
          className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered border-0125 border-transparent p-100"
        >
          <i
            className={`ab-icon text-size-800 ${
              saved
                ? "ab-bookmark_outlined_filled  text-black"
                : "ab-bookmark_outlined text-button-ghost-icon"
            }`}
          ></i>
        </button>

        <span
          className={`
            pointer-events-none absolute -top-250 left-1/2 -translate-x-1/2
            text-xs px-100 py-50 rounded-050 whitespace-nowrap
            transition-all duration-150
            ${
              saved
                ? "opacity-100 bg-black text-white"
                : "opacity-0 group-hover:opacity-100 bg-black text-white"
            }
          `}
        >
          {saved ? "Saved" : "Save"}
        </span>
      </div>

      {/* ================= COPY ================= */}
      <div className="relative w-max h-max group">
        <button
          onClick={handleCopy}
          className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered border-0125 border-transparent p-100"
        >
          <i className="ab-icon text-size-800 ab-link text-button-ghost-icon"></i>
        </button>

        <span
          className={`
            pointer-events-none absolute -top-250 left-1/2 -translate-x-1/2
            text-xs px-100 py-50 rounded-050 whitespace-nowrap
            transition-all duration-150
            ${
              copied
                ? "opacity-100 bg-black text-white"
                : "opacity-0 group-hover:opacity-100 bg-black text-white"
            }
          `}
        >
          {copied ? "Copied" : "Copy link"}
        </span>
      </div>
    </div>
  );
}
