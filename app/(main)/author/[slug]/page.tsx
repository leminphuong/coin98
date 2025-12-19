import Link from "next/link";
import AvatarCircle from "@/components/AvatarCircle";
import Image from "next/image";
import BodyClass from "@/components/BodyClass";
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}
export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  
  return (
    <div className="group/profile relative w-full flex flex-col box-border max-w-w1280 mx-auto h-screenBodyFullMobile lg:h-screenBodyFull data-[sidebar=open]:overflow-hidden lg:data-[sidebar=open]:overflow-visible">
      
      <BodyClass className="hide-footer" />
      <div className="relative transition-all flex justify-between px-200 lg:px-300 py-300 lg:py-500">
        {/* LEFT */}
        <div className="flex">
          <div className="aspect-square ab-avatar-people ab-avatar-size-64 md:ab-avatar-size-128 flex-none">
            <img
              alt="linhnt profile"
              loading="lazy"
              width={32}
              height={32}
              className="avatar-img aspect-square w-full object-cover"
              src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fuserdata%2Fusrzihar2uey9sjefrz1xtywijisyagp%2Fprofile-pictures%2Ffggd9ofu7867do4ff8wond9omarh9iir%2F288930474_3078241535821095_8640745413739969681_n.jpg&w=3840&q=50"
            />
          </div>

          <div className="flex-1 flex flex-col ml-300 justify-center">
            <div className="flex flex-col">
              <span className="article-h5 md:article-h2 text-text-primary">
                linhnt
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-end">
          <div className="flex items-center justify-between md:justify-end">
            <div className="flex items-center">
              {/* MOBILE Share Button */}
              <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible">
                <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background border-0125 border-transparent p-050 md:hidden">
                  <i className="ab-icon !not-italic text-button-ghost-icon w-300 h-300 flex items-center justify-center text-size-400 ab-link"></i>
                </button>

                {/* DESKTOP Share Button */}
                <button className="group/ab-button relative select-none items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background border-0125 border-transparent p-100 hidden md:flex">
                  <i className="ab-icon !not-italic text-button-ghost-icon text-size-800 ab-link"></i>
                  <span className="select-none text-button-ghost-text button-text-large hidden">
                    Share
                  </span>
                </button>

                {/* Tooltip */}
                <div className="w-max h-max absolute overflow-hidden px-075 py-050 text-size-400 rounded-050 border border-tooltip-background bg-tooltip-background text-tooltip-text shadow-elevation-none mb-150 bottom-100% translate-y-100 lg:group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2 z-100">
                  Copy link
                  <div className="tooltip-arrow" data-popper-arrow="true" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="transition-all absolute bottom-0 left-200 right-200">
          <div className="bg-divider h-0125 w-full" />
        </div>
      </div>
      <div className="flex items-center md:hidden px-200 mt-150 justify-between">
        <div className="flex">
          <div className="flex items-center">
            {/* First Contributor */}
            <div className="mr-050 last:mr-0">
              <Link
                className="bg-background-on-color p-050 rounded-100 flex items-center pr-100"
                href="https://marginatm.com"
              >
                <div className="rounded-050 bg-background overflow-hidden">
                  <img
                    alt="MarginATM"
                    loading="lazy"
                    width={24}
                    height={24}
                    className="hidden lg:flex"
                    src="https://coin98.s3.ap-southeast-1.amazonaws.com/AmberBlock/marginatmIcon.svg"
                  />
                  <img
                    alt="MarginATM"
                    loading="lazy"
                    width={16}
                    height={16}
                    className="lg:hidden"
                    src="https://coin98.s3.ap-southeast-1.amazonaws.com/AmberBlock/marginatmIcon.svg"
                  />
                </div>

                <span className="ui-text-x-small-emphasis lg:ui-text-small-emphasis ml-100">
                  MarginATM
                </span>
              </Link>
            </div>

            {/* +1 Dropdown */}
            <div
              id="cqn4tsl9atFh7fUU"
              data-show="close"
              className="overflow-hidden relative w-max h-max group/dropdown data-[show=open]:overflow-visible"
            >
              {/* +1 Button */}
              <div className="ui-text-x-small-emphasis lg:ui-text-small-emphasis bg-background-on-color py-050 px-100 rounded-100 flex items-center">
                +1
              </div>

              {/* Dropdown Panel */}
              <div
                className="w-max h-max absolute z-[100] overflow-hidden bg-transparent transition-transform ease-linear pt-150 top-100% right-0 w-w200"
                style={{ transitionDuration: "0ms" }}
              >
                <div className="ui-text-medium rounded-050 bg-background border-0125 border-border shadow-elevation-none group-data-[show=open]/dropdown:shadow-elevation-500">
                  <div className="min-w-w180 py-100 max-h-h216 overflow-y-auto no-scrollbar">
                    {/* Item 1 */}
                    <Link
                      className="py-100 px-200 flex items-center"
                      href="https://marginatm.com"
                    >
                      <img
                        alt="MarginATM"
                        loading="lazy"
                        width={24}
                        height={24}
                        className="hidden lg:flex"
                        src="https://coin98.s3.ap-southeast-1.amazonaws.com/AmberBlock/marginatmIcon.svg"
                      />
                      <img
                        alt="MarginATM"
                        loading="lazy"
                        width={16}
                        height={16}
                        className="lg:hidden"
                        src="https://coin98.s3.ap-southeast-1.amazonaws.com/AmberBlock/marginatmIcon.svg"
                      />
                      <span className="ui-text-small ml-100 line-clamp-1 break-all">
                        MarginATM
                      </span>
                    </Link>

                    {/* Item 2 */}
                    <Link
                      className="py-100 px-200 flex items-center"
                      href="https://coin98.net"
                    >
                      <img
                        alt="Upside"
                        loading="lazy"
                        width={24}
                        height={24}
                        className="hidden lg:flex"
                        src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Fchannel%2Fchnbzaa92ook5tnj%2Ffuyvacrzjs2gap74gp5ulvwf5g1i25zr%2Fupside-logo.png&w=48&q=75"
                      />
                      <img
                        alt="Upside"
                        loading="lazy"
                        width={16}
                        height={16}
                        className="lg:hidden"
                        src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Fchannel%2Fchnbzaa92ook5tnj%2Ffuyvacrzjs2gap74gp5ulvwf5g1i25zr%2Fupside-logo.png&w=32&q=75"
                      />
                      <span className="ui-text-small ml-100 line-clamp-1 break-all">
                        Upside
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="lg:pb-400 h-full bg-background border-0125 lg:border-none transition-all duration-200 ease-linear absolute top-900 lg:top-0 bottom-0 w-w320 lg:w-w224 lg:left-0 z-10 lg:group-data-[sidebar=close]/profile:left-0 group-data-[sidebar=open]/profile:left-0 group-data-[sidebar=close]/profile:-left-100%">
          <div className="bg-divider-subtle w-0125 h-full absolute right-0 top-0 bottom-0"></div>

          <div className="sticky top-1600 md:top-sp160 lg:top-sp160">
            <div className="px-200 group/profile-menu">
              <div className="py-200 relative">
                <div className="min-w-1500 select-none transition-all duration-200 ease-linear md:hover:bg-background-subtle ui-text-small-emphasis flex items-center p-150 text-menu-item-text-highlight bg-background-highlight rounded-050 md:ui-text-medium-emphasis">
                  <i className="ab-icon !not-italic mr-150 md:text-size-800 ab-contribution"></i>
                  Contribution
                </div>

                <div className="text-text-primary min-w-1500 select-none transition-all duration-200 ease-linear md:hover:bg-background-subtle ui-text-small bg-background flex items-center p-150 md:ui-text-medium">
                  <i className="ab-icon !not-italic mr-150 md:text-size-800 ab-admin"></i>
                  About
                </div>

                <div className="bg-divider h-0125 w-full absolute bottom-0 left-0 group-last/profile-menu:hidden"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pl-sp224 lg:pt-100">
          <div className="lg:pl-1000 mx-auto h-full">
            <div className="h-full w-full max-w-w728 mx-auto">
              {/* Header Section */}
              <div className="flex items-center px-200 md:px-300 pt-300 md:pt-200">
                {/* Mobile Button */}
                <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed bg-button-tertiary-background lg:hover:bg-button-tertiary-background-hovered active:bg-button-tertiary-background-pressed lg:hover:disabled:bg-button-tertiary-background-disabled disabled:bg-button-tertiary-background-disabled border-0125 border-button-tertiary-border p-050 lg:hidden mr-150">
                  <i className="ab-icon !not-italic text-button-tertiary-icon group-disabled/ab-button:text-button-tertiary-icon-disabled w-300 h-300 flex items-center justify-center text-size-400 mr-0 ab-menu"></i>
                </button>

                <div className="flex grow flex-col break-words">
                  <span className="ui-text-large-emphasis md:ui-h3-emphasis text-text-primary line-clamp-1">
                    linhnt's contribution
                  </span>
                </div>

                {/* Sort Dropdown */}
                <div className="min-h-500 ml-150">
                  <div className="flex items-center relative">
                    <div
                      id="3tuZ1Jr5CFHaIL3s"
                      data-show="close"
                      className="overflow-hidden relative w-max h-max group/dropdown data-[show=open]:overflow-visible"
                    >
                      <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background py-100 px-150">
                        <i className="ab-icon !not-italic text-button-ghost-icon mr-100 text-size-400 ab-sorting"></i>
                        <span className="select-none button-text-large">
                          <span className="button-text-large">Newest</span>
                        </span>
                      </button>

                      <div className="h-max absolute z-[100] overflow-hidden bg-transparent transition-transform ease-linear pt-150 top-100% right-0 w-1500">
                        <div className="ui-text-medium rounded-050 bg-background border-0125 border-border shadow-elevation-none">
                          <div className="flex flex-col py-100">
                            <div className="flex flex-col px-200 py-100 group hover:bg-background-subtle">
                              <span className="ui-text-small text-text-primary group-hover:ui-text-small-emphasis">
                                Newest
                              </span>
                            </div>
                            <div className="flex flex-col px-200 py-100 group hover:bg-background-subtle">
                              <span className="ui-text-small text-text-primary group-hover:ui-text-small-emphasis">
                                Oldest
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Posts Section */}
              <div>
                <div className="pt-200 pb-100 px-200 md:px-300 ui-text-small-emphasis text-text-subtlest">
                  11 POSTS
                </div>

                <div className="mt-2" role="tabpanel">
                  <div className="h-full w-full max-w-w728 mx-auto">
                    <div className="flex flex-wrap">
                      {/* Post Item */}
                      <Link
                        className="block w-full"
                        href="/what-is-coin98-wallet"
                      >
                        <div className="transition-all duration-300 bg-background article-horizontal select-none overflow-hidden py-300 px-200 md:hidden">
                          <div className="ui-text-small text-text-secondary min-h-300 flex-wrap items-center mb-100 flex">
                            <div className="flex items-center h-max ui-text-small text-text-primary">
                              <div className="aspect-square ab-avatar-people ab-avatar-size-24 flex-none mr-100">
                                <img
                                  alt="Avatar"
                                  width={32}
                                  height={32}
                                  className="avatar-img aspect-square w-full object-cover"
                                  src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fuserdata%2Fusrzihar2uey9sjefrz1xtywijisyagp%2Fprofile-pictures%2Ffggd9ofu7867do4ff8wond9omarh9iir%2F288930474_3078241535821095_8640745413739969681_n.jpg&w=3840&q=50"
                                />
                              </div>
                              <div className="line-clamp-1 break-all max-w-w160 ui-text-x-small md:ui-text-small">
                                <span>linhnt</span>
                              </div>
                            </div>
                            <AvatarCircle />
                            Jun 24 2021
                          </div>

                          <div className="flex -mx-150 flex-row-reverse">
                            <div className="flex-none w-1/3 min-w-1500 mx-150 block">
                              <picture className="block w-full relative">
                                <img
                                  alt="coin98 super wallet"
                                  width={600}
                                  height={400}
                                  className="object-cover rounded-050 aspect-3-2 w-full"
                                  src="/_next/image?url=https%3A%2F%2Ffile.coin98.com%2Fthumbnail%2Fwhat-is-coin98-wallet.png&w=3840&q=75"
                                />
                              </picture>
                            </div>

                            <div className="flex-1 mx-150">
                              <p className="text-text-primary break-words lg:article-h6 article-h6">
                                What is Coin98 Super Wallet? Cutting-edge Crypto
                                Wallet leveraging AI into Web3
                              </p>
                              <div className="mt-100 block">
                                <span className="article-text-x-small break-words line-clamp-3 text-text-secondary">
                                  Coin98 Super Wallet underwent a significant
                                  transformation…
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="h-400 items-center justify-between mt-150 flex">
                            <div className="flex items-center">
                              <div className="box-border badge flex w-fit items-center justify-center rounded-circle border-0125 px-100 py-0125 bg-badge-labeled-neutral-background h-300 text-text-primary">
                                <span className="ui-text-small text-badge-labeled-neutral-text">
                                  8 min read
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Courses Tab */}
                <div
                  className="mt-2 focus-visible:outline-none"
                  data-state="active"
                  role="tabpanel"
                  aria-labelledby="8NKFcmasZUTtXVli-trigger-posts"
                  id="8NKFcmasZUTtXVli-content-posts"
                  tabIndex={0}
                  style={{ animationDuration: "0s" }}
                >
                  <div className="h-full w-full max-w-w728 mx-auto">
                    <div className="flex flex-wrap">
                      <Link
                        className="block w-full"
                        href="/what-is-coin98-wallet"
                      >
                        {/* MOBILE CARD */}
                        <div
                          id="peb4rkl89rp6cb9x"
                          draggable="false"
                          className="transition-all duration-300 bg-background lg:hover:bg-background-hovered article-horizontal select-none overflow-hidden py-300 px-200 md:hidden"
                        >
                          {/* Header */}
                          <div className="ui-text-small text-text-secondary min-h-300 flex-wrap items-center mb-100 flex">
                            <div className="flex items-center h-max ui-text-small text-text-primary">
                              <div className="aspect-square ab-avatar-people ab-avatar-size-24 flex-none mr-100">
                                <img
                                  alt="Avatar"
                                  width={32}
                                  height={32}
                                  className="avatar-img aspect-square w-full object-cover"
                                  src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fuserdata%2Fusrzihar2uey9sjefrz1xtywijisyagp%2Fprofile-pictures%2Ffggd9ofu7867do4ff8wond9omarh9iir%2F288930474_3078241535821095_8640745413739969681_n.jpg&w=3840&q=50"
                                />
                              </div>

                              <div className="line-clamp-1 break-all max-w-w160 ui-text-x-small md:ui-text-small">
                                <span>linhnt</span>
                              </div>
                            </div>
                            <AvatarCircle />
                            Jun 24 2021
                          </div>

                          {/* Content */}
                          <div className="flex -mx-150 flex-row-reverse">
                            <div className="flex-none w-1/3 min-w-1500 mx-150 block">
                              <picture className="block w-full relative">
                                <img
                                  alt="coin98 super wallet"
                                  width={600}
                                  height={400}
                                  className="object-cover rounded-050 aspect-3-2 w-full"
                                  src="/_next/image?url=https%3A%2F%2Ffile.coin98.com%2Fthumbnail%2Fwhat-is-coin98-wallet.png&w=3840&q=75"
                                />
                              </picture>
                            </div>

                            <div className="flex-1 mx-150">
                              <p className="text-text-primary break-words lg:article-h6 article-h6">
                                What is Coin98 Super Wallet? Cutting-edge Crypto
                                Wallet leveraging AI into Web3
                              </p>

                              <div className="mt-100 block">
                                <span className="article-text-x-small break-words line-clamp-3 text-text-secondary">
                                  Coin98 Super Wallet underwent a significant
                                  transformation from V14 to V15. New UI & UX
                                  empowers individuals exploring to the Open
                                  Internet.
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Footer */}
                          <div className="h-400 items-center justify-between mt-150 flex">
                            <div className="flex items-center">
                              <div className="box-border badge flex w-fit items-center justify-center rounded-circle border-0125 px-100 py-0125 border-badge-labeled-neutral-border bg-badge-labeled-neutral-background h-300 text-text-primary my-050 whitespace-nowrap">
                                <span className="ui-text-small text-badge-labeled-neutral-text">
                                  8 min read
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center">
                              {/* Save Button */}
                              <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible mr-150">
                                <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 bg-button-ghost-background border-0125 p-100">
                                  <i className="ab-icon text-button-ghost-icon text-size-800 mr-0 ab-bookmark_outlined"></i>
                                </button>

                                <div className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 rounded-050 border bg-tooltip-background text-tooltip-text shadow-elevation-none mb-150 bottom-100% translate-y-100 lg:group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2">
                                  Save<div className="tooltip-arrow"></div>
                                </div>
                              </div>

                              {/* Copy Button */}
                              <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible">
                                <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 bg-button-ghost-background border-0125 p-100">
                                  <i className="ab-icon text-button-ghost-icon text-size-800 mr-0 ab-link"></i>
                                </button>

                                <div className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 rounded-050 border bg-tooltip-background text-tooltip-text shadow-elevation-none mb-150 bottom-100% translate-y-100 lg:group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2">
                                  Copy link<div className="tooltip-arrow"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* DESKTOP CARD */}
                        <div
                          id="peb4rkl89rp6cb9x"
                          draggable="false"
                          className="transition-all duration-300 bg-background lg:hover:bg-background-hovered article-horizontal select-none overflow-hidden p-300 hidden md:block"
                        >
                          <div className="ui-text-small text-text-secondary min-h-300 flex-wrap items-center mb-150 flex">
                            <div className="flex items-center h-max ui-text-small text-text-primary">
                              <div className="aspect-square ab-avatar-people ab-avatar-size-24 flex-none mr-100">
                                <img
                                  alt="Avatar"
                                  width={32}
                                  height={32}
                                  className="avatar-img aspect-square w-full object-cover"
                                  src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fuserdata%2Fusrzihar2uey9sjefrz1xtywijisyagp%2Fprofile-pictures%2Ffggd9ofu7867do4ff8wond9omarh9iir%2F288930474_3078241535821095_8640745413739969681_n.jpg&w=3840&q=50"
                                />
                              </div>

                              <div className="line-clamp-1 break-all max-w-w160 ui-text-x-small md:ui-text-small">
                                <span>linhnt</span>
                              </div>
                            </div>
                            <AvatarCircle />
                            Jun 24 2021
                          </div>

                          <div className="flex -mx-300 flex-row-reverse">
                            <div className="flex-none w-30% min-w-w200 mx-300 block">
                              <picture className="block w-full relative">
                                <img
                                  alt="coin98 super wallet"
                                  width={600}
                                  height={400}
                                  className="object-cover rounded-050 aspect-3-2 w-full"
                                  src="/_next/image?url=https%3A%2F%2Ffile.coin98.com%2Fthumbnail%2Fwhat-is-coin98-wallet.png&w=3840&q=75"
                                />
                              </picture>
                            </div>

                            <div className="flex-1 mx-300">
                              <p className="text-text-primary break-words lg:article-h6 article-h4">
                                What is Coin98 Super Wallet? Cutting-edge Crypto
                                Wallet leveraging AI into Web3
                              </p>

                              <div className="mt-150 block">
                                <span className="article-text-x-small break-words line-clamp-3 text-text-secondary">
                                  Coin98 Super Wallet underwent a significant
                                  transformation from V14 to V15…
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="h-400 items-center justify-between mt-200 flex">
                            <div className="flex items-center">
                              <div className="box-border badge flex w-fit items-center justify-center rounded-circle border-0125 px-100 py-0125 bg-badge-labeled-neutral-background h-300 text-text-primary my-050 whitespace-nowrap">
                                <span className="ui-text-small text-badge-labeled-neutral-text">
                                  8 min read
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center">
                              {/* Save */}
                              <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible mr-150">
                                <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 bg-button-ghost-background border-0125 p-100">
                                  <i className="ab-icon text-button-ghost-icon text-size-800 mr-0 ab-bookmark_outlined"></i>
                                </button>

                                <div className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 rounded-050 border bg-tooltip-background text-tooltip-text shadow-elevation-none mb-150 bottom-100% translate-y-100 lg:group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2">
                                  Save<div className="tooltip-arrow"></div>
                                </div>
                              </div>

                              {/* Copy link */}
                              <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible">
                                <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 bg-button-ghost-background border-0125 p-100">
                                  <i className="ab-icon text-button-ghost-icon text-size-800 mr-0 ab-link"></i>
                                </button>

                                <div className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 rounded-050 border bg-tooltip-background text-tooltip-text shadow-elevation-none mb-150 bottom-100% translate-y-100 lg:group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2">
                                  Copy link<div className="tooltip-arrow"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
