import LatestPostsHeader from "@/components/LatestPostsHeader";
import LatestPostsSlider from "@/components/LatestPostsSlider";
import AvatarCircle from "@/components/AvatarCircle";
import Link from "next/link";
import Image from "next/image";
import { detectLocaleByIP } from "@/lib/server/detectLocale";
import { getReportData } from "@/api/getHomeData";
import ArticleImageLatestPost from "@/components/ArticleImageLatestPost";
import ArticleAuthors from "@/components/ArticleAuthors";
import ArticleReadTime from "@/components/ArticleReadTime";
import ArticleActions from "@/components/ArticleActions";
import { PostItem } from "@/types/post";
export default async function ReportPage() {
  const ipLocale = await detectLocaleByIP();
  const lang = ipLocale === "en" ? "en" : "vi";
  const data = await getReportData(lang);
  const reportPosts = data.bai_cua_bao_cao_thi_truong_crypto || [];
  const newcomerPosts = data.bai_cua_phan_nguoi_moi || [];
  const highlightPost = reportPosts[0];
  const restPosts = reportPosts.slice(1);
  return (
    <>
      <div className="max-w-w1440 w-full mx-auto">
        <div className="bg-background mb-500" data-theme="light">
          <div className="flex items-center p-200 pb-0 md:px-300">
            <div className="flex grow flex-col break-words">
              <span className="ui-text-large-emphasis md:ui-h3-emphasis text-text-primary line-clamp-1">
                {data.bao_cao_thi_truong_crypto}
              </span>
            </div>

            <div className="min-h-500 ml-150">
              <Link href={data.url_cua_more_bao_cao_thi_truong_crypto || "#"}>
                <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed lg:hover:disabled:bg-button-ghost-background-disabled disabled:bg-button-ghost-background-disabled border-0125 border-transparent py-100 px-150 ml-150">
                  <span className="select-none text-button-ghost-text group-disabled/ab-button:text-button-ghost-text-disable button-text-large">
                    More
                  </span>

                  <i className="ab-icon !not-italic text-button-ghost-icon group-disabled/ab-button:text-button-ghost-icon-disabled text-size-400 ml-100 ab-arrow_right"></i>

                  {/* LOADING OVERLAY */}
                  <div className="flex items-center justify-center -z-1 opacity-0 absolute inset-0 ab-btn-loading-wrapper transition-all">
                    <div className="relative animate-spin flex items-center justify-center w-300 h-300">
                      <div className="h-050 w-050 rounded-circle absolute left-50% -translate-x-50% top-0 z-1 bg-btn-loading-transparent"></div>
                      <div
                        className="w-full h-full rounded-circle border-box bg-btn-loading-transparent"
                        style={{
                          padding: 4,
                          mask: "conic-gradient(#0000 45deg, #000) subtract, linear-gradient(#000 0 0) content-box",
                        }}
                      ></div>
                    </div>
                  </div>
                </button>
              </Link>
            </div>
          </div>
          {highlightPost && (
            <Link href={`/${highlightPost.slug}`}>
              <>
                {/* ================= DESKTOP ================= */}
                <div
                  draggable={false}
                  className="transition-all duration-300 bg-background lg:hover:bg-background-hovered 
                   article-highlight select-none overflow-hidden items-center p-300 
                   flex-row-reverse hidden s640:flex"
                >
                  <picture className="block flex-none w-1/2 relative">
                    <img
                      src={highlightPost.image}
                      alt={highlightPost.title}
                      className="object-cover rounded-050 aspect-3-2 w-full"
                    />
                  </picture>

                  <div className="flex-1 mr-400">
                    <ArticleAuthors
                      authors={highlightPost.authors ?? []}
                      date={highlightPost.date}
                    />

                    <p className="text-text-primary break-words article-h3">
                      {highlightPost.title}
                    </p>

                    {highlightPost.excerpt && (
                      <div className="mt-150">
                        <span className="article-text-x-small break-words line-clamp-3 text-text-secondary">
                          {highlightPost.excerpt}
                        </span>
                      </div>
                    )}

                    <div className="mt-200">
                      <ArticleReadTime readTime={highlightPost.readTime} />
                    </div>
                  </div>
                </div>

                {/* ================= MOBILE ================= */}
                <div
                  draggable={false}
                  className="transition-all duration-300 bg-background lg:hover:bg-background-hovered 
                   article-vertical select-none px-200 py-300 md:px-300 s640:hidden"
                >
                  <picture className="relative mb-200 block">
                    <img
                      src={highlightPost.image}
                      alt={highlightPost.title}
                      className="object-cover rounded-050 aspect-3-2 w-full"
                    />
                  </picture>

                  <ArticleAuthors
                    authors={highlightPost.authors ?? []}
                    date={highlightPost.date}
                  />

                  <p className="text-text-primary break-words article-h5">
                    {highlightPost.title}
                  </p>

                  <div className="mt-150">
                    <ArticleReadTime readTime={highlightPost.readTime} />
                  </div>
                </div>
              </>
            </Link>
          )}

          <div className="flex flex-wrap">
            {restPosts.map((post: PostItem) => (
              <div key={post.slug} className="w-full s640:w-1/2 s1180:w-1/4">
                <Link href={`/${post.slug}`}>
                  <div className="transition-all duration-300 bg-background lg:hover:bg-background-hovered article-vertical select-none px-200 py-300 md:px-300">
                    <ArticleImageLatestPost src={post.image} alt={post.title} />

                    <ArticleAuthors
                      authors={post.authors ?? []}
                      date={post.date}
                    />

                    <p className="article-h7 text-text-primary">{post.title}</p>

                    {post.excerpt && (
                      <span className="article-text-x-small text-text-secondary line-clamp-3">
                        {post.excerpt}
                      </span>
                    )}

                    <div className="hidden lg:flex justify-between">
                      <ArticleReadTime readTime={post.readTime} />
                      <ArticleActions />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-500">
          <LatestPostsHeader title="Mới Nhất" moreHref="/latest" />
          <LatestPostsSlider items={data.bai_cua_phan_nguoi_moi} />
        </div>
      </div>
    </>
  );
}
