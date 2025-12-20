"use client";

import Link from "next/link";
import React from "react";
import AvatarCircle from "@/components/AvatarCircle";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import type { AuthorItem } from "@/types/post";

export default function ArticleAuthors({
  authors,
  date,
}: {
  authors: AuthorItem[];
  date: string;
}) {
  const [open, setOpen] = React.useState(false);

  // ⭐ CASE 1 AUTHOR
  if (!Array.isArray(authors) || authors.length === 0) return null;

  // ⭐ CASE 1 AUTHOR
  if (authors.length === 1) {
    const au = authors[0];

    const avatarSrc =
      typeof au.avatar === "string" && au.avatar.length > 0 ? au.avatar : null; // 👈 không bao giờ trả false

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
          {date}
        </div>
      </div>
    );
  }

  // ⭐ CASE MULTIPLE AUTHORS
  return (
    <div className="ui-text-small text-text-secondary min-h-300 flex-wrap items-center mb-100 lg:flex hidden">
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        <div
          className="flex items-center relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <DropdownMenu.Trigger asChild>
            <button
              type="button"
              className="flex items-center ui-text-x-small md:ui-text-small text-text-primary"
            >
              <div className="mr-100 flex items-center -space-x-2">
                {authors.slice(0, 3).map((au, index) => {
                  const zClass =
                    index === 0 ? "z-20" : index === 1 ? "z-10" : "z-0";
                  return (
                    <div
                      key={au.id}
                      className={`aspect-square relative ${zClass} ab-avatar-people ab-avatar-size-24 ring-2 ring-background rounded-full`}
                    >
                      <img
                        src={au.avatar}
                        alt={au.name}
                        width={32}
                        height={32}
                        className="avatar-img aspect-square w-full object-cover rounded-full"
                      />
                    </div>
                  );
                })}
              </div>

              <span>Multi Author</span>
            </button>
          </DropdownMenu.Trigger>

          {open && (
            <DropdownMenu.Content
              forceMount
              align="end"
              side="top"
              className="
                absolute top-full right-0 mt-50
                z-50 min-w-[8rem] w-56 overflow-hidden rounded-md border shadow-md 
                bg-background p-0 py-100
                animate-in fade-in zoom-in-95
              "
            >
              <div className="min-w-w180 max-h-1500 overflow-y-auto no-scrollbar">
                {authors.map((au) => (
                  <DropdownMenu.Item asChild key={au.id}>
                    <Link
                      href={`/author/${au.slug}`}
                      className="cursor-pointer"
                    >
                      <div
                        className="
                          text-text-primary min-w-1500 select-none 
                          transition-all duration-200 ease-linear 
                          md:hover:bg-background-subtle 
                          ui-text-small bg-background py-100 px-200 
                          flex items-center
                        "
                      >
                        <div className="aspect-square ab-avatar-people ab-avatar-size-24 flex-none">
                          <img
                            src={au.avatar}
                            alt={au.name}
                            width={32}
                            height={32}
                            className="avatar-img aspect-square w-full object-cover rounded-full"
                          />
                        </div>

                        <span className="ui-text-small ml-100 text-text-primary break-all line-clamp-1">
                          {au.name}
                        </span>
                      </div>
                    </Link>
                  </DropdownMenu.Item>
                ))}
              </div>
            </DropdownMenu.Content>
          )}

          <AvatarCircle />
          {date}
        </div>
      </DropdownMenu.Root>
    </div>
  );
}
