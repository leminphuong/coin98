import LatestPostsHeader from "@/components/LatestPostsHeader";
import LatestPostsSlider from "@/components/LatestPostsSlider";
import { detectLocaleByIP } from "@/lib/server/detectLocale";
import { getPostByCategory } from "@/api/getHomeData";

export default async function ReportPage() {
  const ipLocale = await detectLocaleByIP();
  const lang: "vi" | "en" = ipLocale === "en" ? "en" : "vi";

  // 🔥 gọi API post-by-category
  const data = await getPostByCategory("airdrop", lang, 8);

  const posts = data.posts || [];
  const category = data.category;

  return (
    <div className="max-w-w1440 w-full mx-auto">
      <div className="mt-500 mb-500">
        {/* HEADER */}
        <div className="flex items-center px-200 md:px-300">
          <div className="flex grow flex-col break-words">
            <span className="ui-text-large-emphasis md:ui-h3-emphasis text-text-primary line-clamp-1">
              {category?.name}
            </span>

          </div>

        </div>

        {/* SLIDER */}
        {posts.length > 0 ? (
          <LatestPostsSlider items={posts} />
        ) : (
          <div className="px-200 md:px-300 py-600 text-text-subtlest">
            No posts found
          </div>
        )}
      </div>
    </div>
  );
}
