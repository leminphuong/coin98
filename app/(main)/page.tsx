import ArticleCardVertical from "@/components/ArticleCardVertical";
import ArticleCardHorizontalLarge from "@/components/ArticleCardVerticalLarge";
import ArticleCardHorizontalFull from "@/components/ArticleCardHorizontalFull";
import FeaturedPostsSlider from "@/components/FeaturedPostsSlider";
import LatestPostsSlider from "@/components/LatestPostsSlider";
import LatestPostsHeader from "@/components/LatestPostsHeader";
import ArticleList from "@/components/ArticleList";
import SeriesList from "@/components/SeriesSlider";
import { getHomeData } from "@/api/getHomeData"; // bạn tạo file này như hướng dẫn
import type { PostItem } from "@/types/post";
import React from "react";

export default async function Home() {
  const data = await getHomeData("vi");

  // 2: Lấy danh sách bài mới nhất
  const latest: PostItem[] = data.latest_posts || [];

  console.log(latest);

  return (
    <div className="w-full mx-auto max-w-w1280">
      <div className="flex w-full flex-wrap">
        <div className="w-full lg:w-3/4 flex flex-col-reverse lg:flex-row">
          {/* LEFT SMALL POSTS */}
          <div className="w-full lg:w-1/3">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-300 px-200 lg:px-0">
              {latest.slice(1, 3).map((post) => (
                <ArticleCardVertical key={post.slug} {...post} />
              ))}
            </div>
          </div>

          {/* RIGHT FEATURED LARGE ARTICLE */}
          <div className="w-full lg:w-2/3">
            {latest[0] && <ArticleCardHorizontalLarge {...latest[0]} />}
          </div>
        </div>

        <div className="w-full lg:w-1/4">
          {latest.slice(3, 7).map((post) => (
            <React.Fragment key={post.slug}>
              <ArticleCardHorizontalFull {...post} />
              <div className="px-200 md:px-300">
                <div className="bg-divider h-0125 w-full"></div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Divider cuối */}
        <div className="bg-divider-subtle h-0125 w-full mt-600 md:mt-500"></div>
        <div className="max-w-w1280 mx-auto w-full my-600 md:my-1000 lg:my-500">
          <FeaturedPostsSlider />
        </div>
        <div className="bg-divider-subtle h-0125 w-full mt-0"></div>
        <div className="max-w-w1280 mx-auto w-full my-600 md:my-1000 lg:my-500">
          <div className="clear-both">
            <div className="w-full max-w-w1280 mx-auto h-[100px] s560:h-[250px]">
              <a
                target="_blank"
                rel="nofollow"
                href="https://wetheivy.beehiiv.com/?utm_source=coin98insights"
              >
                <picture>
                  <source
                    media="(min-width:560px)"
                    srcSet="https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/layout/lzrbv0qyrjwg/f4mp6lsny6h42c7ny3i08ign55zd4qnl/new-banner-ivy-newsletter-rounded.png"
                  />

                  <img
                    alt="advertising"
                    src="https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/layout/lzrbv0qyrjwg/fc8ll1o4m37ummm9f8pmz6vci60p8ama/mobile-banner-ivy.png"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-divider-subtle h-0125 w-full mt-0"></div>
        <div className="max-w-w1280 mx-auto w-full my-700 md:my-1000 lg:my-700">
          <LatestPostsHeader title="Mới Nhất" moreHref="/latest" />

          <LatestPostsSlider />
        </div>
        <div className="bg-divider-subtle h-0125 w-full mt-600 md:mt-500"></div>
        <div className="max-w-w1280 mx-auto w-full my-600 md:my-1000 lg:my-500">
          <LatestPostsHeader title="Phân tích" moreHref="/phan-tich" />

          <ArticleList />
        </div>
        <div className="bg-divider-subtle h-0125 w-full mt-600 md:mt-500"></div>
        <div className="max-w-w1280 mx-auto w-full my-600 md:my-1000 lg:my-500">
          <LatestPostsHeader title="Series" moreHref="/series" />

          <SeriesList />
        </div>
        <div className="bg-divider-subtle h-0125 w-full mt-600 md:mt-500"></div>
        <div className="max-w-w1280 mx-auto w-full my-700 md:my-1000 lg:my-700">
          <LatestPostsHeader title="Mới Nhất" moreHref="/latest" />

          <LatestPostsSlider />
        </div>
      </div>
    </div>
  );
}
