import { detectLocaleByIP } from "@/lib/server/detectLocale";
import { getSerieData } from "@/api/getHomeData";
import Link from "next/link";
import type { PostItem } from "@/types/post";
import type { SeriesItem } from "@/types/series";
import { SeriesCardDesktop } from "@/components/SeriesCard";
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function SeriesPage({ params }: PageProps) {
  const { slug } = await params; 
  const lang = (await detectLocaleByIP()) === "en" ? "en" : "vi";
  const data = await getSerieData(slug, lang);
  const {
    series,
    posts,
    more_series,
  }: {
    series: SeriesItem;
    posts: PostItem[];
    more_series: SeriesItem[];
  } = data;

  return (
    <div className="w-full lg:max-w-w1280 mx-auto">
      <div className="flex items-start flex-col lg:flex-row">
        <div className="flex items-center justify-center bg-background lg:sticky lg:top-2000 flex-none lg:px-300 lg:py-400">
          <div className="md:px-100 md:pt-100 pb-300 md:pb-500 lg:p-0">
            <div className="flex flex-col items-start sm:flex-row lg:flex-col w-full lg:w-w312">
              {/* IMAGE */}
              <div className="sd-series-media-wrapper py-300 px-200 md:px-300 lg:p-0 sm:w-40% md:w-full md:max-w-w280 flex-none w-full transition-all duration-200 ease-linear lg:max-w-w280">
                <div className="rounded-050 overflow-hidden w-full shadow-elevation-500">
                  <img
                    draggable={false}
                    loading="lazy"
                    width={1280}
                    height={1280}
                    decoding="async"
                    className="select-none aspect-square rounded-050 w-full object-cover"
                    src={series.image || "/placeholder.jpg"}
                    alt={series.name}
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="w-full py-300 px-200 md:px-300 lg:mt-500 lg:p-0">
                <span className="sd-series-title article-h4 md:article-h3 text-text-primary transition-all duration-200 ease-linear lg:article-h3">
                  {series.name}
                </span>

                <div className="ui-text-x-small mt-150 text-text-secondary">
                  {series.count} POSTS
                </div>

                {/* ACTIONS */}
                <div className="flex items-center justify-between mt-250 md:mt-300">
                  {/* FOLLOW BUTTON */}
                  <button
                    type="button"
                    className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-tertiary-background hover:bg-button-tertiary-background-hovered active:bg-button-tertiary-background-pressed border-0125 border-button-tertiary-border py-050 px-100"
                  >
                    <i className="ab-icon !not-italic text-button-tertiary-icon text-size-400 mr-100 ab-plus" />
                    <span className="button-text-medium text-button-tertiary-text">
                      Follow Series
                    </span>
                  </button>

                  {/* COPY LINK */}
                  <div className="overflow-hidden relative w-max h-max group/tooltip hover:overflow-visible">
                    <button
                      type="button"
                      className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background hover:bg-button-ghost-background-hovered border-0125 border-transparent p-100"
                    >
                      <i className="ab-icon !not-italic text-button-ghost-icon text-size-800 ab-link" />
                    </button>

                    <div className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 rounded-050 border border-tooltip-background bg-tooltip-background text-tooltip-text shadow-elevation-none group-hover/tooltip:shadow-elevation-200 mb-150 bottom-full translate-y-full group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2">
                      Copy link
                      <div className="tooltip-arrow" />
                    </div>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="mt-250 md:mt-300">
                  <div className="bg-divider h-0125 w-full" />
                  <div className="pt-300">
                    {series.description && (
                      <span className="ui-text-small">
                        {series.description}
                      </span>
                    )}
                  </div>
                </div>

                {/* TAGS */}
                <div className="mt-300">
                  <div className="bg-divider h-0125 w-full" />
                  <div className="mt-250 sm:mt-300">
                    <div className="-my-050 flex flex-wrap">
                      <div className="flex w-fit flex-wrap mr-200 my-050">
                        <a href="/tags/thespotlight">
                          <button
                            type="button"
                            className="w-fit bg-button-tertiary-background flex items-center justify-center min-w-900 px-150 py-100 transition-all duration-200 ease-linear rounded-circle border-0125 border-border hover:border-button-tertiary-background-hovered hover:bg-button-tertiary-background-hovered"
                          >
                            <span className="text-text-primary">
                              #{series.slug}
                            </span>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grow lg:ml-1500 lg:mt-500">
          <div className="pl-400 lg:pl-0">
            {posts.map((post: PostItem) => {
              const author = post.authors?.[0];

              return (
                <Link
                  key={post.slug}
                  href={`/${post.slug}`}
                  className="flex relative select-none group/article-card-series w-full"
                >
                  {/* ================= MOBILE / TABLET ================= */}
                  <div className="w-full xl:hidden">
                    <div className="flex flex-col items-center h-full w-100 absolute -left-200 top-0">
                      <div className="relative w-full flex-none flex items-center justify-center overflow-hidden h-300">
                        <div className="bg-divider-subtle w-0125 h-full delay-150 translate-y-0 group-first/article-card-series:-translate-y-100% transition-all duration-300" />
                      </div>

                      <div className="w-full aspect-square rounded-circle bg-divider-subtle ui-text-small my-100 flex-none" />

                      <div className="relative grow w-full flex items-center justify-center overflow-hidden">
                        <div className="bg-divider-subtle w-0125 h-full delay-300 translate-y-0 group-last/article-card-series:-translate-y-100% transition-all duration-300 ease-linear" />
                      </div>
                    </div>

                    <div className="transition-all duration-300 bg-background lg:hover:bg-background-hovered w-full flex flex-col py-300 pl-100 pr-200">
                      <div className="ac-s-time-publish pb-150">
                        <span className="ui-text-small text-text-subtlest">
                          {post.date}
                        </span>
                      </div>

                      <div className="flex">
                        <picture className="w-40% min-w-1500 relative aspect-3-2">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="object-cover rounded-050 h-full w-full"
                          />
                        </picture>

                        <div className="flex-1 pl-200">
                          <p className="article-h7 md:article-h6">
                            {post.title}
                          </p>

                          <div className="mt-150 text-text-secondary hidden lg:block">
                            <span className="article-text-x-small line-clamp-3">
                              {post.excerpt}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ================= DESKTOP XL ================= */}
                  <div className="w-full hidden xl:block">
                    <div className="flex flex-col items-center h-full w-100 absolute -left-200 top-0">
                      <div className="relative w-full flex-none flex items-center justify-center overflow-hidden h-400">
                        <div className="bg-divider-subtle w-0125 h-full delay-150 translate-y-0 group-first/article-card-series:-translate-y-100% transition-all duration-300" />
                      </div>

                      <div className="w-full aspect-square rounded-circle bg-divider-subtle ui-text-small my-100 flex-none" />

                      <div className="relative grow w-full flex items-center justify-center overflow-hidden">
                        <div className="bg-divider-subtle w-0125 h-full delay-300 translate-y-0 group-last/article-card-series:-translate-y-100% transition-all duration-300 ease-linear" />
                      </div>
                    </div>

                    <div className="transition-all duration-300 bg-background lg:hover:bg-background-hovered w-full flex flex-row px-300 py-400">
                      <div className="ac-s-time-publish flex-none pr-200">
                        <span className="ui-text-small text-text-subtlest">
                          {post.date}
                        </span>
                      </div>

                      <div className="flex w-full">
                        <picture className="w-40% min-w-1500 relative aspect-3-2">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="object-cover rounded-050 h-full w-full"
                          />
                        </picture>

                        <div className="flex-1 pl-300">
                          <p className="article-h4">{post.title}</p>

                          <div className="mt-150 text-text-secondary">
                            <span className="article-text-x-small line-clamp-3">
                              {post.excerpt}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="py-1000">
        <div className="flex items-center p-200">
          <div className="flex grow flex-col break-words">
            <span className="ui-text-large-emphasis md:ui-h3-emphasis text-text-primary line-clamp-1">
              You Might Like
            </span>
          </div>
          <div className="min-h-500"></div>
        </div>
        <div className="flex flex-wrap">
          {more_series.map((item) => (
            <SeriesCardDesktop
              key={item.id}
              item={item}
              className="block w-full md:w-1/2 lg:w-1/3"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
