"use client";

export default function LearnPage() {

  const categories = [
    "Người mới bắt đầu",
    "Kiến thức cơ bản",
    "Airdrop",
    "Kinh nghiệm",
    "Trading",
    "Kinh tế - Tài chính",
    "Coin & Token",
    "NFT",
    "Gaming",
    "Web3",
    "AI",
    "Layer 2",
  ];

  // ==========================
  // 🔥 DATA: CHIPS TRONG SECTION
  // ==========================
  const chips = [
    "Lưu trữ",
    "Bảo mật",
    "Mua bán",
    "Sàn giao dịch",
    "Công cụ",
    "Đầu tư Crypto",
    "Thuật ngữ Crypto",
    "Thêm mạng",
  ];

  // ==========================
  // 🔥 DATA: POSTS (CARD GRID)
  // ==========================
  const posts = [
    {
      id: "pcxv1",
      href: "/ban-la-ai-trong-thi-truong-crypto",
      title: "Bạn là ai trong thị trường Crypto? Hãy bắt đầu đúng đắn!",
      desc: "Bài viết này dành cho bạn! Dù cho bạn có bắt đầu từ đâu, dù bạn đã tham gia thị trường crypto bao lâu, đồng hành cùng mình nhé!",
      thumb:
        "/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Fposts%2Fpcxv1gyzettkd0nb%2Ff0fdmus00us3ayatjrb8f5u519s3zket%2F240930-thumbweb-c98-ban-la-ai-trong-thi-truong-crypto.jpg&w=3840&q=75",
      avatar:
        "/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fuserdata%2Fusr9580exg5m50m04fo1iskezbg3s5nt%2Fprofile-pictures%2Ffk49yv2ifvrm1tgz9wtzk9c0fe8cktvf%2Fava.jpeg&w=3840&q=50",
      author: "trangtran.c98",
      date: "Nov 15 2024",
      readTime: "17 min read",
    },
    {
      id: "pcxv2",
      href: "/ban-la-ai-trong-thi-truong-crypto",
      title: "Bạn là ai trong thị trường Crypto? Hãy bắt đầu đúng đắn!",
      desc: "Bài viết này dành cho bạn! Dù cho bạn có bắt đầu từ đâu, dù bạn đã tham gia thị trường crypto bao lâu, đồng hành cùng mình nhé!",
      thumb:
        "/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Fposts%2Fpcxv1gyzettkd0nb%2Ff0fdmus00us3ayatjrb8f5u519s3zket%2F240930-thumbweb-c98-ban-la-ai-trong-thi-truong-crypto.jpg&w=3840&q=75",
      avatar:
        "/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fuserdata%2Fusr9580exg5m50m04fo1iskezbg3s5nt%2Fprofile-pictures%2Ffk49yv2ifvrm1tgz9wtzk9c0fe8cktvf%2Fava.jpeg&w=3840&q=50",
      author: "trangtran.c98",
      date: "Nov 15 2024",
      readTime: "17 min read",
    },
    {
      id: "pcxv3",
      href: "/ban-la-ai-trong-thi-truong-crypto",
      title: "Bạn là ai trong thị trường Crypto? Hãy bắt đầu đúng đắn!",
      desc: "Bài viết này dành cho bạn! Dù cho bạn có bắt đầu từ đâu, dù bạn đã tham gia thị trường crypto bao lâu, đồng hành cùng mình nhé!",
      thumb:
        "/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Fposts%2Fpcxv1gyzettkd0nb%2Ff0fdmus00us3ayatjrb8f5u519s3zket%2F240930-thumbweb-c98-ban-la-ai-trong-thi-truong-crypto.jpg&w=3840&q=75",
      avatar:
        "/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fuserdata%2Fusr9580exg5m50m04fo1iskezbg3s5nt%2Fprofile-pictures%2Ffk49yv2ifvrm1tgz9wtzk9c0fe8cktvf%2Fava.jpeg&w=3840&q=50",
      author: "trangtran.c98",
      date: "Nov 15 2024",
      readTime: "17 min read",
    },
  ];

  return (
    <>
      {/* ===================== HERO ===================== */}
      <div className="h-h400 bg-background-skeleton relative overflow-hidden">
        <div className="bg-blk-a-50 z-1 absolute h-full w-full"></div>

        <div className="h-h400 w-full relative">
          <img
            alt="portal"
            fetchPriority="high"
            decoding="async"
            data-nimg="fill"
            className="h-full md:h-auto w-full object-cover"
            sizes="100vw"
            srcSet="
        /_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Flayout%2Flzrbv0qyrjwg%2Ff3gijq7khgy04eatyiwiwlvn2tz8u0dk%2Fc98-ins-thumbnail-22-.jpg&w=640&q=75 640w,
        /_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Flayout%2Flzrbv0qyrjwg%2Ff3gijq7khgy04eatyiwiwlvn2tz8u0dk%2Fc98-ins-thumbnail-22-.jpg&w=750&q=75 750w,
        /_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Flayout%2Flzrbv0qyrjwg%2Ff3gijq7khgy04eatyiwiwlvn2tz8u0dk%2Fc98-ins-thumbnail-22-.jpg&w=828&q=75 828w,
        /_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Flayout%2Flzrbv0qyrjwg%2Ff3gijq7khgy04eatyiwiwlvn2tz8u0dk%2Fc98-ins-thumbnail-22-.jpg&w=1080&q=75 1080w,
        /_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Flayout%2Flzrbv0qyrjwg%2Ff3gijq7khgy04eatyiwiwlvn2tz8u0dk%2Fc98-ins-thumbnail-22-.jpg&w=1200&q=75 1200w,
        /_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Flayout%2Flzrbv0qyrjwg%2Ff3gijq7khgy04eatyiwiwlvn2tz8u0dk%2Fc98-ins-thumbnail-22-.jpg&w=1920&q=75 1920w,
        /_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Flayout%2Flzrbv0qyrjwg%2Ff3gijq7khgy04eatyiwiwlvn2tz8u0dk%2Fc98-ins-thumbnail-22-.jpg&w=2048&q=75 2048w,
        /_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Flayout%2Flzrbv0qyrjwg%2Ff3gijq7khgy04eatyiwiwlvn2tz8u0dk%2Fc98-ins-thumbnail-22-.jpg&w=3840&q=75 3840w
      "
            src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Flayout%2Flzrbv0qyrjwg%2Ff3gijq7khgy04eatyiwiwlvn2tz8u0dk%2Fc98-ins-thumbnail-22-.jpg&w=3840&q=75"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: 0,
              color: "transparent",
            }}
          />
        </div>

        <div
          data-theme="dark"
          className="max-w-80% w-w960 z-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
        >
          <h1 className="text-text-primary ui-h1-emphasis text-center mb-150">
            Learn - Thư viện kiến thức Crypto
          </h1>

          <span className="text-text-secondary article-text-x-small text-center mb-500">
            Lộ trình kiến thức Crypto cần trang bị trước khi bước vào thị
            trường: Blockchain, tiền mã hóa và kinh nghiệm đầu tư Crypto.
          </span>

          <div className="flex flex-col max-w-w468 w-full">
            <label
              htmlFor="rdsckg"
              className="h-600 bg-background flex items-center py-150 px-200 rounded-050 border-0125 border-border transition-all duration-200 focus-within:border-cbr-50 focus-within:shadow-outline-primary cursor-text rounded-circle"
            >
              <i className="ab-icon !not-italic mr-150 flex-none transition-all duration-200 text-size-800 text-icon ab-search"></i>

              <input
                data-theme="dark"
                placeholder="Search in portal"
                id="rdsckg"
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

      {/* ===================== TOP CATEGORIES ===================== */}
      <div className="bg-background sticky top-0 z-10">
        <div className="py-200 flex w-full justify-center">
          <div className="max-w-w1440 w-full">
            <div className="flex overflow-y-auto no-scrollbar px-150">
              {categories.map((item, i) => (
                <div key={i} className="py-100 px-150 min-w-max">
                  <span className="ui-text-medium-emphasis text-text-subtlest hover:text-text-primary cursor-pointer">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-divider h-0125 w-full"></div>
      </div>
      {/* ===================== SECTION ===================== */}
      <div className="w-full max-w-w1440 mx-auto">
        <div>
          {" "}
          <div className="pt-300 py-500 md:pt-500 md:py-1000">
            <div className="px-200 md:px-300 py-200">
              <div className="flex items-center">
                {" "}
                <span className="ui-text-large-emphasis md:ui-h3-emphasis text-text-primary flex-grow">
                  Người mới bắt đầu
                </span>
                <a href="/learn/detail?subCategories=fiE11iq5fvscloB1Yr6Da">
                  <button className="hidden md:flex items-center px-150 py-100 bg-button-ghost-background rounded-050 border-transparent">
                    More
                    <i className="ab-icon ml-100 ab-arrow_right"></i>
                  </button>
                </a>
              </div>
              {/* Chips */}
              <div className="-my-050">
                <div className="flex overflow-x-auto no-scrollbar md:flex-wrap">
                  {chips.map((chip, i) => (
                    <div key={i} className="min-w-max my-050 mr-150">
                      <div className="min-w-600 py-100 px-150 rounded-circle border-0125 border-border-subtle hover:bg-background-hovered cursor-pointer">
                        <span className="text-text-primary">{chip}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Posts */}
          <div className="flex flex-wrap mt-200">
            {posts.map((post) => (
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" key={post.id}>
                <a href={post.href} className="block w-full">
                  <div className="px-200 py-300 md:px-300 bg-background hover:bg-background-hovered transition rounded-050">
                    <picture className="block mb-200">
                      <img
                        src={post.thumb}
                        className="rounded-050 object-cover aspect-3-2 w-full"
                      />
                    </picture>

                    <div className="hidden md:flex items-center text-text-secondary mb-100">
                      <img
                        src={post.avatar}
                        className="w-200 h-200 rounded-circle mr-100"
                      />
                      <span>{post.author}</span>
                      <div className="mx-100 w-50 h-50 rounded-circle bg-g scale-50"></div>
                      {post.date}
                    </div>

                    <p className="text-text-primary article-h5">{post.title}</p>

                    <div className="hidden md:block mt-100">
                      <span className="article-text-x-small text-text-secondary line-clamp-3">
                        {post.desc}
                      </span>
                    </div>

                    <div className="hidden md:flex justify-between items-center mt-150">
                      <div className="badge border px-100 py-0125 rounded-circle text-text-primary">
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="bg-divider h-0125 w-full mt-300"></div>
        </div>
      </div>
    </>
  );
}
