import FeaturedPostsSlider from "../components/FeaturedPostsSlider";

export default function SeriesPage() {
  return (
    <>
      <div
        data-theme="dark"
        className="py-1000 sm:px-100 xl:px-800 max-w-w1440 mx-auto w-full s1441:rounded-100 overflow-hidden"
        style={{ backgroundColor: "rgb(0, 0, 0)" }}
      >
        <div>
          <a
            className="flex md:items-center flex-col-reverse sm:flex-row"
            href="/series/the-spotlight"
          >
            {/* LEFT CONTENT */}
            <div className="lg:mr-1500 py-300 px-200 md:px-300 grow">
              <h3 className="article-h3 md:article-h2 text-text-primary">
                The Spotlight
              </h3>

              <span className="mt-100 ui-text-x-small text-text-secondary inline-block">
                58 POSTS
              </span>

              <div className="mt-300 h-500 flex items-center">
                {/* FOLLOW BUTTON */}
                <button
                  className="
            group/ab-button relative select-none flex items-center justify-center rounded-050 
            transition-all duration-200 ease-linear 
            lg:disabled:cursor-not-allowed 
            bg-button-tertiary-background 
            lg:hover:bg-button-tertiary-background-hovered 
            active:bg-button-tertiary-background-pressed 
            border-0125 border-button-tertiary-border 
            py-050 px-100
          "
                >
                  <i className="ab-icon !not-italic text-button-tertiary-icon text-size-400 mr-100 ab-plus" />
                  <span className="select-none text-button-tertiary-text button-text-medium">
                    Follow series
                  </span>

                  {/* LOADING SPINNER */}
                  <div className="flex items-center justify-center -z-1 opacity-0 absolute inset-0 ab-btn-loading-wrapper transition-all">
                    <div className="relative animate-spin flex items-center justify-center w-200 h-200">
                      <div className="h-050 w-050 rounded-circle absolute left-50% -translate-x-50% top-0 bg-btn-loading-transparent" />
                      <div
                        className="w-full h-full rounded-circle border-box bg-btn-loading-transparent"
                        style={{
                          padding: 4,
                          mask: "conic-gradient(#0000 45deg, #000) subtract, linear-gradient(#000 0 0) content-box",
                          WebkitMask:
                            "conic-gradient(#0000 45deg, #000) subtract, linear-gradient(#000 0 0) content-box",
                        }}
                      />
                    </div>
                  </div>
                </button>

                {/* COPY LINK TOOLTIP */}
                <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible">
                  <button
                    className="
              group/ab-button relative select-none flex items-center justify-center rounded-050 
              transition-all duration-200 ease-linear 
              lg:disabled:cursor-not-allowed 
              bg-button-ghost-background 
              lg:hover:bg-button-ghost-background-hovered 
              active:bg-button-ghost-background-pressed 
              border-0125 border-transparent 
              p-100
            "
                  >
                    <i className="ab-icon !not-italic text-button-ghost-icon text-size-800 mr-0 ab-link" />
                    <span className="select-none text-button-ghost-text button-text-large hidden" />

                    <div className="flex items-center justify-center -z-1 opacity-0 absolute inset-0 ab-btn-loading-wrapper transition-all">
                      <div className="relative animate-spin flex items-center justify-center w-300 h-300">
                        <div className="h-050 w-050 rounded-circle absolute left-50% -translate-x-50% top-0 bg-btn-loading-transparent" />
                        <div
                          className="w-full h-full rounded-circle border-box bg-btn-loading-transparent"
                          style={{
                            padding: 4,
                            mask: "conic-gradient(#0000 45deg, #000) subtract, linear-gradient(#000 0 0) content-box",
                            WebkitMask:
                              "conic-gradient(#0000 45deg, #000) subtract, linear-gradient(#000 0 0) content-box",
                          }}
                        />
                      </div>
                    </div>
                  </button>

                  <div
                    className="
              w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 
              transition-transform ease-linear rounded-050 border border-tooltip-background 
              bg-tooltip-background text-tooltip-text shadow-elevation-none 
              lg:group-hover/tooltip:shadow-elevation-200 mb-150 bottom-100% 
              translate-y-100 lg:group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2
            "
                    style={{ transitionDuration: "0ms" }}
                  >
                    Copy link
                    <div className="tooltip-arrow" data-popper-arrow />
                  </div>
                </div>
              </div>

              <div className="mt-300 py-300 article-text-x-small md:article-text-small text-text-secondary">
                Series phỏng vấn những builder thực thụ của ngành crypto xoay
                quanh những chủ đề nóng.
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="sm:max-w-40% md:max-w-50% lg:max-w-40% flex-none w-full">
              <div className="w-full py-300 px-200 md:px-300">
                <div className="aspect-square w-full sm:max-w-w430 relative">
                  <img
                    alt="The Spotlight"
                    fetchPriority="high"
                    decoding="async"
                    data-nimg="fill"
                    className="rounded-050 object-cover"
                    sizes="(max-width: 675px) 100vw, 30vw"
                    src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Fseries%2Fsni36qt3kdiz%2Ffwh3yg0xjh3g8vmjoc3bprc610ld440q%2Fthe-spotlight-upside.jpg&w=3840&q=75"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: 0,
                      color: "transparent",
                    }}
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="px-300">
          <div className="border-b-0125 border-divider mt-500"></div>
        </div>
        <FeaturedPostsSlider />
      </div>
      <div className="py-1000 sm:px-100 max-w-w1440 mx-auto w-full s1441:rounded-100 overflow-hidden">
        <div className="flex items-center px-300 py-200">
          <div className="flex grow flex-col break-words">
            <span className="ui-text-large-emphasis md:ui-h3-emphasis text-text-primary line-clamp-1">
              Danh sách Series
            </span>
          </div>
          <div className="min-h-500"></div>
        </div>
        <div className="flex flex-wrap">
          <a
            className="block w-full md:w-1/2 lg:w-1/3"
            href="/series/the-research-and-analysis"
          >
            <div
              draggable={false}
              className="transition-all duration-300 bg-background lg:hover:bg-background-hovered group/seriesCard p-300"
            >
              <div className="w-full relative overflow-hidden rounded-050">
                <picture>
                  <img
                    alt="The Research & Analysis"
                    fetchPriority="high"
                    width={379}
                    height={379}
                    decoding="async"
                    data-nimg="1"
                    className="transition-all duration-200 ease-linear object-cover lg:group-hover/seriesCard:scale-105 aspect-3-2 md:aspect-square aspect-square w-full rounded-050"
                    sizes="(max-width: 675px) 60vw, 20vw"
                    src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Fseries%2Fs8gvo18tpe6k%2Ff42citksrh1pfa0wphkw680e9se7d3m5%2Fthe-research-analysis.jpg&w=3840&q=75"
                    style={{ color: "transparent" }}
                  />

                  {/* OVERLAY */}
                  <div className="top-40% pb-300 px-300 lg:group-hover/seriesCard:top-0 transition-all duration-200 ease-linear flex flex-col justify-end absolute inset-x-0 bottom-0 rounded-050 bg-series-overlay">
                    <div
                      data-theme="dark"
                      className="select-none flex-1 relative overflow-hidden flex flex-col justify-end"
                    >
                      <div className="text-text-primary article-h4 delay-200 lg:group-hover/seriesCard:opacity-0 lg:group-hover/seriesCard:delay-0">
                        The Research & Analysis
                      </div>

                      <div className="ui-text-x-small text-text-secondary mt-100 delay-200 lg:group-hover/seriesCard:opacity-0 lg:group-hover/seriesCard:delay-0">
                        337 POSTS
                      </div>

                      <div className="inset-x-0 bottom-0 absolute transition-all duration-200 ease-linear article-text-x-small text-text-primary line-clamp-4 translate-y-30% opacity-0 delay-0 lg:group-hover/seriesCard:translate-y-0 lg:group-hover/seriesCard:opacity-100 lg:group-hover/seriesCard:delay-100">
                        The Research & Analysis là series phân tích chuyên sâu
                        về dự án, narratives,... giúp nhà đầu tư hiểu đúng, đầu
                        tư bằng insights giá trị.
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div
                      data-theme="dark"
                      className="flex items-center justify-between w-full mt-300"
                    >
                      {/* COPY LINK */}
                      <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible">
                        <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed lg:hover:disabled:bg-button-ghost-background-disabled disabled:bg-button-ghost-background-disabled border-0125 border-transparent p-100">
                          <i className="ab-icon !not-italic text-button-ghost-icon group-disabled/ab-button:text-button-ghost-icon-disabled text-size-800 mr-0 ab-link"></i>
                          <span className="select-none text-button-ghost-text group-disabled/ab-button:text-button-ghost-text-disable button-text-large hidden"></span>

                          {/* Loading Spinner */}
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

                        {/* Tooltip */}
                        <div className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 transition-transform ease-linear rounded-050 border border-tooltip-background bg-tooltip-background text-tooltip-text shadow-elevation-none lg:group-hover/tooltip:shadow-elevation-200 mb-150 bottom-100% translate-y-100 lg:group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2">
                          Copy link
                          <div
                            className="tooltip-arrow"
                            data-popper-arrow="true"
                          ></div>
                        </div>
                      </div>

                      {/* FOLLOW BUTTON */}
                      <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed bg-button-tertiary-background lg:hover:bg-button-tertiary-background-hovered active:bg-button-tertiary-background-pressed lg:hover:disabled:bg-button-tertiary-background-disabled disabled:bg-button-tertiary-background-disabled border-0125 border-button-tertiary-border py-050 px-100">
                        <i className="ab-icon !not-italic text-button-tertiary-icon group-disabled/ab-button:text-button-tertiary-icon-disabled text-size-400 mr-100 ab-plus"></i>
                        <span className="select-none text-button-tertiary-text group-disabled/ab-button:text-button-tertiary-text-disable button-text-medium">
                          Follow series
                        </span>

                        {/* Loading */}
                        <div className="flex items-center justify-center -z-1 opacity-0 absolute inset-0 ab-btn-loading-wrapper transition-all">
                          <div className="relative animate-spin flex items-center justify-center w-200 h-200">
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
                    </div>
                  </div>
                </picture>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
