import LatestPostsHeader from "@/components/LatestPostsHeader";
import LatestPostsSlider from "@/components/LatestPostsSlider";

export default function ReportPage() {
  return (
    <>
      <div className="max-w-w1440 w-full mx-auto">
        <div className="bg-background mb-500" data-theme="light">
          <div className="flex items-center p-200 pb-0 md:px-300">
            <div className="flex grow flex-col break-words">
              <span className="ui-text-large-emphasis md:ui-h3-emphasis text-text-primary line-clamp-1">
                Phân tích theo chủ đề
              </span>
            </div>

            <div className="min-h-500 ml-150">
              <a href="/report/phan-tich-theo-chu-de">
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
              </a>
            </div>
          </div>
          <a href="/dinh-gia-base">
            {/* DESKTOP CARD */}
            <div
              id="pioha7q5vsmi1o49"
              draggable={false}
              className="transition-all duration-300 bg-background lg:hover:bg-background-hovered article-highlight select-none overflow-hidden items-center p-300 flex-row-reverse hidden s640:flex"
            >
              <picture className="block flex-none w-1/2 relative">
                <img
                  alt="phân tích base"
                  fetchPriority="high"
                  loading="eager"
                  width={600}
                  height={400}
                  decoding="async"
                  data-nimg="1"
                  className="object-cover rounded-050 aspect-3-2 w-full rounded-050"
                  sizes="(max-width: 480px) 100vw, (max-width: 675px) 60vw, 50vw"
                  src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Fposts%2Fpioha7q5vsmi1o49%2Ffdadw577h64uih39i0r28ihuu1rxn93u%2Fphan-tich-base-8.jpeg&w=3840&q=75"
                  style={{ color: "transparent" }}
                />
              </picture>

              {/* RIGHT INFO */}
              <div className="flex-1 mr-400">
                {/* AUTHOR + DATE */}
                <div className="flex ui-text-small text-text-secondary min-h-300 flex-wrap items-center mb-150">
                  <div>
                    <button
                      type="button"
                      id="radix-author"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-state="closed"
                    >
                      <div className="flex items-center ui-text-x-small md:ui-text-small text-text-primary">
                        <div className="mr-100 flex items-center -space-x-2">
                          {/* Avatar 1 */}
                          <div className="aspect-square relative z-2 ab-avatar-people ab-avatar-size-24 ring-2 ring-background">
                            <img
                              alt="avatar"
                              loading="lazy"
                              width={32}
                              height={32}
                              decoding="async"
                              data-nimg="1"
                              className="avatar-img aspect-square w-full object-cover"
                              sizes="24px"
                              src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fuserdata%2Fusrodknlsjebyuc3z1srbebz84nxn8gu%2Fprofile-pictures%2Ff4589433p263lg3v7es3eqejchz4ajch%2Fimg_2216.jpeg&w=3840&q=50"
                            />
                          </div>

                          {/* Avatar 2 */}
                          <div className="aspect-square relative z-1 ab-avatar-people ab-avatar-size-24 ring-2 ring-background">
                            <img
                              alt="avatar"
                              loading="lazy"
                              width={32}
                              height={32}
                              decoding="async"
                              data-nimg="1"
                              className="avatar-img aspect-square w-full object-cover"
                              sizes="24px"
                              src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fuserdata%2Fusrzihar2uey9sjefrz1xtywijisyagp%2Fprofile-pictures%2Ffggd9ofu7867do4ff8wond9omarh9iir%2F288930474_3078241535821095_8640745413739969681_n.jpg&w=3840&q=50"
                            />
                          </div>

                          {/* Avatar 3 */}
                          <div className="aspect-square relative z-0 ab-avatar-people ab-avatar-size-24 ring-2 ring-background">
                            <img
                              alt="avatar"
                              loading="lazy"
                              width={32}
                              height={32}
                              decoding="async"
                              data-nimg="1"
                              className="avatar-img aspect-square w-full object-cover"
                              sizes="24px"
                              src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Fchannel%2Fchnbzaa92ook5tnj%2Ffuyvacrzjs2gap74gp5ulvwf5g1i25zr%2Fupside-logo.png&w=3840&q=50"
                            />
                          </div>
                        </div>
                        Multi Author
                      </div>
                    </button>
                  </div>
                  {/* Dot */}
                  <div className="m-050 flex items-center justify-center h-100 aspect-square">
                    <div className="w-100 aspect-square rounded-circle bg-g block scale-50"></div>
                  </div>
                  3 days ago
                </div>

                {/* TITLE */}
                <p className="text-text-primary break-words article-h3">
                  Định giá Base trước thềm TGE - Cuộc chơi Layer 2 kết thúc
                  (P.2)
                </p>

                {/* SHORT DESCRIPTION */}
                <div className="mt-150">
                  <span className="article-text-x-small break-words line-clamp-3 text-text-secondary">
                    Tiếp nối phần 1 sau khi phân tích chiến lược tiếp theo của
                    Base, phần 2 tập trung vào nội dung định giá Base trước thềm
                    TGE.
                  </span>
                </div>

                {/* FOOTER ROW */}
                <div className="h-400 flex items-center justify-between mt-200">
                  <div className="flex items-center">
                    <div className="box-border badge flex w-fit items-center justify-center rounded-circle border-0125 px-100 py-0125 border-badge-labeled-neutral-border bg-badge-labeled-neutral-background h-300 text-text-primary my-050 whitespace-nowrap">
                      <span className="ui-text-small text-badge-labeled-neutral-text">
                        13 min read
                      </span>
                    </div>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="flex items-center">
                    {/* SAVE */}
                    <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible mr-150">
                      <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed border-0125 border-transparent p-100">
                        <i className="ab-icon text-button-ghost-icon text-size-800 mr-0 ab-bookmark_outlined"></i>
                      </button>
                      <div className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 transition-transform ease-linear rounded-050 border border-tooltip-background bg-tooltip-background text-tooltip-text mb-150 bottom-100% translate-y-100 lg:group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2">
                        Save
                        <div
                          className="tooltip-arrow"
                          data-popper-arrow="true"
                        ></div>
                      </div>
                    </div>

                    {/* COPY LINK */}
                    <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible">
                      <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed border-0125 border-transparent p-100">
                        <i className="ab-icon text-button-ghost-icon text-size-800 mr-0 ab-link"></i>
                      </button>
                      <div className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 transition-transform ease-linear rounded-050 border border-tooltip-background bg-tooltip-background text-tooltip-text mb-150 bottom-100% translate-y-100 lg:group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2">
                        Copy link
                        <div
                          className="tooltip-arrow"
                          data-popper-arrow="true"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MOBILE CARD */}
            <div
              id="pioha7q5vsmi1o49"
              draggable={false}
              className="transition-all duration-300 bg-background lg:hover:bg-background-hovered article-vertical select-none px-200 py-300 md:px-300 s640:hidden"
            >
              <picture className="relative mb-200 block">
                <img
                  alt="phân tích base"
                  fetchPriority="high"
                  loading="eager"
                  width={600}
                  height={400}
                  decoding="async"
                  data-nimg="1"
                  className="object-cover rounded-050 aspect-3-2 w-full rounded-050"
                  src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Fposts%2Fpioha7q5vsmi1o49%2Ffdadw577h64uih39i0r28ihuu1rxn93u%2Fphan-tich-base-8.jpeg&w=3840&q=75"
                />
              </picture>

              {/* AUTHOR */}
              <div className="ui-text-small text-text-secondary min-h-300 flex-wrap items-center mb-100 flex">
                <div>Multi Author</div>
                <div className="m-050 flex items-center justify-center h-100 aspect-square">
                  <div className="w-100 aspect-square rounded-circle bg-g block scale-50"></div>
                </div>
                3 days ago
              </div>

              {/* Title */}
              <p className="text-text-primary break-words md:article-h5 article-h5">
                Định giá Base trước thềm TGE - Cuộc chơi Layer 2 kết thúc (P.2)
              </p>

              {/* READ + ACTIONS */}
              <div className="h-400 items-center justify-between mt-150 flex">
                <div className="flex items-center">
                  <div className="box-border badge flex w-fit items-center justify-center rounded-circle border-0125 px-100 py-0125 border-badge-labeled-neutral-border bg-badge-labeled-neutral-background h-300 text-text-primary my-050 whitespace-nowrap">
                    <span className="ui-text-small text-badge-labeled-neutral-text">
                      13 min read
                    </span>
                  </div>
                </div>

                <div className="flex items-center">
                  <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 bg-button-ghost-background p-100 border-transparent">
                    <i className="ab-icon text-button-ghost-icon text-size-800 mr-0 ab-bookmark_outlined"></i>
                  </button>

                  <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 bg-button-ghost-background p-100 border-transparent">
                    <i className="ab-icon text-button-ghost-icon text-size-800 mr-0 ab-link"></i>
                  </button>
                </div>
              </div>
            </div>
          </a>
          <div className="flex flex-wrap">
            <div className="w-full s640:w-1/2 s1180:w-1/4">
              <a href="/phan-tich-base">
                <div
                  id="p67nlcb467xgj2hg"
                  draggable={false}
                  className="transition-all duration-300 bg-background lg:hover:bg-background-hovered article-vertical select-none px-200 py-300 md:px-300"
                >
                  {/* IMAGE */}
                  <picture className="relative mb-200 block">
                    <img
                      alt="phân tích base"
                      fetchPriority="high"
                      loading="eager"
                      width={600}
                      height={400}
                      decoding="async"
                      data-nimg="1"
                      className="object-cover rounded-050 aspect-3-2 w-full rounded-050"
                      sizes="100vw"
                      src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Fposts%2Fp67nlcb467xgj2hg%2Ffrchdz1bn6o7ale09m7bwji26lr6983e%2Fphan-tich-base.jpeg&w=3840&q=75"
                      style={{ color: "transparent" }}
                    />
                  </picture>

                  {/* AUTHOR + DATE */}
                  <div className="ui-text-small text-text-secondary min-h-300 flex-wrap items-center mb-100 flex">
                    <div>
                      <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded="false"
                      >
                        <div className="flex items-center ui-text-x-small md:ui-text-small text-text-primary">
                          {/* Avatar Stack */}
                          <div className="mr-100 flex items-center -space-x-2">
                            {/* Avatar 1 */}
                            <div className="aspect-square relative z-2 ab-avatar-people ab-avatar-size-24 ring-2 ring-background">
                              <img
                                alt="avatar"
                                loading="lazy"
                                width={32}
                                height={32}
                                decoding="async"
                                data-nimg="1"
                                className="avatar-img aspect-square w-full object-cover"
                                sizes="24px"
                                src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fuserdata%2Fusrodknlsjebyuc3z1srbebz84nxn8gu%2Fprofile-pictures%2Ff4589433p263lg3v7es3eqejchz4ajch%2Fimg_2216.jpeg&w=3840&q=50"
                              />
                            </div>

                            {/* Avatar 2 */}
                            <div className="aspect-square relative z-1 ab-avatar-people ab-avatar-size-24 ring-2 ring-background">
                              <img
                                alt="avatar"
                                loading="lazy"
                                width={32}
                                height={32}
                                decoding="async"
                                data-nimg="1"
                                className="avatar-img aspect-square w-full object-cover"
                                sizes="24px"
                                src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fuserdata%2Fusrzihar2uey9sjefrz1xtywijisyagp%2Fprofile-pictures%2Ffggd9ofu7867do4ff8wond9omarh9iir%2F288930474_3078241535821095_8640745413739969681_n.jpg&w=3840&q=50"
                              />
                            </div>

                            {/* Avatar 3 */}
                            <div className="aspect-square relative z-0 ab-avatar-people ab-avatar-size-24 ring-2 ring-background">
                              <img
                                alt="avatar"
                                loading="lazy"
                                width={32}
                                height={32}
                                decoding="async"
                                data-nimg="1"
                                className="avatar-img aspect-square w-full object-cover"
                                sizes="24px"
                                src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Fchannel%2Fchnbzaa92ook5tnj%2Ffuyvacrzjs2gap74gp5ulvwf5g1i25zr%2Fupside-logo.png&w=3840&q=50"
                              />
                            </div>
                          </div>
                          Multi Author
                        </div>
                      </button>
                    </div>
                    {/* Dot */}
                    <div className="m-050 flex items-center justify-center h-100 aspect-square">
                      <div className="w-100 aspect-square rounded-circle bg-g block scale-50"></div>
                    </div>
                    4 days ago
                  </div>

                  {/* TITLE */}
                  <p className="text-text-primary break-words md:article-h5 article-h5">
                    Base đã đạt “giới hạn” - Chiến lược tiếp theo là gì? (P.1)
                  </p>

                  {/* DESCRIPTION (desktop only) */}
                  <div className="mt-100 md:block hidden">
                    <span className="article-text-x-small break-words line-clamp-3 text-text-secondary">
                      Người đứng đầu Base vừa ra mắt JESSE token, hệ sinh thái
                      Base cũng rục rịch quay trở lại. Chiến lược tiếp theo của
                      Base là gì?
                    </span>
                  </div>

                  {/* FOOTER ROW */}
                  <div className="h-400 items-center justify-between mt-150 flex">
                    {/* READ TIME */}
                    <div className="flex items-center">
                      <div className="box-border badge flex w-fit items-center justify-center rounded-circle border-0125 px-100 py-0125 border-badge-labeled-neutral-border bg-badge-labeled-neutral-background h-300 text-text-primary my-050 whitespace-nowrap">
                        <span className="ui-text-small text-badge-labeled-neutral-text">
                          15 min read
                        </span>
                      </div>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="flex items-center">
                      {/* SAVE */}
                      <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible mr-150">
                        <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed border-0125 border-transparent p-100">
                          <i className="ab-icon text-button-ghost-icon text-size-800 mr-0 ab-bookmark_outlined"></i>
                        </button>

                        {/* Tooltip */}
                        <div className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 transition-transform ease-linear rounded-050 border border-tooltip-background bg-tooltip-background text-tooltip-text mb-150 bottom-100% translate-y-100 lg:group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2">
                          Save
                          <div
                            className="tooltip-arrow"
                            data-popper-arrow="true"
                          ></div>
                        </div>
                      </div>

                      {/* COPY LINK */}
                      <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible">
                        <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed border-0125 border-transparent p-100">
                          <i className="ab-icon text-button-ghost-icon text-size-800 mr-0 ab-link"></i>
                        </button>

                        {/* Tooltip */}
                        <div className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 transition-transform ease-linear rounded-050 border border-tooltip-background bg-tooltip-background text-tooltip-text mb-150 bottom-100% translate-y-100 lg:group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2">
                          Copy link
                          <div
                            className="tooltip-arrow"
                            data-popper-arrow="true"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full s640:w-1/2 s1180:w-1/4">
              <a href="/phan-tich-base">
                <div
                  id="p67nlcb467xgj2hg"
                  draggable={false}
                  className="transition-all duration-300 bg-background lg:hover:bg-background-hovered article-vertical select-none px-200 py-300 md:px-300"
                >
                  {/* IMAGE */}
                  <picture className="relative mb-200 block">
                    <img
                      alt="phân tích base"
                      fetchPriority="high"
                      loading="eager"
                      width={600}
                      height={400}
                      decoding="async"
                      data-nimg="1"
                      className="object-cover rounded-050 aspect-3-2 w-full rounded-050"
                      sizes="100vw"
                      src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Fposts%2Fp67nlcb467xgj2hg%2Ffrchdz1bn6o7ale09m7bwji26lr6983e%2Fphan-tich-base.jpeg&w=3840&q=75"
                      style={{ color: "transparent" }}
                    />
                  </picture>

                  {/* AUTHOR + DATE */}
                  <div className="ui-text-small text-text-secondary min-h-300 flex-wrap items-center mb-100 flex">
                    <div>
                      <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded="false"
                      >
                        <div className="flex items-center ui-text-x-small md:ui-text-small text-text-primary">
                          {/* Avatar Stack */}
                          <div className="mr-100 flex items-center -space-x-2">
                            {/* Avatar 1 */}
                            <div className="aspect-square relative z-2 ab-avatar-people ab-avatar-size-24 ring-2 ring-background">
                              <img
                                alt="avatar"
                                loading="lazy"
                                width={32}
                                height={32}
                                decoding="async"
                                data-nimg="1"
                                className="avatar-img aspect-square w-full object-cover"
                                sizes="24px"
                                src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fuserdata%2Fusrodknlsjebyuc3z1srbebz84nxn8gu%2Fprofile-pictures%2Ff4589433p263lg3v7es3eqejchz4ajch%2Fimg_2216.jpeg&w=3840&q=50"
                              />
                            </div>

                            {/* Avatar 2 */}
                            <div className="aspect-square relative z-1 ab-avatar-people ab-avatar-size-24 ring-2 ring-background">
                              <img
                                alt="avatar"
                                loading="lazy"
                                width={32}
                                height={32}
                                decoding="async"
                                data-nimg="1"
                                className="avatar-img aspect-square w-full object-cover"
                                sizes="24px"
                                src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fuserdata%2Fusrzihar2uey9sjefrz1xtywijisyagp%2Fprofile-pictures%2Ffggd9ofu7867do4ff8wond9omarh9iir%2F288930474_3078241535821095_8640745413739969681_n.jpg&w=3840&q=50"
                              />
                            </div>

                            {/* Avatar 3 */}
                            <div className="aspect-square relative z-0 ab-avatar-people ab-avatar-size-24 ring-2 ring-background">
                              <img
                                alt="avatar"
                                loading="lazy"
                                width={32}
                                height={32}
                                decoding="async"
                                data-nimg="1"
                                className="avatar-img aspect-square w-full object-cover"
                                sizes="24px"
                                src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Fchannel%2Fchnbzaa92ook5tnj%2Ffuyvacrzjs2gap74gp5ulvwf5g1i25zr%2Fupside-logo.png&w=3840&q=50"
                              />
                            </div>
                          </div>
                          Multi Author
                        </div>
                      </button>
                    </div>
                    {/* Dot */}
                    <div className="m-050 flex items-center justify-center h-100 aspect-square">
                      <div className="w-100 aspect-square rounded-circle bg-g block scale-50"></div>
                    </div>
                    4 days ago
                  </div>

                  {/* TITLE */}
                  <p className="text-text-primary break-words md:article-h5 article-h5">
                    Base đã đạt “giới hạn” - Chiến lược tiếp theo là gì? (P.1)
                  </p>

                  {/* DESCRIPTION (desktop only) */}
                  <div className="mt-100 md:block hidden">
                    <span className="article-text-x-small break-words line-clamp-3 text-text-secondary">
                      Người đứng đầu Base vừa ra mắt JESSE token, hệ sinh thái
                      Base cũng rục rịch quay trở lại. Chiến lược tiếp theo của
                      Base là gì?
                    </span>
                  </div>

                  {/* FOOTER ROW */}
                  <div className="h-400 items-center justify-between mt-150 flex">
                    {/* READ TIME */}
                    <div className="flex items-center">
                      <div className="box-border badge flex w-fit items-center justify-center rounded-circle border-0125 px-100 py-0125 border-badge-labeled-neutral-border bg-badge-labeled-neutral-background h-300 text-text-primary my-050 whitespace-nowrap">
                        <span className="ui-text-small text-badge-labeled-neutral-text">
                          15 min read
                        </span>
                      </div>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="flex items-center">
                      {/* SAVE */}
                      <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible mr-150">
                        <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed border-0125 border-transparent p-100">
                          <i className="ab-icon text-button-ghost-icon text-size-800 mr-0 ab-bookmark_outlined"></i>
                        </button>

                        {/* Tooltip */}
                        <div className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 transition-transform ease-linear rounded-050 border border-tooltip-background bg-tooltip-background text-tooltip-text mb-150 bottom-100% translate-y-100 lg:group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2">
                          Save
                          <div
                            className="tooltip-arrow"
                            data-popper-arrow="true"
                          ></div>
                        </div>
                      </div>

                      {/* COPY LINK */}
                      <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible">
                        <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed border-0125 border-transparent p-100">
                          <i className="ab-icon text-button-ghost-icon text-size-800 mr-0 ab-link"></i>
                        </button>

                        {/* Tooltip */}
                        <div className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 transition-transform ease-linear rounded-050 border border-tooltip-background bg-tooltip-background text-tooltip-text mb-150 bottom-100% translate-y-100 lg:group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2">
                          Copy link
                          <div
                            className="tooltip-arrow"
                            data-popper-arrow="true"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mb-500">
          <LatestPostsHeader title="Mới Nhất" moreHref="/latest" />
          <LatestPostsSlider />
        </div>
      </div>
    </>
  );
}
