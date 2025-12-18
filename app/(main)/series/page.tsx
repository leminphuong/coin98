import { getSeriesData } from "@/api/getHomeData";
import FeaturedPostsSlider from "@/components/FeaturedPostsSlider";
import { SeriesCardDesktop } from "@/components/SeriesCard";
import { detectLocaleByIP } from "@/lib/server/detectLocale";
import type { SeriesResponse } from "@/types/series";
import Link from "next/link";

export default async function SeriesPage() {
  const ipLocale = await detectLocaleByIP();
  const lang = ipLocale === "en" ? "en" : "vi";

  const data: SeriesResponse = await getSeriesData(lang);

  const series = data.series;
  const posts = data.posts || [];
  const seriesTags = data.series_tags || [];

  return (
    <>
      {/* =======================
          THE SPOTLIGHT (TOP TAG)
      ======================= */}
      <div
        data-theme="dark"
        className="py-1000 sm:px-100 xl:px-800 max-w-w1440 mx-auto w-full s1441:rounded-100 overflow-hidden"
        style={{ backgroundColor: "rgb(0, 0, 0)" }}
      >
        <Link
          className="flex md:items-center flex-col-reverse sm:flex-row"
          href={`/series/${series.slug}`}
        >
          {/* LEFT */}
          <div className="lg:mr-1500 py-300 px-200 md:px-300 grow">
            <h3 className="article-h3 md:article-h2 text-text-primary">
              {data.the_spotlight || series.name}
            </h3>

            <span className="mt-100 ui-text-x-small text-text-secondary inline-block">
              {series.count} POSTS
            </span>

            <div className="mt-300 py-300 article-text-x-small md:article-text-small text-text-secondary">
              {series.description || ""}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="sm:max-w-40% md:max-w-50% lg:max-w-40% flex-none w-full">
            <div className="w-full py-300 px-200 md:px-300">
              <div className="aspect-square w-full sm:max-w-w430 relative">
                <img
                  src={series.image || "/placeholder-series.jpg"}
                  alt={series.name}
                  className="rounded-050 object-cover absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </Link>
        <div className="px-300">
          <div className="border-b-0125 border-divider mt-500"></div>
        </div>
        <div className="mt-800">
          <FeaturedPostsSlider title="In this series" items={data.posts} />
        </div>
      </div>

      {/* =======================
          LIST ALL SERIES TAGS
      ======================= */}
      <div className="py-1000 sm:px-100 max-w-w1440 mx-auto w-full">
        <div className="flex items-center px-300 py-200">
          <span className="ui-text-large-emphasis md:ui-h3-emphasis text-text-primary">
            Danh sách Series
          </span>
        </div>

        <div className="flex flex-wrap">
          {seriesTags.map((item) => (
            <SeriesCardDesktop
              key={item.id}
              item={item}
              className="block w-full md:w-1/2 lg:w-1/3"
            />
          ))}
        </div>
      </div>
    </>
  );
}
