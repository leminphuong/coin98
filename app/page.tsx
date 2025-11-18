import ArticleCardVertical from "./components/ArticleCardVertical";
import ArticleCardHorizontalLarge from "./components/ArticleCardVerticalLarge";
import ArticleCardHorizontalFull from "./components/ArticleCardHorizontalFull";

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
    <main className="flex flex-col flex-1 pt-1600 md:pt-sp160">
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
        </div>
      </div>
    </main>
  );
}
