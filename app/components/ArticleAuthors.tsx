"use client";

import Link from "next/link";
import React from "react";
import AvatarCircle from "@/components/AvatarCircle";
import type { AuthorItem } from "@/types/post";

export default function ArticleAuthors({
  authors,
  date,
}: {
  authors: AuthorItem[];
  date: string;
}) {
  if (!Array.isArray(authors) || authors.length === 0) return null;

  // ⭐ CASE 1 AUTHOR
  if (authors.length === 1) {
    const au = authors[0];

    const avatarSrc =
      typeof au.avatar === "string" && au.avatar.length > 0
        ? au.avatar
        : null; // 👈 không bao giờ trả false

    return (
      <div className="ui-text-small text-text-secondary min-h-300 flex-wrap items-center mb-100 lg:flex hidden">
        <div className="flex items-center h-max ui-text-small text-text-primary">
          <div className="aspect-square ab-avatar-people ab-avatar-size-24 flex-none mr-100">
            {avatarSrc && (
              <img
                src={avatarSrc}
                alt={au.name}
                width={32}
                height={32}
                className="avatar-img aspect-square w-full object-cover rounded-full"
              />
            )}
          </div>

          <div className="line-clamp-1 break-all max-w-w160 ui-text-x-small md:ui-text-small">
            <span>{au.name}</span>
          </div>

          <AvatarCircle />
          <span className="ml-100">{date}</span>
        </div>
      </div>
    );
  }

  return null;
}
