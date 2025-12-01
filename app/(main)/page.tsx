import ArticleCardVertical from "./components/ArticleCardVertical";
import ArticleCardHorizontalLarge from "./components/ArticleCardVerticalLarge";
import ArticleCardHorizontalFull from "./components/ArticleCardHorizontalFull";
import FeaturedPostsSlider from "./components/FeaturedPostsSlider";
import LatestPostsSlider from "./components/LatestPostsSlider";
import LatestPostsHeader from "./components/LatestPostsHeader";
import ArticleList from "./components/ArticleList";
import SeriesList from "./components/SeriesSlider";
export default function Home() {
  const post = {
    slug: "co-hoi-jupiter-jup",
    title: 'Jupiter: Từ dự án "ngáo giá" đến hidden gem hệ Solana?',
    excerpt:
      "Đây là câu chuyện thật của mình: từ chỗ phải unstake toàn bộ JUP vì tokenomics “ngáo giá”…",
    image:
      "https://coin.joydigi.net/wp-content/uploads/2025/11/trump-airdrop-1-300x201.jpg",
    avatar:
      "https://coin.joydigi.net/wp-content/uploads/2025/11/trump-airdrop-1-300x201.jpg",
    author: "Jack Vĩ",
    date: "2 days ago",
    readTime: "18 min read",
  };

  return (
    <div className="w-full mx-auto max-w-w1280">
      <div className="flex w-full flex-wrap">
        {/* LEFT 3/4 COLUMN */}
        <div className="w-full lg:w-3/4 flex flex-col-reverse lg:flex-row">
          {/* LEFT SMALL POSTS */}
          <div className="w-full lg:w-1/3">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-300 px-200 lg:px-0">
              <ArticleCardVertical {...post} />
              <ArticleCardVertical {...post} />
            </div>
          </div>

          {/* RIGHT FEATURED LARGE ARTICLE */}
          <div className="w-full lg:w-2/3">
            <ArticleCardHorizontalLarge {...post} />
          </div>
        </div>

        {/* RIGHT SIDEBAR 1/4 */}
        <div className="w-full lg:w-1/4">
          <ArticleCardHorizontalFull {...post} />
          <div className="px-200 md:px-300">
            <div className="bg-divider h-0125 w-full"></div>
          </div>
          <ArticleCardHorizontalFull {...post} />
          <div className="px-200 md:px-300">
            <div className="bg-divider h-0125 w-full"></div>
          </div>
          <ArticleCardHorizontalFull {...post} />
          <div className="px-200 md:px-300">
            <div className="bg-divider h-0125 w-full"></div>
          </div>
          <ArticleCardHorizontalFull {...post} />
        </div>
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
