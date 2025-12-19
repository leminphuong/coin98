"use client";

import { useState } from "react";
import LatestPostItem from "@/components/LatestPostItem";
import type { PostItem } from "@/types/post";

type GroupItem = {
  id: number;
  name: string;
  slug: string;
  posts: PostItem[];
};

export default function GroupTabs({ groups }: { groups: GroupItem[] }) {
  const validGroups = Array.isArray(groups)
    ? groups.filter((g) => Array.isArray(g.posts) && g.posts.length > 0)
    : [];

  // ❗️ INIT SAFE
  const [active, setActive] = useState<string | null>(
    validGroups.length > 0 ? validGroups[0].slug : null
  );

  const activeGroup = active
    ? validGroups.find((g) => g.slug === active)
    : null;

  if (validGroups.length === 0) return null;

  return (
    <>
      {/* ===== GROUP CHIPS (TAB BAR) ===== */}
      <div className="-my-050 px-200 md:px-300">
        <div className="w-full flex overflow-x-auto md:flex-wrap no-scrollbar">
          {validGroups.map((group) => {
            const isActive = group.slug === active;

            return (
              <div
                key={group.id}
                className="min-w-max my-050 mr-150 last:mr-0"
                onClick={() => setActive(group.slug)}
              >
                <div
                  className={`group/chip relative h-fit w-fit min-w-600
                    select-none rounded-circle transition-all duration-100
                    md:cursor-pointer ${
                      isActive
                        ? "bg-background-hovered"
                        : "hover:bg-background-hovered"
                    }`}
                >
                  <div
                    className={`flex items-center justify-center py-100 px-150
                      rounded-circle border-0125 ${
                        isActive
                          ? "border-border-inverse"
                          : "border-border-subtle"
                      }`}
                  >
                    <span className="text-text-primary">
                      {group.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== ACTIVE GROUP POSTS ===== */}
      {activeGroup && (
        <div className="mt-300">
          <div className="flex flex-wrap">
            {activeGroup.posts.slice(0, 4).map((post: PostItem) => (
              <div
                key={post.slug}
                className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
              >
                <LatestPostItem {...post} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
