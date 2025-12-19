"use client";
import type { PostSingleItem } from "@/types/post";
import Link from "next/link";
import AvatarCircle from "@/components/AvatarCircle";
import ArticleAuthors from "@/components/ArticleAuthors";
import React, { useEffect, useState } from "react";
import ArticleImageLatestPost from "./ArticleImageLatestPost";
import { PostItem } from "@/types/post";
import ArticleReadTime from "./ArticleReadTime";
import ArticleActions from "./ArticleActions";

interface Props {
  item: PostSingleItem;
}
type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

function useTableOfContents(active: boolean) {
  const [toc, setToc] = React.useState<TocItem[]>([]);
  const [activeId, setActiveId] = React.useState<string>("");
  useEffect(() => {
    document.body.classList.add("hide-footer");
    return () => document.body.classList.remove("hide-footer");
  }, []);

  React.useEffect(() => {
    if (!active) return;

    const container = document.getElementById("detail-content");
    if (!container) return;

    const headings = Array.from(
      container.querySelectorAll("h2, h3")
    ) as HTMLHeadingElement[];

    const items: TocItem[] = headings.map((el, index) => {
      if (!el.id) {
        el.id = `heading-${index}`;
      }
      return {
        id: el.id,
        text: el.textContent || "",
        level: el.tagName === "H2" ? 2 : 3,
      };
    });

    setToc(items);

    // ===== SCROLL SPY =====
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-120px 0px -60% 0px",
      }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [active]);

  return { toc, activeId };
}

export default function SinglePostItem({ item }: Props) {
  const [widgetOpen, setWidgetOpen] = useState(false);

  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY && current > 300) {
        setShowNavbar(true); // scroll xuống
      } else {
        setShowNavbar(false); // scroll lên
      }

      setLastScrollY(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  const { toc, activeId } = useTableOfContents(true);

  return (
    <div
      className="group/postDetail bg-background"
      data-widget={widgetOpen ? "open" : "close"}
      data-navbar={showNavbar ? "show" : "hide"}
    >
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

          {/* ===== TITLE ===== */}
          <h1 className="article-h3 text-text-primary text-left md:article-h2 mt-500">
            {item.title}
          </h1>

          <div className="bg-divider-subtle h-0125 w-full mt-500"></div>

          {/* ===== DESCRIPTION / EXCERPT ===== */}
          {(item.description || item.excerpt) && (
            <div className="article-text-small md:article-text-large whitespace-pre-wrap text-text-subtlest py-300 text-left">
              {item.description || item.excerpt}
            </div>
          )}

          <div className="bg-divider-subtle h-0125 w-full"></div>

          {/* ===== AUTHOR + DATE + READ TIME ===== */}
          <div className="flex flex-col md:flex-row md:items-center mt-450 justify-between">
            {/* LEFT: AUTHORS */}
            <ArticleAuthors authors={item.authors} date="" />

            {/* Published date + read time */}
            <div className="flex flex-row mt-200 md:mt-0 ui-text-small text-text-subtlest align-middle items-center justify-between">
              {/* DATE */}
              <div className="flex items-center">
                <span className="leading-none whitespace-nowrap">
                  Published {item.date}
                </span>
              </div>

              {/* DOT */}
              <div className="m-050 h-100 aspect-square hidden md:flex md:items-center md:justify-center">
                <div className="w-100 aspect-square rounded-circle bg-g block scale-50"></div>
              </div>

              {/* READ TIME */}
              {item.readTime && (
                <div className="flex items-center">
                  <div
                    className="box-border badge flex w-fit items-center justify-center rounded-circle 
        border-0125 px-100 py-0125 border-badge-labeled-neutral-border 
        bg-badge-labeled-neutral-background h-300 whitespace-nowrap"
                  >
                    <span className="ui-text-small text-badge-labeled-neutral-text">
                      {item.readTime}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {item.anh_doan_1_trong_content && (
          <picture className="overflow-hidden relative w-full max-w-w960 mx-auto mt-600">
            <img
              src={item.anh_doan_1_trong_content || item.image}
              alt={item.title}
              draggable={false}
              fetchPriority="high"
              decoding="async"
              loading="eager"
              width={960}
              height={640}
              className="select-none w-full h-auto object-cover aspect-3-2 md:rounded-050"
              style={{ color: "transparent" }}
            />
          </picture>
        )}
      </div>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: item.content }}
      />

      <div className="px-200 mt-300">
        <div className="bg-divider h-0125 w-full max-w-w680 mx-auto"></div>
      </div>
      {item.categories && item.categories.length > 0 && (
        <div className="flex flex-wrap px-200 w-full mt-800">
          <div className="flex flex-wrap max-w-w680 mx-auto w-full gap-100">
            {item.categories.map((cat) => (
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
                <span className="text-text-primary">#{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
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
          onClick={() => setWidgetOpen((v) => !v)}
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

          <div
            className="mt-2 focus-visible:outline-none flex-1 overflow-y-auto no-scrollbar"
            role="tabpanel"
          >
            <div className="ui-text-x-small-emphasis flex items-center py-200 pl-400 pr-200 text-text-primary bg-background sticky top-0 z-1">
              TABLE OF CONTENTS
            </div>

            {toc.map((item) => (
              <div
                key={item.id}
                data-type={activeId === item.id ? "active" : "normal"}
                onClick={() => {
                  const el = document.getElementById(item.id);
                  if (el) {
                    el.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }

                  // ✅ ĐÓNG WIDGET SAU KHI CLICK
                  setWidgetOpen(false);
                }}
                className={`
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
        ${item.level === 3 ? "pl-600 ui-text-small" : ""}
      `}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-divider h-0125 w-full mt-800"></div>
      <div className="mx-auto w-full max-w-w1336 py-800">
        <h2 className="article-h4 mb-300 px-200 text-text-primary">
          Related Posts
        </h2>

        <div className="flex flex-wrap w-full">
          {item.bai_viet_lien_quan.map((post: PostItem) => (
            <div key={post.slug} className="w-full s640:w-1/2 s1180:w-1/4">
              <Link href={`/${post.slug}`}>
                <div className="transition-all duration-300 bg-background lg:hover:bg-background-hovered article-vertical select-none px-200 py-300 md:px-300">
                  <ArticleImageLatestPost src={post.image} alt={post.title} />

                  <ArticleAuthors
                    authors={post.authors ?? []}
                    date={post.date}
                  />

                  <p className="article-h7 text-text-primary">{post.title}</p>

                  {post.excerpt && (
                    <span className="article-text-x-small text-text-secondary line-clamp-3">
                      {post.excerpt}
                    </span>
                  )}

                  <div className="hidden lg:flex justify-between">
                    <ArticleReadTime readTime={post.readTime} />
                    <ArticleActions />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
