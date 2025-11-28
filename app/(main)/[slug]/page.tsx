import "./page.css";
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}
export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div className="group/postDetail bg-background">
      <div className="w-full max-w-w1280 mx-auto flex flex-col justify-center pt-200 lg:pt-300 pb-550 md:pb-500">
        <div className="w-full max-w-w680 px-200 md:px-0 mx-auto">
          {/* Top row: Channel + Buttons */}
          <div className="flex items-center w-full max-w-w680 ml-auto justify-between">
            {/* Channel box */}
            <div className="block abc-hide-description tag-channel abc-size-small abc-type-shrink abc-show-btn-follow">
              <div className="flex items-center justify-between overflow-hidden">
                <div className="flex items-center lg:hover:cursor-pointer">
                  <span className="abc-name text-text-primary line-clamp-1">
                    Upside
                  </span>
                </div>

                {/* Follow button */}
                <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-tertiary-background lg:hover:bg-button-tertiary-background-hovered active:bg-button-tertiary-background-pressed border-0125 border-button-tertiary-border py-050 px-100 ml-200">
                  <span className="text-button-tertiary-text button-text-medium">
                    Follow
                  </span>

                  <div className="flex items-center justify-center -z-1 opacity-0 absolute inset-0 ab-btn-loading-wrapper">
                    <div className="relative animate-spin flex items-center justify-center w-200 h-200">
                      <div className="h-050 w-050 rounded-circle absolute left-50% -translate-x-50% top-0 bg-btn-loading-transparent"></div>
                      <div
                        style={{
                          padding: "4px",
                          WebkitMask:
                            "conic-gradient(#0000 45deg, #000), linear-gradient(#000 0 0) content-box",
                          mask: "conic-gradient(#0000 45deg, #000), linear-gradient(#000 0 0) content-box",
                          WebkitMaskComposite: "source-out",
                          maskComposite: "subtract",
                        }}
                        className="w-full h-full rounded-circle border-box bg-btn-loading-transparent"
                      ></div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Save + Copy Link buttons */}
            <div className="flex items-center ml-100 h-500">
              {/* Save button */}
              <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible mr-100">
                <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered border-transparent p-100">
                  <i className="ab-icon text-button-ghost-icon text-size-800 ab-bookmark_outlined"></i>
                </button>

                <div className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 rounded-050 border border-tooltip-background bg-tooltip-background text-tooltip-text shadow-elevation-none mt-150 top-100% -translate-y-100 left-1/2 -translate-x-1/2">
                  Save
                  <div className="tooltip-arrow" data-popper-arrow="true"></div>
                </div>
              </div>

              {/* Copy link */}
              <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible">
                <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered border-transparent p-100">
                  <i className="ab-icon text-button-ghost-icon text-size-800 ab-link"></i>
                </button>

                <div className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 rounded-050 border border-tooltip-background bg-tooltip-background text-tooltip-text shadow-elevation-none mt-150 top-100% -translate-y-100 left-1/2 -translate-x-1/2">
                  Copy link
                  <div className="tooltip-arrow" data-popper-arrow="true"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="article-h3 text-text-primary text-left md:article-h2 mt-500">
            Bạn là ai trong thị trường Crypto? Hãy bắt đầu đúng đắn!
          </h1>

          <div className="bg-divider-subtle h-0125 w-full mt-500"></div>

          {/* Description */}
          <div className="article-text-small md:article-text-large whitespace-pre-wrap text-text-subtlest py-300 text-left">
            Bài viết này dành cho bạn! Dù cho bạn có bắt đầu từ đâu, dù bạn đã
            tham gia thị trường crypto bao lâu, đồng hành cùng mình nhé!
          </div>

          <div className="bg-divider-subtle h-0125 w-full"></div>

          {/* Author + Date + Read time */}
          <div className="flex flex-col md:flex-row md:items-center mt-450 justify-between">
            {/* Author */}
            <div className="flex items-center h-max ui-text-small text-text-primary">
              <div className="aspect-square ab-avatar-people ab-avatar-size-24 flex-none mr-100">
                <img
                  alt="Avatar"
                  loading="lazy"
                  width="32"
                  height="32"
                  className="avatar-img aspect-square w-full object-cover"
                  src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fuserdata%2Fusr9580exg5m50m04fo1iskezbg3s5nt%2Fprofile-pictures%2Ffk49yv2ifvrm1tgz9wtzk9c0fe8cktvf%2Fava.jpeg&w=3840&q=50"
                />
              </div>

              <div className="line-clamp-1 break-all max-w-w160 ui-text-x-small md:ui-text-small">
                <span>trangtran.c98</span>
              </div>
            </div>

            {/* Published date + read time */}
            <div className="flex flex-row mt-200 md:mt-0 ui-text-small text-text-subtlest items-center justify-between">
              <div className="flex items-center">
                <span>Published Nov 15 2024</span>
              </div>

              <div className="mx-050 h-100 aspect-square hidden md:flex items-center justify-center">
                <div className="w-100 aspect-square rounded-circle bg-g block scale-50"></div>
              </div>

              <div className="flex items-center">
                <div className="badge flex items-center justify-center rounded-circle border-0125 px-100 py-0125 border-badge-labeled-neutral-border bg-badge-labeled-neutral-background h-300 text-text-primary whitespace-nowrap">
                  <span className="ui-text-small text-badge-labeled-neutral-text">
                    17 min read
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <picture className="overflow-hidden relative w-full max-w-w960 mx-auto mt-600">
          <img
            alt="bạn là ai trong thị trường crypto"
            draggable="false"
            fetchPriority="high"
            width={640}
            height={420}
            decoding="async"
            className="select-none w-full h-auto object-cover aspect-3-2 md:rounded-050"
            style={{ color: "transparent" }}
            src="https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/posts/pcxv1gyzettkd0nb/f9caekp0yf4xteh999rxk7j8sna64is9/nguoi-moi-trong-thi-truong-crypto.jpg"
          />
        </picture>
      </div>
      <div id="detail-content">
        <p
          id="T-JOGk6tWo"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Chào bạn, nếu bạn đang đứng trước ngưỡng cửa của thị trường crypto,
          chắc hẳn bạn đã từng có những cảm xúc phấn khích, hoang mang và cả kỳ
          vọng về cơ hội mà nó mang lại. Bạn có thể đã nghe về những người{" "}
          <b>“đổi đời"</b> nhờ đầu tư vào Bitcoin, Ethereum hoặc thậm chí là
          những đồng memecoin như Shiba Inu. Điều đó có lẽ tạo động lực để bạn ở
          đây!
        </p>

        <p
          id="GwENkCejt3"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Nhưng khoan đã, bạn đã thực sự hiểu mình đang là ai trong thị trường
          crypto? Bạn có biết rằng mỗi nhóm người tham gia thị trường đều có mục
          tiêu, động cơ và cách tiếp cận khác nhau? Bằng cách nhận diện bản
          thân, bạn sẽ biết rõ mình cần gì, bạn nên bắt đầu từ đâu và làm thế
          nào để tránh những rủi ro không đáng có.
        </p>

        <p
          id="3_UR-bNibU"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Để bắt đầu hành trình từ 0 đến 1, hãy đồng hành cùng mình trong bài
          viết này nhé!
        </p>

        <figure
          id="RPSkIqajND"
          className="px-200 s704:px-0 mt-250 md:mt-300 overflow-hidden mx-auto w-full max-w-w680"
        >
          <picture>
            <img
              alt="hành trình crypto"
              fetchPriority="high"
              width={640}
              height={420}
              decoding="async"
              className="object-cover select-none w-full md:hover:cursor-pointer rounded-050"
              style={{ color: "transparent" }}
              src="https://files.amberblocks.com/media/chnbzaa92ook5tnj/posts/pcxv1gyzettkd0nb/frqir0500orn8yr32tl3jq2vws88vadt/hanh-trinh-van-dam.jpg"
            />
          </picture>

          <figcaption className="w-full">
            <div className="article-media-caption-small md:article-media-caption-medium text-right mx-auto mt-100 w-full max-w-w680 text-text-subtlest">
              “Thiên lý chi hành, thủy vu túc hạ” - Hành trình vạn dặm bắt đầu
              từ một bước chân
            </div>
          </figcaption>
        </figure>

        <h2
          id="mcXGE98aXl"
          style={{ textAlign: "left" }}
          className="article-h3 px-200 s704:px-0 md:mt-300 text-text-primary mx-auto w-full max-w-w680 mt-200"
        >
          Bạn là ai?
        </h2>

        <p
          id="yNxXVldGXK"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Trước khi bạn lao vào{" "}
          <a href="https://coin98.net/cryptocurrency-la-gi" target="_blank">
            thị trường crypto
          </a>
          , hãy dừng lại và tự hỏi bản thân:{" "}
          <b>
            "Bạn là ai trong thị trường này? Động lực bắt đầu của bạn là gì?"
          </b>
        </p>

        <p
          id="3CHK-odQS0"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Động lực của bạn sẽ điều hướng hành trình của bạn trong thế giới
          crypto đầy biến động. Việc hiểu rõ mục tiêu và động lực thực sự sẽ
          giúp bạn có cái nhìn rõ ràng, tránh việc hành động mù quáng, chạy theo
          đám đông hoặc bị cuốn vào những cơn sốt giá đầy rủi ro.
        </p>

        <ul className="px-200 s704:px-0 overflow-hidden mx-auto w-full max-w-w680">
          <li className="pl-0 md:pl-0 mt-250 md:mt-300">
            <div className="rounded-050 overflow-hidden flex items-start">
              <div className="relative min-w-500 h-300 md:h-400">
                <span className="inline-block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-100 h-100 rounded-circle bg-background-inverse" />
              </div>
              <span
                className="ab-list article-text-x-small md:article-text-medium text-text-primary"
                style={{ wordBreak: "break-word" }}
              >
                Bạn có đang bị thôi thúc bởi mong muốn làm giàu nhanh? Có phải
                động lực của bạn là những câu chuyện về những người đã kiếm được
                hàng triệu đô trong một đêm nhờ crypto?
              </span>
            </div>
          </li>

          <li className="pl-0 md:pl-0 mt-250 md:mt-300">
            <div className="rounded-050 overflow-hidden flex items-start">
              <div className="relative min-w-500 h-300 md:h-400">
                <span className="inline-block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-100 h-100 rounded-circle bg-background-inverse" />
              </div>
              <span
                className="ab-list article-text-x-small md:article-text-medium text-text-primary"
                style={{ wordBreak: "break-word" }}
              >
                Bạn có thấy hứng thú với công nghệ blockchain và sự thay đổi mà
                nó có thể mang lại cho thế giới? Bạn có muốn tham gia và đóng
                góp vào sự phát triển của công nghệ này?
              </span>
            </div>
          </li>

          <li className="pl-0 md:pl-0 mt-250 md:mt-300">
            <div className="rounded-050 overflow-hidden flex items-start">
              <div className="relative min-w-500 h-300 md:h-400">
                <span className="inline-block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-100 h-100 rounded-circle bg-background-inverse" />
              </div>
              <span
                className="ab-list article-text-x-small md:article-text-medium text-text-primary"
                style={{ wordBreak: "break-word" }}
              >
                Bạn có khao khát sự tự do tài chính, mong muốn tìm kiếm một giải
                pháp đầu tư dài hạn để xây dựng sự ổn định cho tương lai của
                mình và gia đình?
              </span>
            </div>
          </li>

          <li className="pl-0 md:pl-0 mt-250 md:mt-300">
            <div className="rounded-050 overflow-hidden flex items-start">
              <div className="relative min-w-500 h-300 md:h-400">
                <span className="inline-block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-100 h-100 rounded-circle bg-background-inverse" />
              </div>
              <span
                className="ab-list article-text-x-small md:article-text-medium text-text-primary"
                style={{ wordBreak: "break-word" }}
              >
                Hoặc bạn chỉ đơn giản là tò mò, muốn khám phá và hiểu về thế
                giới tài chính phi tập trung, học hỏi và tích lũy kiến thức?
              </span>
            </div>
          </li>
        </ul>

        <p
          id="wGJ8V6Vt63"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Nếu bạn không thuộc nhóm nào, điều đó không sao cả! Trên đây chỉ là
          những ví dụ nổi bật nhất để giúp bạn tự định hình bản thân mình.
        </p>

        <p
          id="ykOBt2fNVw"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Nếu bạn mong muốn tất cả, vậy tốt rồi! Bạn đã biết rõ nhu cầu của
          mình, chúng ta cùng đi tìm cách giải quyết.
        </p>

        <figure
          id="WdDpD_Hg-v"
          className="px-200 s704:px-0 mt-250 md:mt-300 overflow-hidden mx-auto w-full max-w-w680"
        >
          <picture>
            <img
              alt="bạn là ai trong crypto"
              fetchPriority="high"
              width={640}
              height={420}
              decoding="async"
              className="object-cover select-none w-full md:hover:cursor-pointer rounded-050"
              style={{ color: "transparent" }}
              src="https://files.amberblocks.com/media/chnbzaa92ook5tnj/posts/pcxv1gyzettkd0nb/fdws7l7nba64etwql5w4c7qn1n3s2dj6/dau-tu-tu-co-phieu.jpg"
            />
          </picture>
        </figure>

        <p
          id="nVBXuoxpu7"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          <b>
            <i>Vậy, câu hỏi bạn là ai được dùng để làm gì? </i>
          </b>
        </p>

        <p
          id="CrnW8cK80L"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Câu trả lời sẽ quyết định con đường bạn đi trong thị trường crypto.
          Không có một câu trả lời đúng hay sai – điều quan trọng là bạn cần
          biết mình thuộc nhóm nào. Từ đó, chúng ta cùng thiết lập kế hoạch, mục
          tiêu và chiến lược phù hợp với bản thân.
        </p>

        <p
          id="n4r9nQ9BFD"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          <b>Crypto không phải là nơi để lao vào một cách ngẫu hứng</b>, mà là
          một thị trường yêu cầu sự hiểu biết, kiên nhẫn và chiến lược rõ ràng.
          Crypto không chỉ là cơ hội, mà còn là thử thách. Hãy tự hỏi chính
          mình, để tìm ra "mình là ai trong thị trường này".
        </p>

        <p
          id="J1rGX0HMqn"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          <b>
            <i>Và, tại sao bạn ở đây?</i>
          </b>
        </p>

        <h2
          id="qeq-6ZrPuY"
          style={{ textAlign: "left" }}
          className="article-h3 px-200 s704:px-0 md:mt-300 text-text-primary mx-auto w-full max-w-w680 mt-200"
        >
          Tại sao bạn ở đây?
        </h2>

        <p
          id="KUGlI_JNZE"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Hãy thành thật với chính mình. Tại sao bạn muốn bước vào thị trường
          crypto?
        </p>

        <h3
          id="XGIbQ0WFdl"
          style={{ textAlign: "left" }}
          className="article-h4 px-200 s704:px-0 md:mt-300 text-text-primary mx-auto w-full max-w-w680 mt-200"
        >
          “Tôi muốn giàu nhanh"
        </h3>

        <p
          id="k1x53A_AiD"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Một trong những lý do lớn nhất khiến mọi người bị hấp dẫn bởi crypto
          là vì khả năng kiếm lợi nhuận cao trong thời gian ngắn. Đối với nhiều
          người, đặc biệt là thế hệ trẻ, crypto không chỉ là một cơ hội đầu tư
          mà còn là lối tắt đến sự giàu có, nhất là sau khi chứng kiến những câu
          chuyện thành công ngoạn mục.
        </p>

        <p
          id="SQ_SxUnaYV"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Theo thống kê từ Statista (2023), có đến 78% người dùng crypto tham
          gia thị trường với mong muốn kiếm được lợi nhuận cao. Điều này không
          chỉ diễn ra ở các nước phát triển, mà còn rất phổ biến ở các quốc gia
          đang phát triển như Nigeria, nơi 32% người dân sử dụng crypto như một
          phương tiện đầu tư chính.
        </p>

        <p
          id="mZkmUjCCY9"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Theo khảo sát của Finder năm 2022, có đến 21% người Việt Nam tham gia
          thị trường crypto, một con số đáng chú ý trong khu vực Đông Nam Á.
          Giới trẻ Việt ngày càng nhạy bén với{" "}
          <a href="https://coin98.net/blockchain-101" target="_blank">
            công nghệ blockchain
          </a>{" "}
          và những cơ hội mới, không muốn bỏ lỡ những làn sóng thay đổi lớn của
          thị trường.
        </p>

        <figure
          id="jHVrhKzdyl"
          className="px-200 s704:px-0 mt-250 md:mt-300 overflow-hidden mx-auto w-full max-w-w680"
        >
          <picture>
            <img
              alt="erik finman"
              fetchPriority="high"
              width={640}
              height={420}
              decoding="async"
              className="object-cover select-none w-full md:hover:cursor-pointer rounded-050"
              src="https://files.amberblocks.com/media/chnbzaa92ook5tnj/posts/pcxv1gyzettkd0nb/fgzqld4p20sypr1or5e7cnxedbh94uvy/erik-finman-dau-tu-crypto.jpg"
            />
          </picture>
          <figcaption className="w-full">
            <div className="article-media-caption-small md:article-media-caption-medium text-right mx-auto mt-100 w-full max-w-w680 text-text-subtlest">
              Cậu thiếu niên người Đức Erik Finman đã có một con đường đi đến
              thành công thật khác thường.
            </div>
          </figcaption>
        </figure>

        <p
          id="2PYvX7RZXp"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Một ví dụ điển hình là Erik Finman – chàng thanh niên đã đầu tư 1,000
          USD vào Bitcoin năm 2011, khi cậu mới chỉ 12 tuổi. Đến năm 2020, tài
          sản của Finman đã vượt ngưỡng 4 triệu USD nhờ sự bùng nổ của giá
          Bitcoin, biến cậu trở thành một trong những triệu phú trẻ tuổi nhất từ
          crypto. Finman từng chia sẻ: “Bitcoin đã thay đổi cuộc đời tôi. Đó là
          một trong những cơ hội lớn nhất mà bất kỳ người trẻ nào cũng có thể
          chạm tới.”
        </p>

        <h3
          id="tdiFfCQq_j"
          style={{ textAlign: "left" }}
          className="article-h4 px-200 s704:px-0 md:mt-300 text-text-primary mx-auto w-full max-w-w680 mt-200"
        >
          Tôi muốn “tự do tài chính” và nghỉ hưu ở “tuổi đôi mươi”
        </h3>

        <p
          id="uyfy2TYNpf"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Nhiều người tham gia vào crypto không chỉ vì lợi nhuận trước mắt mà
          còn vì mong muốn đạt được{" "}
          <a href="https://coin98.net/tu-do-tai-chinh" target="_blank">
            tự do tài chính
          </a>
          . Họ muốn kiếm tiền mà không phải làm công việc văn phòng từ 9 giờ
          sáng đến 5 giờ chiều, và crypto dường như mang lại cơ hội đó.
        </p>

        <p
          id="aIpX8L3V0P"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Theo khảo sát của Gemini năm 2023, 45% người tham gia crypto với mong
          muốn đạt được tự do tài chính và thoát khỏi công việc truyền thống.
          Trong số đó, hơn 60% là dân văn phòng và người lao động tự do.
        </p>

        <figure
          id="s_Oc9MOlgF"
          className="px-200 s704:px-0 mt-250 md:mt-300 overflow-hidden mx-auto w-full max-w-w680"
        >
          <picture>
            <img
              alt="lợi suất defi"
              fetchPriority="high"
              width={640}
              height={420}
              decoding="async"
              className="object-cover select-none w-full md:hover:cursor-pointer rounded-050"
              src="https://files.amberblocks.com/media/chnbzaa92ook5tnj/posts/pcxv1gyzettkd0nb/f90l9ihbgtvts3221306czgyib83je8t/defi-yield.jpg"
            />
          </picture>
          <figcaption className="w-full">
            <div className="article-media-caption-small md:article-media-caption-medium text-right mx-auto mt-100 w-full max-w-w680 text-text-subtlest">
              Số liệu: De.Fi
            </div>
          </figcaption>
        </figure>

        <p
          id="ywdsvFKw3L"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Nguồn lợi suất trong DeFi thu hút những nhà đầu tư theo xu hướng tạo
          ra nguồn lợi nhuận ổn định và lâu dài.
        </p>

        <p
          id="kkmEDBhly3"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Brandon Quittem, cựu nhân viên văn phòng đã từ bỏ công việc ổn định để
          bước chân vào thị trường crypto. Anh bắt đầu bằng việc{" "}
          <a href="https://coin98.net/staking-la-gi" target="_blank">
            staking
          </a>{" "}
          và{" "}
          <a href="https://coin98.net/yield-farming" target="_blank">
            yield farming
          </a>{" "}
          trên các giao thức DeFi, thu về lợi nhuận đều đặn từ số tài sản nắm
          giữ.
        </p>

        <p
          id="Pdmidr3_76"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Brandon chia sẻ rằng: "Tôi đã không còn phải làm việc toàn thời gian
          kể từ khi bước chân vào crypto. Thu nhập thụ động từ{" "}
          <a href="https://coin98.net/defi-la-gi" target="_blank">
            DeFi
          </a>{" "}
          đã giúp tôi thoát khỏi vòng xoáy công việc truyền thống, mang đến cho
          tôi tự do tài chính và thời gian để theo đuổi những đam mê khác."
        </p>

        <h3
          id="YP484fWbL6"
          style={{ textAlign: "left" }}
          className="article-h4 px-200 s704:px-0 md:mt-300 text-text-primary mx-auto w-full max-w-w680 mt-200"
        >
          Tôi là nhà đầu tư chuyên nghiệp
        </h3>

        <p
          id="wmihLsl27S"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Những nhà đầu tư có kinh nghiệm trong các thị trường tài chính truyền
          thống như chứng khoán, bất động sản cũng đang dần chuyển sang crypto
          với mục đích đa dạng hóa danh mục đầu tư.
        </p>

        <p
          id="9C3OqAZVn5"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          <a href="https://coin98.net/bitcoin-btc-la-gi" target="_blank">
            Bitcoin
          </a>
          , được xem như "vàng kỹ thuật số", đã trở thành công cụ quan trọng
          giúp nhà đầu tư bảo vệ tài sản của mình trước lạm phát. Với số lượng
          giới hạn chỉ 21 triệu đồng coin, Bitcoin không thể bị "in thêm" như{" "}
          <a
            href="https://coin98.net/tien-phap-dinh-fiat-la-gi"
            target="_blank"
          >
            tiền pháp định
          </a>
          , khiến nó trở thành một hàng rào chống lại lạm phát và sự mất giá của
          tiền tệ.
        </p>

        <p
          id="0smsAKJC_y"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Fidelity (2023) báo cáo rằng, hơn 60% nhà đầu tư tài chính truyền
          thống đã bổ sung Bitcoin hoặc Ethereum vào danh mục đầu tư. Họ coi các
          loại tài sản này là một phương tiện để phân tán rủi ro và bảo vệ giá
          trị tài sản trong thời kỳ kinh tế khó khăn.
        </p>

        <p
          id="JxN2F-5JWi"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Paul Tudor Jones, một trong những nhà đầu tư nổi tiếng nhất thế giới,
          đã bổ sung Bitcoin vào danh mục đầu tư của mình để đối phó với lạm
          phát.
        </p>

        <p
          id="k2DBzZd9d6"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Ông nhận xét:{" "}
          <i>
            "Bitcoin là một hàng rào bảo vệ tuyệt vời trước sự mất giá của tiền
            tệ truyền thống. Tôi tin rằng nó sẽ đóng vai trò quan trọng trong
            tương lai của tài chính."
          </i>{" "}
          Paul Tudor Jones không phải là người duy nhất. Elon Musk và nhiều nhà
          đầu tư lớn khác cũng đã công khai sở hữu Bitcoin như một phần trong
          chiến lược phân bổ tài sản của họ.
        </p>

        <p
          id="8XsNJtYJCI"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          <i>
            <b>
              Tìm hiểu:{" "}
              <a href="https://coin98.net/lam-phat-va-bitcoin" target="_blank">
                Bitcoin có phải là lời giải hoàn hảo cho bài toán lạm phát?
              </a>
            </b>
          </i>
        </p>

        <figure
          id="IquKYSQoNj"
          className="px-200 s704:px-0 mt-250 md:mt-300 overflow-hidden mx-auto w-full max-w-w680"
        >
          <picture>
            <img
              alt="paul todor jones"
              fetchPriority="high"
              width={640}
              height={420}
              decoding="async"
              className="object-cover select-none w-full md:hover:cursor-pointer rounded-050"
              src="https://files.amberblocks.com/media/chnbzaa92ook5tnj/posts/pcxv1gyzettkd0nb/fjeex4383q904wm9on2pqg6yukx57pgs/paul-tudor-jones.jpg"
            />
          </picture>
          <figcaption className="w-full">
            <div className="article-media-caption-small md:article-media-caption-medium text-right mx-auto mt-100 w-full max-w-w680 text-text-subtlest">
              Ảnh: CNBC
            </div>
          </figcaption>
        </figure>

        <p
          id="lUUQgG16k8"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Paul Tudor Jones nhấn mạnh trong cuộc phỏng vấn với CNBC về việc ông
          muốn bổ sung Bitcoin vào danh mục đầu tư của bản thân.
        </p>

        <h3
          id="qXVOZr_H30"
          style={{ textAlign: "left" }}
          className="article-h4 px-200 s704:px-0 md:mt-300 text-text-primary mx-auto w-full max-w-w680 mt-200"
        >
          Cơ hội cho Trader - “I'm here for chart"
        </h3>

        <p
          id="JJ2Rg2SyOo"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Trong thị trường crypto, sự biến động mạnh mẽ của giá cả tạo ra cơ hội
          vàng cho các trader – những người không tìm kiếm lợi nhuận dài hạn mà
          thay vào đó, kiếm lời từ các giao dịch ngắn hạn. Với tính chất hoạt
          động 24/7, thị trường crypto khác biệt hoàn toàn so với các thị trường
          truyền thống như chứng khoán. Điều này cho phép các trader tận dụng
          biến động liên tục để tối ưu hóa lợi nhuận, bất kể ngày đêm.
        </p>

        <p
          id="yeEZQKhKHj"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Theo khảo sát của Binance (2023), hơn 40% người dùng crypto là trader
          chuyên nghiệp hoặc giao dịch ngắn hạn. Các nền tảng như Binance
          Futures đã trở thành nơi mà nhiều trader tận dụng công cụ phái sinh và
          đòn bẩy để tối đa lợi nhuận từ những đợt sóng mạnh. Điều này chứng
          minh rằng, cơ hội không thiếu cho những người có kỹ năng.
        </p>

        <h3
          id="r9PupIgs11"
          style={{ textAlign: "left" }}
          className="article-h4 px-200 s704:px-0 md:mt-300 text-text-primary mx-auto w-full max-w-w680 mt-200"
        >
          “I'm here for tech”
        </h3>

        <p
          id="Isx5S0R0ea"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Bên cạnh các yếu tố tài chính, nhiều người tham gia vào thị trường
          crypto đơn giản là vì niềm đam mê công nghệ. Họ thấy được tiềm năng
          của công nghệ blockchain trong việc thay đổi nhiều lĩnh vực như tài
          chính, nghệ thuật và thậm chí cả giải trí.
        </p>

        <p
          id="-JEGVHHHYE"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Theo DappRadar (2023), số lượng người dùng tham gia vào các ứng dụng
          trong thị trường crypto đã tăng trưởng hơn 60% trong năm qua, với hơn
          3 triệu ví hoạt động hàng ngày trên các nền tảng như Ethereum, BNB
          Chain và Solana.
        </p>

        <p
          id="bw6a0OpDRe"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Beeple, một nghệ sĩ kỹ thuật số, đã gây chấn động khi bán tác phẩm NFT
          của mình với giá 69 triệu USD vào năm 2021. Đây là một trong những dấu
          mốc lớn nhất của nghệ thuật kỹ thuật số, mở ra kỷ nguyên mới cho ngành
          sáng tạo.
        </p>

        <p
          id="hlCUwNrQPW"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Không chỉ Beeple, hàng nghìn nghệ sĩ, nhà phát triển và người sáng tạo
          khác cũng đã dấn thân vào thế giới{" "}
          <a href="https://coin98.net/nft-la-gi" target="_blank">
            NFT
          </a>{" "}
          và{" "}
          <a href="https://coin98.net/metaverse-la-gi" target="_blank">
            Metaverse
          </a>
          , nơi họ có thể khai phá những khả năng vô tận mà blockchain mang lại.
        </p>

        <p
          id="mTn4_i3fi6"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Với những người đam mê công nghệ, crypto không đơn thuần là đầu tư –
          đó là một sân chơi công nghệ, một môi trường thử nghiệm cho những ý
          tưởng sáng tạo và đổi mới đột phá.
        </p>

        <div className="px-200 s704:px-0 mt-250 md:mt-300 mx-auto w-full max-w-w680 flex items-center justify-center">
          <div
            className="twitter-tweet twitter-tweet-rendered"
            style={{
              display: "flex",
              maxWidth: "550px",
              width: "100%",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <iframe
              id="twitter-widget-0"
              scrolling="no"
              frameBorder={0}
              allowFullScreen
              style={{
                position: "static",
                visibility: "visible",
                width: "550px",
                height: "305px",
                display: "block",
                flexGrow: 1,
              }}
              title="X Post"
              src="https://platform.twitter.com/embed/Tweet.html?dnt=false&id=1370027970560106497&theme=light"
            />
          </div>
        </div>

        {/* ====== PHẦN 3 ====== */}

        <h2
          id="cUyftnY27p"
          style={{ textAlign: "left" }}
          className="article-h3 px-200 s704:px-0 md:mt-300 text-text-primary mx-auto w-full max-w-w680 mt-200"
        >
          Bạn nên bắt đầu từ đâu?
        </h2>

        <p
          id="k9vyNZW5N0"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Nếu bạn là người mới hoàn toàn và chưa có nhiều kiến thức về thị
          trường crypto, việc đầu tiên bạn không nên làm là đổ tiền vào mua các
          đồng coin chỉ vì chúng đang theo xu hướng. Điều đó có thể hấp dẫn,
          nhưng thị trường crypto không chỉ đem lại tiềm năng lợi nhuận mà còn
          chứa đầy rủi ro nếu bạn không có sự chuẩn bị.
        </p>

        <p
          id="LxvqnLc84c"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Nếu bạn không hẳn là rất mới, bạn đã có kinh nghiệm vài ba tháng, bạn
          đã là trader thành công trong thị trường truyền thống… Dù bạn có là ai
          đi nữa, khi bạn bước chân vào một lĩnh vực
        </p>

        <h3
          id="OXcezfP7hV"
          style={{ textAlign: "left" }}
          className="article-h4 px-200 s704:px-0 md:mt-300 text-text-primary mx-auto w-full max-w-w680 mt-200"
        >
          Đầu tư vào kiến thức – Khoản đầu tư an toàn nhất
        </h3>

        <p
          id="TuKafQfsLc"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Thị trường crypto có tốc độ biến động rất cao, và những người không có
          kiến thức cơ bản thường dễ rơi vào bẫy của các xu hướng ngắn hạn và
          mất tiền. Thậm chí những người chuyên nghiệp và có kinh nghiệm lâu năm
          cũng vẫn rơi vào những chiếc “bẫy” này.
        </p>

        <p
          id="nqs4bvyO01"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Điều quan trọng nhất trước khi bạn tham gia vào thị trường là học hỏi
          và trang bị kiến thức nền tảng. Đây là bước không thể thiếu, bất kể
          bạn thuộc nhóm nào trong số những người tham gia mà chúng ta đã thảo
          luận ở trên.
        </p>

        <ul className="px-200 s704:px-0 overflow-hidden mx-auto w-full max-w-w680">
          <li className="pl-0 md:pl-0 mt-250 md:mt-300">
            <div className="rounded-050 overflow-hidden flex items-start">
              <div className="relative min-w-500 h-300 md:h-400">
                <span className="inline-block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-100 h-100 rounded-circle bg-background-inverse" />
              </div>
              <span
                className="ab-list article-text-x-small md:article-text-medium text-text-primary"
                style={{ wordBreak: "break-word" }}
              >
                Tìm hiểu về <b>công nghệ blockchain</b>: Hiểu cách thức hoạt
                động của công nghệ nền tảng của crypto sẽ giúp bạn có cái nhìn
                dài hạn và đánh giá đúng tiềm năng của các dự án.
              </span>
            </div>
          </li>

          <li className="pl-0 md:pl-0 mt-250 md:mt-300">
            <div className="rounded-050 overflow-hidden flex items-start">
              <div className="relative min-w-500 h-300 md:h-400">
                <span className="inline-block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-100 h-100 rounded-circle bg-background-inverse" />
              </div>
              <span
                className="ab-list article-text-x-small md:article-text-medium text-text-primary"
                style={{ wordBreak: "break-word" }}
              >
                Hiểu về các loại <b>tiền mã hóa</b>: Biết sự khác biệt giữa
                Bitcoin, Ethereum và hàng triệu altcoin khác. Mỗi loại có công
                dụng, tính năng và mục tiêu riêng.
              </span>
            </div>
          </li>

          <li className="pl-0 md:pl-0 mt-250 md:mt-300">
            <div className="rounded-050 overflow-hidden flex items-start">
              <div className="relative min-w-500 h-300 md:h-400">
                <span className="inline-block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-100 h-100 rounded-circle bg-background-inverse" />
              </div>
              <span
                className="ab-list article-text-x-small md:article-text-medium text-text-primary"
                style={{ wordBreak: "break-word" }}
              >
                <b>Phân tích thị trường</b>: Học cách đọc biểu đồ giá, nắm vững
                các chu kỳ thị trường và hiểu rõ yếu tố ảnh hưởng đến giá trị
                của tiền mã hóa.
              </span>
            </div>
          </li>

          <li className="pl-0 md:pl-0 mt-250 md:mt-300">
            <div className="rounded-050 overflow-hidden flex items-start">
              <div className="relative min-w-500 h-300 md:h-400">
                <span className="inline-block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-100 h-100 rounded-circle bg-background-inverse" />
              </div>
              <span
                className="ab-list article-text-x-small md:article-text-medium text-text-primary"
                style={{ wordBreak: "break-word" }}
              >
                Đầu tư – bất kể trong thị trường nào, dù là chứng khoán, bất
                động sản hay crypto – đều đòi hỏi{" "}
                <b>thời gian, công sức và tiền bạc</b>. Cũng như việc bạn phải
                có "kiến thức, kinh nghiệm và trải nghiệm".
              </span>
            </div>
          </li>
        </ul>

        <p
          id="IdX1cWzqaB"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Hãy nhớ rằng:{" "}
          <b>Đầu tư vào kiến thức là khoản đầu tư an toàn nhất.</b>
        </p>

        <figure
          id="rf63PHJRSy"
          className="px-200 s704:px-0 mt-250 md:mt-300 overflow-hidden mx-auto w-full max-w-w680"
        >
          <picture>
            <img
              alt="image"
              fetchPriority="high"
              width={640}
              height={420}
              decoding="async"
              className="object-cover select-none w-full md:hover:cursor-pointer rounded-050"
              src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdvFedo6xpCa_RKi55eq5ADKBQGzhD9NcnU_b1BWnGwuEojrGEM9bzDQhFUFagVyXEJ3Ov8_G-7hYDTu0uE6qVWr7XWMpxVtyEQVBAKsHxWyrFSLLJYTsjgQUt4wUhJ9UhpPa5rZe_i2Lag7OoxOncNXLzi?key=kvtcDnG7vRohUjILNZzbDA"
            />
          </picture>
        </figure>

        <p
          id="MlBxJwyvYg"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Trang Learn trên Coin98 Insights cung cấp đầy đủ kiến thức cho người
          mới bắt đầu tham gia vào thị trường Crypto. Bắt đầu khám phá kiến thức
          Crypto tại đây:
        </p>

        <div
          id="_wagl7LeYz"
          className="px-200 s704:px-0 mt-250 md:mt-300 mx-auto w-full max-w-w680 flex justify-center"
        >
          <a
            target="_blank"
            className="!no-underline"
            href="https://coin98.net/learn"
          >
            <button className="box-border outline-none ab-btn ab-btn-primary ab-btn-size-regular">
              Truy cập Thư viện Crypto
            </button>
          </a>
        </div>

        <h3
          id="1WgUoHGuo_"
          style={{ textAlign: "left" }}
          className="article-h4 px-200 s704:px-0 md:mt-300 text-text-primary mx-auto w-full max-w-w680 mt-200"
        >
          Học cách quản lý cảm xúc và tránh FOMO
        </h3>

        <p
          id="iovNWj1JyR"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Lòng tham và cảm xúc chắc chắn sẽ dẫn đến những quyết định tồi tệ
          trong đầu tư. Để thành công trong crypto, bạn cần học cách kiểm soát
          cảm xúc. Trong đó, một trong những sai lầm lớn nhất là bị FOMO (Fear
          of Missing Out – Sợ bị bỏ lỡ) chi phối.
        </p>

        <p
          id="2jHPQpZ83B"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Họ thấy mọi người xung quanh kiếm tiền từ crypto và vội vàng lao vào
          với mong muốn “giàu trong một đêm”. Tuy nhiên, điều này có thể dẫn đến
          những quyết định sai lầm, như “đu đỉnh" coin hoặc đầu tư toàn bộ tài
          sản vào một đồng coin không ổn định.
        </p>

        <ul className="px-200 s704:px-0 overflow-hidden mx-auto w-full max-w-w680">
          <li className="pl-0 md:pl-0 mt-250 md:mt-300">
            <div className="rounded-050 overflow-hidden flex items-start">
              <div className="relative min-w-500 h-300 md:h-400">
                <span className="inline-block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-100 h-100 rounded-circle bg-background-inverse" />
              </div>
              <span
                className="ab-list article-text-x-small md:article-text-medium text-text-primary"
                style={{ wordBreak: "break-word" }}
              >
                Đừng để FOMO hay lòng tham lấn át lý trí của bạn. Sự biến động
                ngắn hạn có thể rất hấp dẫn, nhưng thành công thực sự nằm ở việc
                xây dựng một chiến lược lâu dài và bền vững.
              </span>
            </div>
          </li>

          <li className="pl-0 md:pl-0 mt-250 md:mt-300">
            <div className="rounded-050 overflow-hidden flex items-start">
              <div className="relative min-w-500 h-300 md:h-400">
                <span className="inline-block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-100 h-100 rounded-circle bg-background-inverse" />
              </div>
              <span
                className="ab-list article-text-x-small md:article-text-medium text-text-primary"
                style={{ wordBreak: "break-word" }}
              >
                Xây dựng tư duy kiên nhẫn. Crypto là một thị trường mới và những
                người đầu tư thành công thường là những người có tầm nhìn dài
                hạn, biết kiên nhẫn chờ đợi cơ hội thích hợp.
              </span>
            </div>
          </li>
        </ul>

        <p
          id="l9ISLhX_Ev"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Hãy luôn nhớ rằng:{" "}
          <b>Không vội vàng lao vào thị trường chỉ vì muốn kiếm tiền nhanh.</b>
        </p>

        <p
          id="SNcVis5yQG"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          <b>
            <i>
              Đọc thêm:{" "}
              <a href="https://coin98.net/fomo-la-gi" target="_blank">
                FOMO là gì? 4 cách vượt qua tâm lý FOMO trong crypto
              </a>
            </i>
          </b>
        </p>

        <h3
          id="k9abEx7kaT"
          style={{ textAlign: "left" }}
          className="article-h4 px-200 s704:px-0 md:mt-300 text-text-primary mx-auto w-full max-w-w680 mt-200"
        >
          Quản lý rủi ro là bắt buộc
        </h3>

        <p
          id="U8umTSd-T8"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Quản lý rủi ro là yếu tố sống còn đối với bất kỳ nhà đầu tư nào, đặc
          biệt là trong thị trường crypto – nơi biến động giá có thể diễn ra
          mạnh và bất ngờ. Không giống như thị trường chứng khoán truyền thống
          của Việt Nam, crypto không có biên độ dao động giới hạn, đồng nghĩa
          với việc giá có thể tăng vọt hoặc giảm sâu trong thời gian rất ngắn.
        </p>

        <ul className="px-200 s704:px-0 overflow-hidden mx-auto w-full max-w-w680">
          <li className="pl-0 md:pl-0 mt-250 md:mt-300">
            <div className="rounded-050 overflow-hidden flex items-start">
              <div className="relative min-w-500 h-300 md:h-400">
                <span className="inline-block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-100 h-100 rounded-circle bg-background-inverse" />
              </div>
              <span
                className="ab-list article-text-x-small md:article-text-medium text-text-primary"
                style={{ wordBreak: "break-word" }}
              >
                <b>Nguyên tắc vàng</b> là không bao giờ đầu tư nhiều hơn số tiền
                bạn có thể chấp nhận mất.
              </span>
            </div>
          </li>

          <li className="pl-0 md:pl-0 mt-250 md:mt-300">
            <div className="rounded-050 overflow-hidden flex items-start">
              <div className="relative min-w-500 h-300 md:h-400">
                <span className="inline-block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-100 h-100 rounded-circle bg-background-inverse" />
              </div>
              <span
                className="ab-list article-text-x-small md:article-text-medium text-text-primary"
                style={{ wordBreak: "break-word" }}
              >
                Hãy chắc chắn rằng khoản đầu tư của bạn là một phần nhỏ trong
                tổng tài sản của mình, và nếu mất thì cũng không ảnh hưởng
                nghiêm trọng đến cuộc sống.
              </span>
            </div>
          </li>

          <li className="pl-0 md:pl-0 mt-250 md:mt-300">
            <div className="rounded-050 overflow-hidden flex items-start">
              <div className="relative min-w-500 h-300 md:h-400">
                <span className="inline-block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-100 h-100 rounded-circle bg-background-inverse" />
              </div>
              <span
                className="ab-list article-text-x-small md:article-text-medium text-text-primary"
                style={{ wordBreak: "break-word" }}
              >
                <b>Quản lý rủi ro</b> bằng cách{" "}
                <a
                  href="https://coin98.net/da-dang-hoa-dau-tu-la-gi"
                  target="_blank"
                >
                  đa dạng hóa danh mục đầu tư
                </a>
                . Không bao giờ đặt tất cả số tiền vào một đồng coin duy nhất.
              </span>
            </div>
          </li>
        </ul>

        <h3
          id="jhvzDOq_jj"
          style={{ textAlign: "left" }}
          className="article-h4 px-200 s704:px-0 md:mt-300 text-text-primary mx-auto w-full max-w-w680 mt-200"
        >
          Đừng rơi vào bẫy "lùa gà"
        </h3>

        <p
          id="UQlNsrTV3K"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          Thị trường crypto luôn tồn tại những lời khuyên, thông tin sai lệch và
          trò lừa đảo nhằm thu hút người mới. Những kẻ "lùa gà" thường lợi dụng
          lòng tham và sự thiếu kiến thức của người mới để dụ họ vào các dự án
          rủi ro cao.
        </p>

        <ul className="px-200 s704:px-0 overflow-hidden mx-auto w-full max-w-w680">
          <li className="pl-0 md:pl-0 mt-250 md:mt-300">
            <div className="rounded-050 overflow-hidden flex items-start">
              <div className="relative min-w-500 h-300 md:h-400">
                <span className="inline-block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-100 h-100 rounded-circle bg-background-inverse" />
              </div>
              <span
                className="ab-list article-text-x-small md:article-text-medium text-text-primary"
                style={{ wordBreak: "break-word" }}
              >
                Đừng nghe theo những lời khuyên không rõ nguồn gốc. Khi ai đó
                bảo bạn mua một đồng coin, hãy tự mình nghiên cứu trước khi đưa
                ra quyết định.
              </span>
            </div>
          </li>

          <li className="pl-0 md:pl-0 mt-250 md:mt-300">
            <div className="rounded-050 overflow-hidden flex items-start">
              <div className="relative min-w-500 h-300 md:h-400">
                <span className="inline-block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-100 h-100 rounded-circle bg-background-inverse" />
              </div>
              <span
                className="ab-list article-text-x-small md:article-text-medium text-text-primary"
                style={{ wordBreak: "break-word" }}
              >
                Xây dựng nền tảng kiến thức vững chắc. Nếu bạn hiểu rõ thị
                trường, khái niệm <b>“lùa gà”</b> sẽ không bao giờ xuất hiện
                trong từ điển của bạn.
              </span>
            </div>
          </li>
        </ul>

        <p
          id="56sZmzXP0d"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          <b>Crypto</b> <b>không phải là một thị trường dễ dàng</b>, cũng chưa
          bao giờ từng dễ dàng. Nhưng với nền tảng kiến thức đủ vững chắc và sự
          kiên nhẫn, bạn hoàn toàn có thể tận dụng cơ hội để xây dựng tương lai
          tài chính cho mình.
        </p>

        <p
          id="l5ZVlCXtCR"
          className="px-200 s704:px-0 mt-250 md:mt-300 article-text-x-small md:article-text-medium mx-auto w-full max-w-w680 text-text-primary break-words"
          style={{ textAlign: "left" }}
        >
          <b>
            <i>
              Đọc thêm{" "}
              <a
                href="https://coin98.net/chu-nghia-hu-vo-tai-chinh"
                target="_blank"
              >
                Chủ nghĩa hư vô tài chính: Chuyển dịch tâm lý đầu tư của giới
                trẻ qua lăng kính Bitcoin và Memecoin
              </a>
            </i>
          </b>
        </p>
      </div>
      <div className="px-200 mt-300">
        <div className="bg-divider h-0125 w-full max-w-w680 mx-auto"></div>
      </div>
      <div className="flex flex-wrap px-200 w-full mt-800">
        <div className="flex flex-wrap max-w-w680 mx-auto w-full gap-100">
          <a href="/tags/Ng%C6%B0%E1%BB%9Di_M%E1%BB%9Bi">
            <button
              className="
      w-fit bg-button-tertiary-background 
      flex items-center justify-center box-border 
      min-w-900 px-150 py-100 
      transition-all duration-200 ease-linear 
      rounded-circle border-0125 border-border 
      disabled:bg-button-tertiary-background 
      disabled:border-border disabled:cursor-not-allowed
      hover:border-button-tertiary-background-hovered 
      hover:bg-button-tertiary-background-hovered 
      active:bg-button-tertiary-background-pressed 
      active:border-button-tertiary-background-pressed 
      m-050 mx-0
    "
            >
              <span className="text-text-primary">#Người Mới</span>
            </button>
          </a>
        </div>
      </div>
      <div
        className="
    h-700 border-0125 py-150 px-200 md:py-100 md:px-300
    fixed bottom-0 left-0 right-0 z-90 bg-background 
    shadow-elevation-300 transition-transform duration-200 ease-linear 
    flex items-center justify-between 
    s560:justify-around lg:justify-end
    group-data-[navbar=hide]/postDetail:translate-y-100%
    group-data-[navbar=show]/postDetail:translate-y-0
  "
      >
        {/* BUTTON 1 */}
        <button
          className="
      group/ab-button relative select-none flex items-center justify-center 
      rounded-050 transition-all duration-200 ease-linear 
      lg:disabled:cursor-not-allowed bg-button-ghost-background 
      lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed 
      lg:hover:disabled:bg-button-ghost-background-disabled 
      disabled:bg-button-ghost-background-disabled border-0125 border-transparent 
      p-100 lg:mr-100
    "
        >
          <i className="ab-icon !not-italic text-button-ghost-icon group-disabled/ab-button:text-button-ghost-icon-disabled text-size-800 mr-0 ab-show"></i>

          <span className="select-none text-button-ghost-text group-disabled/ab-button:text-button-ghost-text-disable button-text-large hidden">
            <span className="ml-100 hidden sm:block">0</span>
          </span>

          <div className="flex items-center justify-center -z-1 opacity-0 absolute inset-0 ab-btn-loading-wrapper transition-all">
            <div className="relative animate-spin flex items-center justify-center w-300 h-300">
              <div className="h-050 w-050 rounded-circle absolute left-50% -translate-x-50% top-0 z-1 bg-btn-loading-transparent"></div>
              <div
                className="w-full h-full rounded-circle border-box bg-btn-loading-transparent"
                style={{
                  padding: "4px",
                  mask: "conic-gradient(#0000 45deg, #000), linear-gradient(#000 0 0) content-box",
                  WebkitMask:
                    "conic-gradient(#0000 45deg, #000), linear-gradient(#000 0 0) content-box",
                  WebkitMaskComposite: "source-out",
                  maskComposite: "subtract",
                }}
              ></div>
            </div>
          </div>
        </button>

        {/* BUTTON 2 */}
        <button
          className="
      group/ab-button relative select-none flex items-center justify-center 
      rounded-050 transition-all duration-200 ease-linear 
      lg:disabled:cursor-not-allowed bg-button-ghost-background 
      lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed 
      lg:hover:disabled:bg-button-ghost-background-disabled 
      disabled:bg-button-ghost-background-disabled border-0125 border-transparent 
      p-100 lg:mr-100
    "
        >
          <i className="ab-icon !not-italic text-button-ghost-icon group-disabled/ab-button:text-button-ghost-icon-disabled text-size-800 mr-0 ab-like"></i>
          <span className="select-none text-button-ghost-text group-disabled/ab-button:text-button-ghost-text-disable button-text-large hidden"></span>

          <div className="flex items-center justify-center -z-1 opacity-0 absolute inset-0 ab-btn-loading-wrapper transition-all">
            <div className="relative animate-spin flex items-center justify-center w-300 h-300">
              <div className="h-050 w-050 rounded-circle absolute left-50% -translate-x-50% top-0 z-1 bg-btn-loading-transparent"></div>
              <div
                className="w-full h-full rounded-circle border-box bg-btn-loading-transparent"
                style={{
                  padding: "4px",
                  mask: "conic-gradient(#0000 45deg, #000), linear-gradient(#000 0 0) content-box",
                  WebkitMask:
                    "conic-gradient(#0000 45deg, #000), linear-gradient(#000 0 0) content-box",
                  WebkitMaskComposite: "source-out",
                  maskComposite: "subtract",
                }}
              ></div>
            </div>
          </div>
        </button>

        {/* BUTTON 3 */}
        <button
          className="
      group/ab-button relative select-none flex items-center justify-center 
      rounded-050 transition-all duration-200 ease-linear 
      lg:disabled:cursor-not-allowed bg-button-ghost-background 
      lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed 
      lg:hover:disabled:bg-button-ghost-background-disabled 
      disabled:bg-button-ghost-background-disabled border-0125 border-transparent 
      p-100 lg:mr-100
    "
        >
          <i className="ab-icon !not-italic text-button-ghost-icon group-disabled/ab-button:text-button-ghost-icon-disabled text-size-800 mr-0 ab-bookmark_outlined"></i>
          <span className="select-none text-button-ghost-text group-disabled/ab-button:text-button-ghost-text-disable button-text-large hidden"></span>

          <div className="flex items-center justify-center -z-1 opacity-0 absolute inset-0 ab-btn-loading-wrapper transition-all">
            <div className="relative animate-spin flex items-center justify-center w-300 h-300">
              <div className="h-050 w-050 rounded-circle absolute left-50% -translate-x-50% top-0 z-1 bg-btn-loading-transparent"></div>
              <div
                className="w-full h-full rounded-circle border-box bg-btn-loading-transparent"
                style={{
                  padding: "4px",
                  mask: "conic-gradient(#0000 45deg, #000), linear-gradient(#000 0 0) content-box",
                  WebkitMask:
                    "conic-gradient(#0000 45deg, #000), linear-gradient(#000 0 0) content-box",
                  WebkitMaskComposite: "source-out",
                  maskComposite: "subtract",
                }}
              ></div>
            </div>
          </div>
        </button>

        {/* BUTTON 4 (MENU) */}
        <button
          className="
      group/ab-button relative select-none flex items-center justify-center 
      rounded-050 transition-all duration-200 ease-linear 
      lg:disabled:cursor-not-allowed bg-button-ghost-background 
      lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed 
      lg:hover:disabled:bg-button-ghost-background-disabled 
      disabled:bg-button-ghost-background-disabled border-0125 border-transparent 
      p-100 
      group-data-[widget=open]/postDetail:btn-ghost-active
    "
        >
          <i className="ab-icon !not-italic text-button-ghost-icon group-disabled/ab-button:text-button-ghost-icon-disabled text-size-800 mr-0 ab-menu"></i>
          <span className="select-none text-button-ghost-text group-disabled/ab-button:text-button-ghost-text-disable button-text-large hidden"></span>

          <div className="flex items-center justify-center -z-1 opacity-0 absolute inset-0 ab-btn-loading-wrapper transition-all">
            <div className="relative animate-spin flex items-center justify-center w-300 h-300">
              <div className="h-050 w-050 rounded-circle absolute left-50% -translate-x-50% top-0 z-1 bg-btn-loading-transparent"></div>
              <div
                className="w-full h-full rounded-circle border-box bg-btn-loading-transparent"
                style={{
                  padding: "4px",
                  mask: "conic-gradient(#0000 45deg, #000), linear-gradient(#000 0 0) content-box",
                  WebkitMask:
                    "conic-gradient(#0000 45deg, #000), linear-gradient(#000 0 0) content-box",
                  WebkitMaskComposite: "source-out",
                  maskComposite: "subtract",
                }}
              ></div>
            </div>
          </div>
        </button>
      </div>
      <div
        id="widget-article-detail"
        className="
    h-channelScreenBodyWithout1000 md:h-channelScreenBodyWithout1500 
    bottom-0 top-1500 md:top-sp160 w-w352 
    shadow-elevation-100 ab-article-detail-widget fixed 
    bg-transparent z-80 transition-all duration-200 ease-linear 
    group-data-[widget=close]/postDetail:-right-100%
    group-data-[widget=open]/postDetail:right-0
  "
      >
        <div className="w-full h-full bg-background pb-700 flex flex-col">
          {/* TAB HEADER */}
          <div
            role="tablist"
            className="inline-flex items-center border-b-0125 border-b-border-subtle px-250 flex-none"
          >
            <div
              role="tab"
              aria-selected="false"
              aria-controls="xMf5ag8MAC0JfbL0-content-series"
              data-state="inactive"
              id="xMf5ag8MAC0JfbL0-trigger-series"
              className="
            py-200 text-text-subtlest mx-150 lg:hover:cursor-pointer 
            border-b-025 border-b-transparent inline-flex items-center whitespace-nowrap 
            transition-all focus-visible:outline-none disabled:pointer-events-none 
            disabled:opacity-50 lg:hover:text-text-primary 
            data-[state=active]:text-text-primary 
            data-[state=active]:border-b-text-primary
          "
            >
              Series
            </div>

            <div
              role="tab"
              aria-selected="true"
              aria-controls="xMf5ag8MAC0JfbL0-content-content"
              data-state="active"
              id="xMf5ag8MAC0JfbL0-trigger-content"
              className="
            py-200 text-text-subtlest mx-150 lg:hover:cursor-pointer 
            border-b-025 border-b-transparent inline-flex items-center whitespace-nowrap 
            transition-all focus-visible:outline-none disabled:pointer-events-none 
            disabled:opacity-50 lg:hover:text-text-primary 
            data-[state=active]:text-text-primary 
            data-[state=active]:border-b-text-primary
          "
            >
              Content
            </div>
          </div>

          {/* TAB PANEL: SERIES */}
          <div
            className="mt-2 focus-visible:outline-none flex-1 overflow-y-auto no-scrollbar"
            data-state="inactive"
            role="tabpanel"
            aria-labelledby="xMf5ag8MAC0JfbL0-trigger-series"
            id="xMf5ag8MAC0JfbL0-content-series"
            hidden
            tabIndex={0}
          >
            <div className="ui-text-x-small-emphasis flex items-center py-200 pl-400 pr-200 text-text-primary bg-background sticky top-0 z-1">
              RELEVANT SERIES
            </div>
          </div>

          {/* TAB PANEL: CONTENT */}
          <div
            className="mt-2 focus-visible:outline-none flex-1 overflow-y-auto no-scrollbar"
            data-state="active"
            role="tabpanel"
            aria-labelledby="xMf5ag8MAC0JfbL0-trigger-content"
            id="xMf5ag8MAC0JfbL0-content-content"
            tabIndex={0}
          >
            <div className="ui-text-x-small-emphasis flex items-center py-200 pl-400 pr-200 text-text-primary bg-background sticky top-0 z-1">
              TABLE OF CONTENTS
            </div>

            {/* ITEM 1 */}
            <div
              data-type="normal"
              id="content-heading-mcXGE98aXl"
              className="
          relative ui-text-medium flex-none py-200 pl-400 pr-200 
          text-text-secondary 
          before:absolute before:top-50% before:left-150 before:-translate-y-50% 
          before:transition-all before:duration-100 before:ease-linear before:block 
          before:h-100 before:w-100 before:rounded-circle before:bg-inherit 
          before:content-[''] 
          transition-all duration-100 ease-linear 
          lg:hover:ui-text-medium-emphasis lg:hover:cursor-pointer 
          lg:hover:before:bg-text-highlight
          data-[type=active]:ui-text-medium-emphasis 
          data-[type=active]:text-text-highlight 
          data-[type=active]:before:bg-text-highlight
        "
            >
              Bạn là ai?
            </div>

            {/* ITEM 2 */}
            <div
              data-type="normal"
              id="content-heading-qeq-6ZrPuY"
              className="
          relative ui-text-medium flex-none py-200 pl-400 pr-200 
          text-text-secondary 
          before:absolute before:top-50% before:left-150 before:-translate-y-50% 
          before:transition-all before:duration-100 before:ease-linear before:block 
          before:h-100 before:w-100 before:rounded-circle before:bg-inherit 
          before:content-[''] 
          transition-all duration-100 ease-linear 
          lg:hover:ui-text-medium-emphasis lg:hover:cursor-pointer 
          lg:hover:before:bg-text-highlight
          data-[type=active]:ui-text-medium-emphasis 
          data-[type=active]:text-text-highlight 
          data-[type=active]:before:bg-text-highlight
        "
            >
              Tại sao bạn ở đây?
            </div>

            {/* ITEM 3 - ACTIVE */}
            <div
              data-type="active"
              id="content-heading-cUyftnY27p"
              className="
          relative ui-text-medium flex-none py-200 pl-400 pr-200 
          text-text-secondary 
          before:absolute before:top-50% before:left-150 before:-translate-y-50% 
          before:transition-all before:duration-100 before:ease-linear before:block 
          before:h-100 before:w-100 before:rounded-circle before:bg-inherit 
          before:content-[''] 
          transition-all duration-100 ease-linear 
          lg:hover:ui-text-medium-emphasis lg:hover:cursor-pointer 
          lg:hover:before:bg-text-highlight
          data-[type=active]:ui-text-medium-emphasis 
          data-[type=active]:text-text-highlight 
          data-[type=active]:before:bg-text-highlight
        "
            >
              Bạn nên bắt đầu từ đâu?
            </div>
          </div>
        </div>
      </div>
      <div className="bg-divider h-0125 w-full mt-800"></div>
      <div className="mx-auto w-full max-w-w1336 py-800">
        <h2 className="article-h4 mb-300 px-200 text-text-primary">
          Related Posts
        </h2>

        <div className="flex flex-wrap w-full">
          <a
            className="group block w-full md:w-1/2 lg:w-1/4"
            href="/cung-tien-m2"
          >
            <div
              id="p648i1p6zpobvfm2"
              draggable="false"
              className="
          transition-all duration-300 bg-background lg:hover:bg-background-hovered
          article-vertical select-none px-200 py-300 md:px-300
        "
            >
              {/* IMAGE */}
              <picture className="relative mb-200 block">
                <img
                  alt="cung tiền m2 là gì"
                  fetchPriority="high"
                  loading="eager"
                  width={600}
                  height={400}
                  decoding="async"
                  data-nimg="1"
                  className="object-cover rounded-050 aspect-3-2 w-full rounded-050"
                  sizes="(max-width: 480px) 100vw, (max-width: 675px) 60vw, 50vw"
                  src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Fposts%2Fp648i1p6zpobvfm2%2Ff0hvxdlsxebjxw3zd1xq5sk5dn1k7mc4%2Fcung-tien-m2-4.jpg&w=3840&q=75"
                  style={{ color: "transparent" }}
                />
              </picture>

              {/* META */}
              <div className="ui-text-small text-text-secondary min-h-300 flex-wrap items-center mb-100 flex">
                <div>
                  <button
                    type="button"
                    id="radix-:r0:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                  >
                    <div className="flex items-center ui-text-x-small md:ui-text-small text-text-primary">
                      <div className="mr-100 flex items-center -space-x-2">
                        {/* AVATAR 1 */}
                        <div className="aspect-square relative z-2 ab-avatar-people ab-avatar-size-24 ring-2 ring-background">
                          <img
                            alt="avatar"
                            loading="lazy"
                            width={32}
                            height={32}
                            decoding="async"
                            data-nimg="1"
                            className="avatar-img aspect-square w-full object-cover"
                            sizes="(max-width: 675px) 24px, 24px"
                            src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Fchannel%2Fchnbzaa92ook5tnj%2Ffuyvacrzjs2gap74gp5ulvwf5g1i25zr%2Fupside-logo.png&w=3840&q=50"
                            style={{ color: "transparent" }}
                          />
                        </div>

                        {/* AVATAR 2 */}
                        <div className="aspect-square relative z-1 ab-avatar-people ab-avatar-size-24 ring-2 ring-background">
                          <img
                            alt="avatar"
                            loading="lazy"
                            width={32}
                            height={32}
                            decoding="async"
                            data-nimg="1"
                            className="avatar-img aspect-square w-full object-cover"
                            sizes="(max-width: 675px) 24px, 24px"
                            src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fuserdata%2Fusrzihar2uey9sjefrz1xtywijisyagp%2Fprofile-pictures%2Ffggd9ofu7867do4ff8wond9omarh9iir%2F288930474_3078241535821095_8640745413739969681_n.jpg&w=3840&q=50"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>

                      <div>Multi Author</div>
                    </div>
                  </button>
                </div>
                <div className="m-050 flex items-center justify-center h-100 aspect-square">
                  <div className="w-100 aspect-square rounded-circle bg-g block scale-50" />
                </div>
                Oct 25 2025
              </div>

              {/* TITLE */}
              <p className="text-text-primary break-words md:article-h5 article-h5">
                Cung tiền M2: Ảnh hưởng của M2 đến crypto?
              </p>

              {/* DESCRIPTION */}
              <div className="mt-100 block">
                <span className="article-text-x-small break-words line-clamp-3 text-text-secondary">
                  Trong thế giới tài chính đầy biến động, có một khái niệm tưởng
                  chừng khô khan nhưng lại mang đến những gợi ý giá trị cho nhà
                  đầu tư, đó chính là cung tiền M2.
                </span>
              </div>

              {/* FOOTER */}
              <div className="h-400 items-center justify-between mt-150 flex">
                <div className="flex items-center">
                  <div className="box-border badge flex w-fit items-center justify-center rounded-circle border-0125 px-100 py-0125 border-badge-labeled-neutral-border bg-badge-labeled-neutral-background h-300 text-text-primary my-050 whitespace-nowrap">
                    <span className="ui-text-small text-badge-labeled-neutral-text">
                      13 min read
                    </span>
                  </div>
                </div>

                {/* TOOL BUTTONS */}
                <div className="flex items-center">
                  {/* SAVE BUTTON */}
                  <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible mr-150">
                    <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed border-0125 border-transparent p-100">
                      <i className="ab-icon !not-italic text-button-ghost-icon text-size-800 mr-0 ab-bookmark_outlined" />
                      <span className="select-none text-button-ghost-text button-text-large hidden" />

                      {/* LOADING */}
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

                    {/* TOOLTIP */}
                    <div
                      className="
                  w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 
                  transition-transform ease-linear rounded-050 border border-tooltip-background 
                  bg-tooltip-background text-tooltip-text shadow-elevation-none 
                  lg:group-hover/tooltip:shadow-elevation-200 mb-150 bottom-100% 
                  translate-y-100 lg:group-hover/tooltip:translate-y-0 left-1/2 
                  -translate-x-1/2
                "
                      style={{ transitionDuration: "0ms" }}
                    >
                      Save
                      <div className="tooltip-arrow" data-popper-arrow />
                    </div>
                  </div>

                  {/* COPY LINK BUTTON */}
                  <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible">
                    <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed border-0125 border-transparent p-100">
                      <i className="ab-icon !not-italic text-button-ghost-icon text-size-800 mr-0 ab-link" />
                      <span className="select-none text-button-ghost-text button-text-large hidden" />

                      {/* LOADING */}
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

                    {/* TOOLTIP */}
                    <div
                      className="
                  w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 
                  transition-transform ease-linear rounded-050 border border-tooltip-background 
                  bg-tooltip-background text-tooltip-text shadow-elevation-none 
                  lg:group-hover/tooltip:shadow-elevation-200 mb-150 bottom-100% 
                  translate-y-100 lg:group-hover/tooltip:translate-y-0 left-1/2 
                  -translate-x-1/2
                "
                      style={{ transitionDuration: "0ms" }}
                    >
                      Copy link
                      <div className="tooltip-arrow" data-popper-arrow />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
