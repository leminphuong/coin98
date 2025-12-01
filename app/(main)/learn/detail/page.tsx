"use client";

import SidebarPortal from "../../components/SidebarPortal";

const posts = [
  {
    id: "p0snujkmyr96byey",
    href: "/zksync-tokenomics",
    author: "Triệu Hoàng",
    date: "Nov 07 2025",
    avatar:
      "/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fuserdata%2Fusrofp9o160cyrud44b0qkj2pxhrmqun%2Fprofile-pictures%2Ffcxo7jlvsiyoc6szngrlo6fjzmg25lrk%2Flogo%2520website%2520upside.png&w=3840&q=50",
    image:
      "/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Fposts%2Fp0snujkmyr96byey%2Ffx82n2kochvhro1lsuewrmno64j3jifa%2Fzksync-nang-cap.png&w=3840&q=75",
    title: "Tuyên bố cải tổ của ZKSync: ZK holder cần biết gì?",
    excerpt: "ZKsync đang thu hút sự chú ý trở lại sau bản nâng cấp...",
    readTime: "12 min read",
  },
];

function ArticleItem({ item }: { item: any }) {
  return (
    <div>
      <a href={item.href}>
        {/* MOBILE */}
        <div
          id={item.id}
          draggable={false}
          className="transition-all duration-300 bg-background lg:hover:bg-background-hovered article-horizontal select-none overflow-hidden py-300 px-200 md:hidden"
        >
          <div className="ui-text-small text-text-secondary min-h-300 flex-wrap items-center mb-100 md:flex hidden">
            <div className="flex items-center h-max ui-text-small text-text-primary">
              <div className="aspect-square ab-avatar-people ab-avatar-size-24 flex-none mr-100">
                <img
                  alt="Avatar"
                  width="32"
                  height="32"
                  className="avatar-img aspect-square w-full object-cover"
                  src={item.avatar}
                />
              </div>

              <div className="line-clamp-1 break-all max-w-w160 ui-text-x-small md:ui-text-small">
                <span>{item.author}</span>
              </div>
            </div>

            <div className="m-050 flex items-center justify-center h-100 aspect-square">
              <div className="w-100 aspect-square rounded-circle bg-g block scale-50"></div>
            </div>

            {item.date}
          </div>

          <div className="flex -mx-150 flex-row-reverse">
            <div className="flex-none w-1/3 min-w-1500 mx-150 block">
              <picture className="block w-full relative">
                <img
                  src={item.image}
                  className="object-cover rounded-050 aspect-3-2 w-full"
                />
              </picture>
            </div>

            <div className="flex-1 mx-150">
              <p className="text-text-primary break-words lg:article-h6 article-h6">
                {item.title}
              </p>

              <div className="mt-100 block !hidden">
                <span className="article-text-x-small line-clamp-3 text-text-secondary">
                  {item.excerpt}
                </span>
              </div>
            </div>
          </div>

          <div className="h-400 items-center justify-between mt-150 flex md:!flex !hidden">
            <div className="flex items-center">
              <div className="box-border badge rounded-circle border-0125 px-100 py-0125 bg-badge-labeled-neutral-background">
                <span className="ui-text-small">{item.readTime}</span>
              </div>
            </div>

            <div className="flex items-center">
              <button className="group/ab-button relative p-100 rounded-050 bg-button-ghost-background">
                <i className="ab-icon text-size-800 ab-bookmark_outlined"></i>
              </button>
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        <div
          id={item.id}
          draggable={false}
          className="transition-all duration-300 bg-background lg:hover:bg-background-hovered article-horizontal select-none overflow-hidden p-300 hidden md:block"
        >
          <div className="ui-text-small text-text-secondary min-h-300 flex-wrap items-center mb-150 flex">
            <div className="flex items-center h-max ui-text-small text-text-primary">
              <div className="aspect-square ab-avatar-people ab-avatar-size-24 flex-none mr-100">
                <img
                  alt="Avatar"
                  width="32"
                  height="32"
                  className="avatar-img aspect-square w-full"
                  src={item.avatar}
                />
              </div>

              <div className="line-clamp-1 break-all max-w-w160">
                <span>{item.author}</span>
              </div>
            </div>

            <div className="m-050 flex items-center justify-center h-100 aspect-square">
              <div className="w-100 aspect-square rounded-circle bg-g block scale-50"></div>
            </div>

            {item.date}
          </div>

          <div className="flex -mx-300 flex-row-reverse">
            <div className="flex-none w-30% min-w-w200 mx-300 block">
              <picture>
                <img
                  src={item.image}
                  className="object-cover rounded-050 aspect-3-2 w-full"
                />
              </picture>
            </div>

            <div className="flex-1 mx-300">
              <p className="text-text-primary break-words lg:article-h6 article-h4">
                {item.title}
              </p>

              <div className="mt-150">
                <span className="article-text-x-small line-clamp-3 text-text-secondary">
                  {item.excerpt}
                </span>
              </div>
            </div>
          </div>

          <div className="h-400 items-center justify-between mt-200 flex">
            <div className="flex items-center">
              <div className="box-border badge rounded-circle px-100 py-0125 bg-badge-labeled-neutral-background">
                <span className="ui-text-small">{item.readTime}</span>
              </div>
            </div>

            <div className="flex items-center">
              <button className="p-100 rounded-050 bg-button-ghost-background">
                <i className="ab-icon text-size-800 ab-bookmark_outlined"></i>
              </button>
            </div>
          </div>
        </div>
      </a>

      <div className="bg-divider h-0125 w-full"></div>
    </div>
  );
}

export default function DetailLearnPage() {
  return (
    <>
      <div className="fixed bg-background z-3 w-full">
        <div className="py-200 flex items-stretch max-w-w1440 mx-auto flex-wrap lg:flex-nowrap">
          <div className="w-full lg:max-w-sp320 flex items-center lg:border-r-0125 grow py-100 mb-200 lg:py-0 lg:mb-0 px-300">
            <span className="ui-text-medium-emphasis md:ui-text-large-emphasis">
              LEARN - Thư viện Crypto
            </span>
          </div>

          {/* Search + Button */}
          <div className="flex items-center px-300 xl:px-0 w-full">
            <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed lg:hover:disabled:bg-button-ghost-background-disabled disabled:bg-button-ghost-background-disabled border-0125 border-transparent p-100 lg:hidden">
              <i className="ab-icon !not-italic text-button-ghost-icon group-disabled/ab-button:text-button-ghost-icon-disabled text-size-800 mr-0 ab-grid"></i>
              <span className="select-none text-button-ghost-text group-disabled/ab-button:text-button-ghost-text-disable button-text-large hidden"></span>

              <div className="flex items-center justify-center -z-1 opacity-0 absolute inset-0 ab-btn-loading-wrapper transition-all">
                <div className="relative animate-spin flex items-center justify-center w-300 h-300">
                  <div className="h-050 w-050 rounded-circle absolute left-1/2 -translate-x-1/2 top-0 z-1 bg-btn-loading-transparent"></div>
                  <div
                    className="w-full h-full rounded-circle border-box bg-btn-loading-transparent"
                    style={{
                      padding: "4px",
                      mask: "conic-gradient(rgba(0, 0, 0, 0) 45deg, rgb(0, 0, 0)) subtract, linear-gradient(rgb(0, 0, 0) 0px, rgb(0, 0, 0) 0px) content-box",
                    }}
                  ></div>
                </div>
              </div>
            </button>

            <div className="grow px-200 lg:px-300">
              <div className="md:w-w468">
                <div className="flex flex-col">
                  <label
                    htmlFor="cy873"
                    className="h-600 bg-background flex items-center py-150 px-200 rounded-050 border-0125 border-border transition-all duration-200 focus-within:border-cbr-50 focus-within:shadow-outline-primary cursor-text rounded-full"
                  >
                    <i className="ab-icon !not-italic mr-150 flex-none transition-all duration-200 text-size-800 text-icon ab-search"></i>

                    <input
                      placeholder="Search in portal"
                      id="cy873"
                      autoComplete="off"
                      className="outline-none bg-transparent align-middle flex-1 text-text-primary disabled:text-text-disabled select-none placeholder:select-none placeholder:text-text-subtlest"
                    />

                    <div className="w-300 h-300 items-center justify-center ml-150 lg:hover:cursor-pointer hidden">
                      <i className="ab-icon !not-italic flex-none text-size-400 text-icon-subtlest ab-cancel"></i>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Dropdown Filter */}
          <div className="md:ml-200 flex items-center lg:mr-300 2xl:mr-0">
            <div
              id="PrwENwyLG4EBhgin"
              data-show="open"
              className="overflow-hidden relative w-max h-max group/dropdown data-[show=open]:overflow-visible"
            >
              {/* Mobile Filter Button */}
              <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed lg:hover:disabled:bg-button-ghost-background-disabled disabled:bg-button-ghost-background-disabled border-0125 border-transparent p-100 md:hidden bg-button-ghost-background-pressed">
                <i className="ab-icon !not-italic text-button-ghost-icon text-size-800 ab-filter"></i>
              </button>

              {/* Desktop Filter Button */}
              <button className="group/ab-button relative select-none items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed border-0125 border-transparent py-100 px-150 hidden md:flex bg-button-ghost-background-pressed">
                <i className="ab-icon !not-italic text-button-ghost-icon text-size-400 mr-100 ab-filter"></i>
                <span className="button-text-large">Filter</span>
              </button>

              {/* Dropdown Panel */}
              <div
                className="w-max h-max absolute z-[100] overflow-hidden bg-transparent transition-transform ease-linear pt-150 top-full right-0"
                style={{ transitionDuration: "0ms" }}
              >
                <div className="ui-text-medium rounded-050 bg-background border-0125 border-border shadow-elevation-none group-data-[show=open]/dropdown:shadow-elevation-500">
                  <div className="flex max-h-w480 w-[100vw] md:w-w400 flex-col overflow-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b-0125 px-300 pb-100">
                      <span className="ui-text-x-small-emphasis font-semibold uppercase text-text-subtlest">
                        Filter
                      </span>
                    </div>

                    {/* Reading Time */}
                    <div className="flex flex-col p-200">
                      <span className="ui-text-x-small-emphasis px-100 font-semibold text-text-subtlest">
                        Reading time
                      </span>

                      <div className="px-150 mt-100 w-full mb-300">
                        <div className="relative w-full h-150">
                          <input
                            max={20}
                            min={0}
                            step={5}
                            type="range"
                            className="thumb thumb-left w-full absolute h-050 z-30"
                            defaultValue={0}
                          />

                          <input
                            max={20}
                            min={0}
                            step={5}
                            type="range"
                            className="thumb thumb-right w-full absolute h-050 z-30"
                            defaultValue={20}
                          />

                          {/* Slider Background */}
                          <div className="w-full">
                            <div className="absolute rounded-050 h-050 z-10 w-full bg-g-15"></div>

                            <div
                              className="absolute rounded-050 h-050 z-20 bg-cbr-30"
                              style={{ left: "0%", width: "100%" }}
                            ></div>

                            {/* Tooltip Left */}
                            <div
                              className="absolute rounded-050 top-full bg-tooltip-background w-600 text-center py-050 -translate-x-300 mt-100"
                              style={{ left: "2.5%" }}
                            >
                              <span className="ui-text-x-small text-text-primary">
                                1 min
                              </span>
                            </div>

                            {/* Tooltip Right */}
                            <div
                              className="absolute rounded-050 top-full bg-tooltip-background w-600 text-center py-050 -translate-x-300 mt-100"
                              style={{ left: "97.5%" }}
                            >
                              <span className="ui-text-x-small text-text-primary">
                                All
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Types */}
                    <div className="flex flex-col p-200">
                      <span className="ui-text-x-small-emphasis px-100 font-semibold text-text-subtlest">
                        Types
                      </span>

                      <div className="flex flex-wrap mt-100">
                        {["All", "Article", "Video"].map((t) => (
                          <div
                            key={t}
                            className="group/chip h-fit w-fit min-w-600 select-none transition-all duration-100 ease-linear rounded-circle hover:bg-background-hovered md:cursor-pointer m-050"
                          >
                            <div className="flex items-center justify-center py-100 px-150 rounded-circle border-0125 border-border-subtle ui-text-medium">
                              <span className="text-text-primary">{t}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sorted By */}
                    <div className="flex flex-col p-200">
                      <span className="ui-text-x-small-emphasis px-100 font-semibold text-text-subtlest">
                        Sorted by
                      </span>

                      <div className="flex flex-wrap mt-100">
                        {["Newest", "Oldest", "Most viewed", "Most liked"].map(
                          (t) => (
                            <div
                              key={t}
                              className="group/chip h-fit w-fit min-w-600 select-none transition-all duration-100 ease-linear rounded-circle hover:bg-background-hovered md:cursor-pointer m-050"
                            >
                              <div className="flex items-center justify-center py-100 px-150 rounded-circle border-0125 border-border-subtle ui-text-medium">
                                <span className="text-text-primary">{t}</span>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="flex justify-end p-200 pb-100">
                      <button className="group/ab-button select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-primary-background lg:hover:bg-button-primary-background-hovered active:bg-button-primary-background-pressed border-0125 border-button-primary-background py-100 px-150">
                        <span className="button-text-large text-button-primary-text">
                          Apply
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-divider h-0125 w-full"></div>
      </div>
      <div className="max-w-w1440 w-full mx-auto relative pt-sp200 md:pt-1600 lg:pt-1000 flex">
        <SidebarPortal />

        <div className="w-full lg:w-[calc(100%-320px)] pl-0 flex justify-center lg:ml-auto">
          <div className="max-w-w728 w-full">
            <div className="px-300 pt-200 pb-100">
              <span className="ui-text-x-small-emphasis text-text-subtlest">
                {posts.length} POSTS
              </span>
            </div>

            <div className="flex flex-col mx-auto w-full max-w-w728">
              {posts.map((item) => (
                <ArticleItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
