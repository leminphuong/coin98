import "./page.css";
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}
export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div className="group/profile relative w-full flex flex-col box-border max-w-w1280 mx-auto h-screenBodyFullMobile lg:h-screenBodyFull data-[sidebar=open]:overflow-hidden lg:data-[sidebar=open]:overflow-visible">
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
              <a
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
              </a>
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
                    <a
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
                    </a>

                    {/* Item 2 */}
                    <a
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
                    </a>
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

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
