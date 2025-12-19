import LatestPostItem from "@/components/LatestPostItem";
import { getCategoriesWithPosts } from "@/api/getHomeData";
import type { PostItem } from "@/types/post";
import Link from "next/link";
import { detectLocaleByIP } from "@/lib/server/detectLocale";
import GroupTabs from "@/components/GroupTabs";
import BodyClass from "@/components/BodyClass";

export default async function LearnPage() {
  const ipLocale = await detectLocaleByIP();
  const data = await getCategoriesWithPosts(ipLocale);
  const categorySections =
    data.categories?.filter((item: any) => {
      const { content } = item;

      if (!content) return false;

      // type: single
      if (content.type === "single") {
        return Array.isArray(content.posts) && content.posts.length > 0;
      }

      // type: group
      if (content.type === "group") {
        return (
          Array.isArray(content.groups) &&
          content.groups.some(
            (group: any) => Array.isArray(group.posts) && group.posts.length > 0
          )
        );
      }

      return false;
    }) || [];

  return (
    <>
      <BodyClass className="learn-page" />

      {/* ===================== HERO ===================== */}
      <div className="h-h400 bg-background-skeleton relative overflow-hidden">
        <div className="bg-blk-a-50 z-1 absolute h-full w-full"></div>

        <div className="h-h400 w-full relative">
          <img
            alt="portal"
            fetchPriority="high"
            decoding="async"
            className="h-full md:h-auto w-full object-cover"
            sizes="100vw"
            src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Flayout%2Flzrbv0qyrjwg%2Ff3gijq7khgy04eatyiwiwlvn2tz8u0dk%2Fc98-ins-thumbnail-22-.jpg&w=3840&q=75"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: 0,
              color: "transparent",
            }}
          />
        </div>

        <div
          data-theme="dark"
          className="max-w-80% w-w960 z-1 absolute left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
        >
          <h1 className="text-text-primary ui-h1-emphasis text-center mb-150">
            Learn - Thư viện kiến thức Crypto
          </h1>

          <span className="text-text-secondary article-text-x-small text-center mb-500">
            Lộ trình kiến thức Crypto cần trang bị trước khi bước vào thị
            trường: Blockchain, tiền mã hóa và kinh nghiệm đầu tư Crypto.
          </span>

          <div className="flex flex-col max-w-w468 w-full">
            <label
              htmlFor="search"
              className="h-600 bg-background flex items-center py-150 px-200
              rounded-circle border-0125 border-border transition-all duration-200
              focus-within:border-cbr-50 focus-within:shadow-outline-primary"
            >
              <i className="ab-icon mr-150 text-size-800 text-icon ab-search"></i>
              <input
                id="search"
                data-theme="dark"
                placeholder="Search in portal"
                autoComplete="off"
                className="outline-none bg-transparent flex-1
                text-text-primary placeholder:text-text-subtlest"
              />
            </label>
          </div>
        </div>
      </div>

      {/* ===================== TOP CATEGORIES (API) ===================== */}
      <div className="bg-background sticky top-0 z-10">
        <div className="py-200 flex w-full justify-center">
          <div className="max-w-w1440 w-full">
            <div className="flex overflow-y-auto no-scrollbar px-150">
              {categorySections.map((item: any) => (
                <div key={item.category.id} className="py-100 px-150 min-w-max">
                  <a
                    href={`#cat-${item.category.slug}`}
                    className="ui-text-medium-emphasis text-text-subtlest
                    hover:text-text-primary cursor-pointer whitespace-nowrap"
                  >
                    {item.category.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-divider h-0125 w-full"></div>
      </div>

      {/* ===================== SECTIONS ===================== */}
      <div className="w-full max-w-w1440 mx-auto">
        {categorySections.map((section: any, idx: number) => {
          const { category, content } = section;
          const isLast = idx === categorySections.length - 1;

          return (
            <div
              id={`cat-${category.slug}`}
              key={category.id}
              className="pt-300 py-500 md:pt-500 md:py-1000"
            >
              {/* ===== SECTION HEADER ===== */}
              <div className="px-200 md:px-300 py-200">
                <div className="flex items-center">
                  <span className="ui-text-large-emphasis md:ui-h3-emphasis text-text-primary flex-grow">
                    {category.name}
                  </span>

                  <Link href={`/learn/detail?category=${category.slug}`}>
                    <button className="hidden md:flex items-center px-150 py-100 bg-button-ghost-background rounded-050">
                      More
                      <i className="ab-icon ml-100 ab-arrow_right"></i>
                    </button>
                  </Link>
                </div>
              </div>

              {/* ===== TYPE: SINGLE ===== */}
              {content.type === "single" && (
                <div className="flex flex-wrap">
                  {content.posts.slice(0, 4).map((post: PostItem) => (
                    <div
                      key={post.slug}
                      className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
                    >
                      <LatestPostItem {...post} />
                    </div>
                  ))}
                </div>
              )}

              {/* ===== TYPE: GROUP ===== */}
              {content.type === "group" && (
                <GroupTabs groups={content.groups} />
              )}

              {/* ===== DIVIDER (KHÔNG HIỆN Ở CUỐI) ===== */}
              {!isLast && (
                <div className="bg-divider h-0125 w-full mt-300"></div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
