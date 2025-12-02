"use client";

interface LatestPostsHeaderProps {
  title: string;
  moreHref?: string;
}

export default function LatestPostsHeader({ title, moreHref = "#" }: LatestPostsHeaderProps) {
  return (
    <div className="flex items-center px-200 md:px-300">
      <div className="flex grow flex-col break-words">
        <span className="ui-text-large-emphasis md:ui-h3-emphasis text-text-primary line-clamp-1">
          {title}
        </span>
      </div>

      <div className="min-h-500 ml-150">
        <a href={moreHref}>
          <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed lg:hover:disabled:bg-button-ghost-background-disabled disabled:bg-button-ghost-background-disabled border-0125 border-transparent py-100 px-150">
            <span className="select-none text-button-ghost-text group-disabled/ab-button:text-button-ghost-text-disable button-text-large">
              More
            </span>

            <i className="ab-icon !not-italic text-button-ghost-icon group-disabled/ab-button:text-button-ghost-icon-disabled ml-100 text-size-800 lg:text-size-400 ab-arrow_right"></i>

            <div className="flex items-center justify-center -z-1 opacity-0 absolute inset-0 ab-btn-loading-wrapper transition-all">
              <div className="relative animate-spin flex items-center justify-center w-300 h-300">
                <div className="h-050 w-050 rounded-circle absolute left-50% -translate-x-50% top-0 z-1 bg-btn-loading-transparent"></div>
                <div
                  style={{
                    padding: "4px",
                    WebkitMask:
                      "conic-gradient(#0000 45deg, #000), linear-gradient(#000 0 0) content-box",
                    mask:
                      "conic-gradient(#0000 45deg, #000), linear-gradient(#000 0 0) content-box",
                    WebkitMaskComposite: "source-out",
                    maskComposite: "subtract",
                  }}
                  className="w-full h-full rounded-circle border-box bg-btn-loading-transparent"
                ></div>
              </div>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}
