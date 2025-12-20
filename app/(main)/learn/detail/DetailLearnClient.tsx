"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

import AvatarCircle from "@/components/AvatarCircle";
import SidebarPortal from "@/components/SidebarPortal";

/* =========================
   ARTICLE ITEM
========================= */
function ArticleItem({ item }: { item: any }) {
  const avatarSrc =
    typeof item.avatar === "string" && item.avatar.length > 0
      ? item.avatar
      : "/avatar.png";

  return (
    <div>
      <Link href={item.href}>
        <div className="transition-all duration-300 bg-background lg:hover:bg-background-hovered article-horizontal select-none overflow-hidden p-300">
          <div className="ui-text-small text-text-secondary mb-150 flex items-center">
            <div className="flex items-center mr-150">
              <div className="aspect-square ab-avatar-people ab-avatar-size-24 mr-100">
                <img
                  src={avatarSrc}
                  alt={item.author}
                  className="avatar-img w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="line-clamp-1 max-w-w160">
                {item.author}
              </span>
            </div>

            <AvatarCircle />
            {item.date}
          </div>

          <div className="flex -mx-300 flex-row-reverse">
            <div className="flex-none w-30% min-w-w200 mx-300">
              <img
                src={item.image}
                className="object-cover rounded-050 aspect-3-2 w-full"
                alt={item.title}
              />
            </div>

            <div className="flex-1 mx-300">
              <p className="text-text-primary article-h4 break-words">
                {item.title}
              </p>

              {item.excerpt && (
                <div className="mt-150">
                  <span className="article-text-x-small line-clamp-3 text-text-secondary">
                    {item.excerpt}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="h-400 flex items-center justify-between mt-200">
            <div className="box-border badge rounded-circle px-100 py-0125 bg-badge-labeled-neutral-background">
              <span className="ui-text-small">{item.readTime}</span>
            </div>
          </div>
        </div>
      </Link>

      <div className="bg-divider h-0125 w-full" />
    </div>
  );
}

/* =========================
   CLIENT PAGE
========================= */
export default function DetailLearnClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const keyword = searchParams.get("keyword") || "";
  const category = searchParams.get("category") || "";

  const [search, setSearch] = useState(keyword);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!keyword && !category) return;

    setLoading(true);

    const params = new URLSearchParams({
      lang: "vi",
      limit: "10",
    });

    if (keyword) params.append("keyword", keyword);
    if (category) params.append("category", category);

    fetch(`/wp-json/toan/v1/learn-search?${params.toString()}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .finally(() => setLoading(false));
  }, [keyword, category]);

  const totalPosts = data?.total || 0;

  return (
    <>
      {/* HEADER */}
      <div className="fixed bg-background z-3 w-full">
        <div className="py-200 flex max-w-w1440 mx-auto">
          <div className="w-full lg:max-w-sp320 flex items-center lg:border-r-0125 px-300">
            <span className="ui-text-large-emphasis">
              LEARN – Thư viện Crypto
            </span>
          </div>

          <div className="flex-1 px-300">
            <label className="h-600 bg-background flex items-center px-200 rounded-full border-0125 border-border">
              <input
                placeholder="Search in portal"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && search.trim()) {
                    router.push(
                      `/learn/detail?keyword=${encodeURIComponent(
                        search.trim()
                      )}${category ? `&category=${category}` : ""}`
                    );
                  }
                }}
                className="flex-1 bg-transparent outline-none"
              />
            </label>
          </div>
        </div>

        <div className="bg-divider h-0125 w-full" />
      </div>

      {/* BODY */}
      <div className="max-w-w1440 w-full mx-auto relative pt-sp200 flex">
        <SidebarPortal />

        <div className="w-full lg:w-[calc(100%-320px)] flex justify-center">
          <div className="max-w-w728 w-full">
            <div className="px-300 pt-200 pb-100">
              <span className="ui-text-x-small-emphasis">
                {loading ? "Searching..." : `${totalPosts} RESULTS`}
              </span>
            </div>

            <div className="flex flex-col">
              {!loading && totalPosts === 0 && (
                <div className="px-300 py-600 text-center">
                  No results found
                </div>
              )}

              {data?.posts?.map((post: any) => (
                <ArticleItem
                  key={post.slug}
                  item={{
                    href: `/${post.slug}`,
                    title: post.title,
                    excerpt: post.excerpt,
                    image: post.image,
                    date: post.date,
                    readTime: post.readTime,
                    author: post.authors?.[0]?.name || "Admin",
                    avatar: post.authors?.[0]?.avatar,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
