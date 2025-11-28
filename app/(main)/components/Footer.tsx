export default function Footer() {
  return (
    <footer className="footer">
      <div className="relative w-full max-w-w1440 mx-auto pt-500 pb-300 md:pb-1000 z-100 bg-background">
        <div className="bg-divider h-0125 w-full absolute top-0 left-0"></div>

        {/* Logo + Social */}
        <div className="md:px-300 xl:px-1000 flex flex-col md:flex-row items-center justify-between">
          <a href="/">
            <div className="h-400 md:h-500">
              <img
                alt="Upside"
                loading="lazy"
                width="32"
                height="32"
                decoding="async"
                className="h-full w-auto object-cover"
                style={{ color: "transparent" }}
                src="/assets/logo/coin98-insight.svg"
              />
            </div>
          </a>

          <div className="flex items-center mt-200 md:mt-0 gap-300">
            <a rel="nofollow" className="flex items-center" target="_blank" href="https://x.com/gm_upside">
              <i className="ab-icon !not-italic text-size-800 text-icon-subtlest ab-channel_twitter"></i>
            </a>
            <a rel="nofollow" className="flex items-center" target="_blank" href="https://www.facebook.com/groups/Coin98.Net">
              <i className="ab-icon !not-italic text-size-800 text-icon-subtlest ab-channel_facebook"></i>
            </a>
            <a rel="nofollow" className="flex items-center" target="_blank" href="https://t.me/Coin98Insights">
              <i className="ab-icon !not-italic text-size-800 text-icon-subtlest ab-channel_telegram"></i>
            </a>
            <a rel="nofollow" className="flex items-center" target="_blank" href="https://www.youtube.com/@Coin98">
              <i className="ab-icon !not-italic text-size-800 text-icon-subtlest ab-channel_youtube"></i>
            </a>
            <a rel="nofollow" className="flex items-center" target="_blank" href="https://www.tiktok.com/@upsidevn">
              <i className="ab-icon !not-italic text-size-800 text-icon-subtlest ab-channel_tiktok"></i>
            </a>
          </div>
        </div>

        {/* Info + Terms */}
        <div className="md:px-300 xl:px-1000 mt-200 flex flex-col md:flex-row items-center md:items-start justify-between text-text-subtlest ui-text-x-small">
          <div className="mb-1000 md:mb-0 flex flex-col items-center md:items-start">
            © 2024 C98 Asia Pacific Pte. Ltd. All Rights Reserved
            <span className="flex items-center mt-100 md:mt-0">
              Powered by
              <i className="ab-icon !not-italic text-size-800 mx-050 ab-amber_logo_mark"></i>
              AmberBlocks
            </span>
          </div>

          <div className="flex justify-center px-200 md:px-0 items-center flex-wrap gap-150 md:gap-300">
            <div className="flex items-center">
              <a rel="nofollow" target="_blank" href="https://docs.coin98.net/terms-of-service">
                <span className="text-text-subtlest">Terms of Service</span>
              </a>
            </div>

            <span className="w-050 h-050 rounded-circle bg-g-20"></span>

            <div className="flex items-center">
              <a rel="nofollow" target="_blank" href="https://docs.coin98.net/privacy-policy">
                <span className="text-text-subtlest">Privacy Policy</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
