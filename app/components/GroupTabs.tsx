"use client";

import { useState } from "react";
import LatestPostItem from "@/components/LatestPostItem";
import type { PostItem } from "@/types/post";
import Link from "next/link";

export default function GroupTabs({ groups }: { groups: any[] }) {
  const validGroups = groups.filter(
    (g) => Array.isArray(g.posts) && g.posts.length > 0
  );

  const [active, setActive] = useState(validGroups[0]?.category.slug);

  const activeGroup = validGroups.find(
    (g) => g.category.slug === active
  );

  return (
    <>
      {/* ===== GROUP CHIPS (TAB BAR) ===== */}
      <div className="-my-050 px-200 md:px-300">
        <div className="w-full flex overflow-x-auto md:flex-wrap no-scrollbar">
          {validGroups.map((group) => {
            const isActive = group.category.slug === active;

            return (
              <div
                key={group.category.id}
                className="min-w-max my-050 mr-150 last:mr-0"
                onClick={() => setActive(group.category.slug)}
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
                      {group.category.name}
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
