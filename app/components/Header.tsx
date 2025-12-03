"use client";

import { useState } from "react";
import AvatarCircle from "@/components/AvatarCircle";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import Image from "next/image";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {isSearchOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center transition-all duration-150 ease-linear group-data-[modal=hide]/body:opacity-0 group-data-[modal=show]/body:opacity-100 bg-transparent">
          <div
            role="dialog-content"
            className="relative p-100 rounded-050 bg-background shadow-elevation-300 transition-all duration-200 ease-linear w-full h-full opacity-100 translate-y-0"
          >
            {/* TOP */}
            <div className="flex-none w-full md:pb-300 sticky md:pt-1000 md:top-0 bg-background z-10">
              <div className="relative w-full py-300 px-100 sm:px-400 md:p-0 md:w-w680 md:mx-auto">
                {/* BACK BUTTON */}
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed lg:hover:disabled:bg-button-ghost-background-disabled disabled:bg-button-ghost-background-disabled border-0125 border-transparent py-050 px-100 mb-200 lg:mb-0 lg:absolute lg:right-100% lg:top-50% lg:-translate-y-50% lg:mr-300"
                >
                  <i className="ab-icon !not-italic text-button-ghost-icon group-disabled/ab-button:text-button-ghost-icon-disabled text-size-400 mr-100 ab-arrow_left" />
                  <span className="select-none text-button-ghost-text group-disabled/ab-button:text-button-ghost-text-disable button-text-medium">
                    Back
                  </span>

                  <div className="flex items-center justify-center -z-1 opacity-0 absolute inset-0 ab-btn-loading-wrapper transition-all">
                    <div className="relative animate-spin flex items-center justify-center w-200 h-200">
                      <div className="h-050 w-050 rounded-circle absolute left-50% -translate-x-50% top-0 z-1 bg-btn-loading-transparent" />
                      <div
                        className="w-full h-full rounded-circle border-box bg-btn-loading-transparent"
                        style={{
                          padding: "4px",
                          mask: "conic-gradient(rgba(0, 0, 0, 0) 45deg, rgb(0, 0, 0)) subtract, linear-gradient(rgb(0,0,0) 0px, rgb(0,0,0) 0px) content-box",
                        }}
                      />
                    </div>
                  </div>
                </button>

                {/* SEARCH BAR */}
                <div className="flex flex-col">
                  <label
                    htmlFor="waus9"
                    className="h-600 bg-background flex items-center py-150 px-200 rounded-050 border-0125 border-border transition-all duration-200 focus-within:border-cbr-50 focus-within:shadow-outline-primary cursor-text rounded-circle"
                  >
                    <i className="ab-icon !not-italic mr-150 flex-none transition-all duration-200 text-size-800 text-icon ab-search" />

                    <input
                      placeholder="Search"
                      id="waus9"
                      autoComplete="off"
                      className="outline-none bg-transparent align-middle flex-1 text-text-primary disabled:text-text-disabled select-none placeholder:select-none placeholder:text-text-subtlest"
                      defaultValue="a"
                    />

                    <div className="w-300 h-300 flex items-center justify-center ml-150 lg:hover:cursor-pointer visible">
                      <i className="ab-icon !not-italic flex-none text-size-400 text-icon-subtlest ab-cancel" />
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* MAIN SCROLL AREA */}
            <div className="no-scrollbar h-full w-full overflow-y-auto flex-1 relative flex flex-col">
              <div className="w-full sm:px-200 md:px-0 mx-auto max-w-w960 overflow-y-auto no-scrollbar">
                <div className="w-full relative md:px-200 pb-sp200 lg:pb-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* LEFT COLUMN */}
                    <div className="lg:w-w430 lg:flex-none">
                      <div className="py-100 px-100 sm:px-200">
                        <div className="relative py-100">
                          <span className="ui-text-x-small-emphasis text-text-subtlest">
                            POSTS
                          </span>
                          <div className="bg-divider-subtle h-0125 w-full absolute -bottom-100 left-0" />
                        </div>
                      </div>

                      {/* POST ITEM */}
                      <Link
                        className="block grow group/search-suggest"
                        href="/huong-dan-serenity-halo-testnet"
                      >
                        <div className="transition-all duration-300 bg-background lg:hover:bg-background-hovered article-suggested select-none overflow-hidden flex py-300 px-100 sm:px-200 flex-row">
                          <picture className="block flex-none w-w90 relative">
                            <img
                              alt="Hướng dẫn làm Serenity & Halo Testnet trên Aura Network"
                              width={600}
                              height={400}
                              className="object-cover rounded-050 aspect-3-2 w-full rounded-050"
                              src="/_next/image?url=https%3A%2F%2Ffile.coin98.com%2Fthumbnail%2Fhuong-dan-serenity-halo-testnet.png&w=3840&q=75"
                            />
                          </picture>

                          <div className="flex-1 flex flex-col ml-200">
                            <p className="text-text-primary break-words ui-text-small-emphasis">
                              Hướng dẫn làm Serenity & Halo Testnet trên Aura
                              Network
                            </p>

                            <div className="h-300 flex items-center mt-050 ui-text-small">
                              May 18 2022
                                        <AvatarCircle />
                              <div className="box-border badge flex w-fit items-center justify-center rounded-circle border-0125 px-100 py-0125 border-badge-labeled-neutral-border bg-badge-labeled-neutral-background h-300 text-text-primary my-050 whitespace-nowrap">
                                <span className="ui-text-small text-badge-labeled-neutral-text">
                                  4 min read
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="px-200">
                          <div className="bg-divider h-0125 w-full group-last/search-suggest:hidden" />
                        </div>
                      </Link>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:flex-1">
                      <div className="w-full">
                        <div className="py-100 px-200">
                          <div className="relative py-100">
                            <span className="ui-text-x-small-emphasis text-text-subtlest">
                              SERIES
                            </span>
                            <div className="bg-divider-subtle h-0125 w-full absolute -bottom-100 left-0" />
                          </div>
                        </div>

                        {/* SERIES SCROLL */}
                        <div className="flex overflow-x-auto no-scrollbar">
                          <Link
                            className="min-w-w320 lg:min-w-0 w-1/2"
                            href="/series/the-research-and-analysis"
                          >
                            <div className="transition-all duration-300 bg-background lg:hover:bg-background-hovered group/seriesCard p-200">
                              <div className="w-full relative overflow-hidden rounded-050">
                                <picture>
                                  <img
                                    alt="The Research & Analysis"
                                    width={379}
                                    height={379}
                                    className="transition-all duration-200 ease-linear object-cover lg:group-hover/seriesCard:scale-105 aspect-3-2 md:aspect-square w-full rounded-050"
                                    src="/_next/image?url=https%3A%2F%2Ffiles.amberblocks.com%2Fthumbnail%2Fchnbzaa92ook5tnj%2Fseries%2Fs8gvo18tpe6k%2Ff42citksrh1pfa0wphkw680e9se7d3m5%2Fthe-research-analysis.jpg&w=3840&q=75"
                                  />
                                </picture>

                                {/* OVERLAY TEXT */}
                                <div className="pb-200 px-200 top-400 flex flex-col justify-end absolute inset-x-0 bottom-0 rounded-050 bg-series-overlay">
                                  <div
                                    data-theme="dark"
                                    className="select-none flex-1 relative overflow-hidden flex flex-col justify-end"
                                  >
                                    <div className="text-text-primary article-h6">
                                      The Research & Analysis
                                    </div>
                                    <div className="ui-text-x-small text-text-secondary mt-100">
                                      339 POSTS
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FOOTER BUTTON */}
              <div className="sticky bottom-0 inset-x-0 flex justify-center lg:justify-end bg-background md:mt-200 md:mb-800 py-100 z-1">
                <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed border-0125 border-transparent py-100 px-150">
                  <i className="ab-icon !not-italic text-button-ghost-icon text-size-400 mr-100 ab-enter" />
                  <span className="select-none text-button-ghost-text button-text-large">
                    Enter for more
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-200 left-200 h-fit w-fit -z-1"></div>
      <header className="z-90 max-w-screen w-screen transition-all duration-0 fixed left-0 top-0 ch-template-center2rows">
        <div className="ab-channel-header w-full relative z-10">
          <div className="ch-content w-full max-w-w1440 mx-auto flex items-center">
            {/* LEFT SIDE */}
            <div className="ch-left flex items-center flex-none">
              {/* MENU BUTTON */}
              <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed lg:hover:disabled:bg-button-ghost-background-disabled disabled:bg-button-ghost-background-disabled border-0125 border-transparent p-100 md:hidden mr-100">
                <i className="ab-icon !not-italic text-button-ghost-icon group-disabled/ab-button:text-button-ghost-icon-disabled text-size-800 mr-0 ab-menu"></i>
                <span className="select-none text-button-ghost-text group-disabled/ab-button:text-button-ghost-text-disable button-text-large hidden"></span>

                {/* LOADER */}
                <div className="flex items-center justify-center -z-1 opacity-0 absolute inset-0 ab-btn-loading-wrapper transition-all">
                  <div className="relative animate-spin flex items-center justify-center w-300 h-300">
                    <div className="h-050 w-050 rounded-circle absolute left-50% -translate-x-50% top-0 z-1 bg-btn-loading-transparent" />
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
                    />
                  </div>
                </div>
              </button>

              {/* SIDEBAR MOBILE */}
              <div
                id="channel-sidebar-mobile"
                className="h-0 overflow-hidden no-scrollbar bg-overlay ch-sidebar ch-menu-mobile-wrapper transition-all duration-200 ease-linear"
              >
                <div className="overflow-auto bg-background shadow-elevation-500 pb-300 flex flex-col max-h-full">
                  {/* LANGUAGE SELECT */}
                  <div className="relative p-200">
                    <div className="h-300 flex items-center justify-between w-full">
                      <p className="ui-text-large">Language edition</p>

                      <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed lg:hover:disabled:bg-button-ghost-background-disabled disabled:bg-button-ghost-background-disabled border-0125 border-transparent py-050 px-100">
                        <span className="select-none text-button-ghost-text group-disabled/ab-button:text-button-ghost-text-disable button-text-medium">
                          <div className="flex items-center">
                            <img
                              width="22"
                              height="16"
                              className="mr-100"
                              alt="Vietnamese"
                              src="http://admin.coinjdg.com/wp-content/uploads/2025/12/vn.png"
                            />
                            <p className="ui-text-small">Vie</p>
                          </div>
                        </span>

                        <i className="ab-icon !not-italic text-button-ghost-icon group-disabled/ab-button:text-button-ghost-icon-disabled text-size-400 ml-100 ab-chevron_right"></i>

                        {/* loader */}
                        <div className="flex items-center justify-center -z-1 opacity-0 absolute inset-0 ab-btn-loading-wrapper transition-all">
                          <div className="relative animate-spin flex items-center justify-center w-200 h-200">
                            <div className="h-050 w-050 rounded-circle absolute left-50% -translate-x-50% top-0 z-1 bg-btn-loading-transparent"></div>
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

                  <div className="bg-divider h-0125 w-full mb-050"></div>

                  {/* LANGUAGE LIST + MENU */}
                  <div className="h-auto relative overflow-hidden transition-all duration-300">
                    {/* LANGUAGE LIST */}
                    <div className="transition-all duration-300 w-full overflow-y-auto no-scrollbar max-h-h300 flex flex-col absolute translate-x-100%">
                      <div className="flex items-center p-200 group hover:bg-background-subtle order-1">
                        <img
                          width="22"
                          height="16"
                          alt="Vietnamese"
                          src="http://admin.coinjdg.com/wp-content/uploads/2025/12/vn.png"
                        />
                        <p className="ml-100 text-text-primary ui-text-small-emphasis">
                          Vietnamese
                        </p>
                      </div>

                      <div className="flex items-center p-200 group hover:bg-background-subtle order-2">
                        <img
                          width="22"
                          height="16"
                          alt="English"
                          src="http://admin.coinjdg.com/wp-content/uploads/2025/12/gb.png"
                        />
                        <p className="ml-100 text-text-primary ui-text-small">
                          English
                        </p>
                      </div>
                    </div>

                    {/* MAIN MENU */}
                    <div className="flex flex-col transition-all duration-300">
                      <Link
                        className="px-200 py-150 text-text-primary ui-text-large-emphasis"
                        href="/"
                      >
                        Home
                      </Link>
                      <Link
                        className="px-200 py-150 text-text-primary ui-text-large"
                        href="/learn"
                      >
                        Learn
                      </Link>
                      <Link
                        className="px-200 py-150 text-text-primary ui-text-large"
                        href="/series"
                      >
                        Series
                      </Link>
                      <Link
                        className="px-200 py-150 text-text-primary ui-text-large"
                        href="/report"
                      >
                        Report
                      </Link>
                      <Link
                        className="px-200 py-150 text-text-primary ui-text-large"
                        href="/courses"
                      >
                        Courses
                      </Link>

                      <div className="bg-divider h-0125 w-full my-050"></div>

                      {/* SIGN IN */}
                      <Link className="lg:ml-150" href="/signin">
                        <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed disabled:bg-button-ghost-background-disabled border-0125 border-transparent py-100 px-150 lg:hidden">
                          <i className="ab-icon !not-italic text-button-ghost-icon mr-100 text-size-600 ab-signin"></i>
                          <span className="select-none text-button-ghost-text button-text-large !text-text-primary !ui-text-large">
                            Sign in
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* SEARCH BUTTONS */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="group/ab-button relative select-none items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed disabled:bg-button-ghost-background-disabled border-0125 border-transparent p-100 ch-search w-fit h-fit md:w-w136 lg:w-w320 md:h-600 hidden md:hidden"
              >
                <i className="ab-icon !not-italic text-button-ghost-icon text-size-800 mr-0 ab-search" />
              </button>

              <button
                onClick={() => setIsSearchOpen(true)}
                className="group/ab-button relative select-none items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed p-0 border-none md:w-w136 lg:w-w320 ch-search w-fit h-fit md:h-600 hidden md:block"
              >
                <span className="select-none button-text-large text-button-text-text active:text-button-text-text-pressed">
                  <div className="select-none h-full w-full hidden md:flex items-center px-200 py-150 border-0125 bg-background rounded-circle border-border-subtle">
                    <div className="w-300 h-300 mr-200">
                      <i className="ab-icon !not-italic text-size-800 text-text-primary ab-search"></i>
                    </div>
                    <span className="ui-text-medium text-text-subtlest">
                      Search
                    </span>
                  </div>
                </span>
              </button>
            </div>

            {/* CENTER SECTION */}
            <div className="ch-center grow">
              <div className="ch-logo-wrapper flex-none">
                <Link className="flex items-center" href="/">
                  <div className="h-400 md:h-500">
                    <img
                      alt="Upside logo"
                      width="110"
                      height="32"
                      className="h-full w-auto object-cover"
                      src="/assets/logo/coin98-insight.svg"
                    />
                  </div>
                </Link>
              </div>

              {/* DESKTOP MENU */}
              <div className="ch-sidebar ch-menu-wrapper w-0 h-0 overflow-hidden flex items-center">
                <div className="ch-menu flex items-center h-full">
                  <Link
                    className="h-full mx-150 lg:mx-250 flex items-center ui-text-medium text-text-primary relative"
                    href="/"
                  >
                    <span className="overflow-hidden whitespace-nowrap text-ellipsis max-w-1500">
                      Home
                    </span>
                    <div className="h-025 w-full absolute bottom-0 left-0 bg-icon z-1"></div>
                  </Link>

                  <Link
                    className="h-full mx-150 lg:mx-250 flex items-center ui-text-medium text-text-subtlest hover:text-text-primary"
                    href="/learn"
                  >
                    <span className="overflow-hidden whitespace-nowrap text-ellipsis max-w-1500">
                      Learn
                    </span>
                  </Link>

                  <Link
                    className="h-full mx-150 lg:mx-250 flex items-center ui-text-medium text-text-subtlest hover:text-text-primary"
                    href="/series"
                  >
                    <span className="overflow-hidden whitespace-nowrap text-ellipsis max-w-1500">
                      Series
                    </span>
                  </Link>

                  <Link
                    className="h-full mx-150 lg:mx-250 flex items-center ui-text-medium text-text-subtlest hover:text-text-primary"
                    href="/report"
                  >
                    <span className="overflow-hidden whitespace-nowrap text-ellipsis max-w-1500">
                      Report
                    </span>
                  </Link>

                  <Link
                    className="h-full mx-150 lg:mx-250 flex items-center ui-text-medium text-text-subtlest hover:text-text-primary"
                    href="/courses"
                  >
                    <span className="overflow-hidden whitespace-nowrap text-ellipsis max-w-1500">
                      Courses
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center justify-end flex-none">
              <div className="flex items-center justify-end flex-none">
                <div className="hidden md:block">
                  <div>
                    <div
                      id="kF0fGJaTHZvb52ey"
                      data-show="close"
                      className="overflow-hidden relative w-max h-max group/dropdown data-[show=open]:overflow-visible"
                    >
                      <div className="flex items-center relative px-150 py-100 rounded-050 hover:bg-button-ghost-background-pressed">
                        <img
                          width="22"
                          height="16"
                          alt="Vietnamese"
                          src="http://admin.coinjdg.com/wp-content/uploads/2025/12/vn.png"
                        />
                        <p className="ui-text-small ml-100 mr-050">Vie</p>
                        <i className="ab-icon !not-italic text-size-600 ab-chevron_down"></i>
                      </div>

                      <div
                        className="w-max h-max absolute z-[100] overflow-hidden bg-transparent transition-transform ease-linear pt-150 top-100% right-0"
                        style={{ transitionDuration: "0ms" }}
                      >
                        <div className="ui-text-medium rounded-050 bg-background border-0125 border-border shadow-elevation-none group-data-[show=open]/dropdown:shadow-elevation-500">
                          <div className="flex flex-col">
                            <div className="text-text-subtlest px-200 py-100 border-b-0125 ui-text-x-small-emphasis">
                              AVAILABLE EDITIONS
                            </div>

                            <div className="max-h-h300 overflow-y-auto no-scrollbar w-w240 flex flex-col relative">
                              <div className="flex items-center p-200 group hover:bg-background-subtle cursor-pointer order-1">
                                <img
                                  width="22"
                                  height="16"
                                  alt="Vietnamese"
                                  src="http://admin.coinjdg.com/wp-content/uploads/2025/12/vn.png"
                                />
                                <p className="ml-100 text-text-primary ui-text-small-emphasis">
                                  Vietnamese
                                </p>
                              </div>

                              <div className="flex items-center p-200 group hover:bg-background-subtle cursor-pointer order-2">
                                <img
                                  width="22"
                                  height="16"
                                  alt="English"
                                  src="http://admin.coinjdg.com/wp-content/uploads/2025/12/gb.png"
                                />
                                <p className="ml-100 text-text-primary ui-text-small">
                                  English
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link className="lg:ml-150" href="/signin">
                <button className="group/ab-button relative select-none items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed lg:hover:disabled:bg-button-ghost-background-disabled disabled:bg-button-ghost-background-disabled border-0125 border-transparent py-100 px-150 hidden md:flex lg:hidden">
                  <i className="ab-icon !not-italic text-button-ghost-icon group-disabled/ab-button:text-button-ghost-icon-disabled mr-100 text-size-600 ab-signin"></i>
                  <span className="select-none text-button-ghost-text group-disabled/ab-button:text-button-ghost-text-disable button-text-large"></span>

                  <div className="flex items-center justify-center -z-1 opacity-0 absolute inset-0 ab-btn-loading-wrapper transition-all">
                    <div className="relative animate-spin flex items-center justify-center w-300 h-300">
                      <div className="h-050 w-050 rounded-circle absolute left-50% -translate-x-50% top-0 z-1 bg-btn-loading-transparent"></div>
                      <div
                        className="w-full h-full rounded-circle border-box bg-btn-loading-transparent"
                        style={{
                          padding: "4px",
                          mask: "conic-gradient(rgba(0,0,0,0) 45deg, #000) subtract, linear-gradient(#000 0 0) content-box",
                        }}
                      ></div>
                    </div>
                  </div>
                </button>
              </Link>

              <button className="group/ab-button relative select-none items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed bg-button-primary-background lg:hover:bg-button-primary-background-hovered active:bg-button-primary-background-pressed lg:hover:disabled:bg-button-primary-background-disabled disabled:bg-button-primary-background-disabled border-0125 border-button-primary-background lg:hover:border-button-primary-background-hovered active:border-button-primary-background-pressed lg:hover:disabled:border-button-primary-background-disabled disabled:border-button-primary-background-disabled py-100 px-150 hidden lg:block">
                <i className="ab-icon !not-italic text-button-primary-icon group-disabled/ab-button:text-button-primary-icon-disabled text-size-400 mr-100 ab-signin"></i>
                <span className="select-none text-button-primary-text group-disabled/ab-button:text-button-primary-text-disable button-text-large">
                  Sign in
                </span>

                <div className="flex items-center justify-center -z-1 opacity-0 absolute inset-0 ab-btn-loading-wrapper transition-all">
                  <div className="relative animate-spin flex items-center justify-center w-300 h-300">
                    <div className="bg-g-1 h-050 w-050 rounded-circle absolute left-50% -translate-x-50% top-0 z-1"></div>
                    <div
                      className="w-full h-full rounded-circle border-box bg-g-1"
                      style={{
                        padding: "4px",
                        mask: "conic-gradient(rgba(0,0,0,0) 45deg, #000) subtract, linear-gradient(#000 0 0) content-box",
                      }}
                    ></div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setIsSearchOpen(true)}
                className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed disabled:bg-button-ghost-background-disabled border-0125 border-transparent p-100 ch-search w-fit h-fit md:w-w136 lg:w-w320 md:h-600 md:hidden"
              >
                <i className="ab-icon !not-italic text-button-ghost-icon group-disabled/ab-button:text-button-ghost-icon-disabled text-size-800 mr-0 ab-search"></i>
              </button>

              <button
                onClick={() => setIsSearchOpen(true)}
                className="group/ab-button relative select-none items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed p-0 border-none hidden md:w-w136 lg:w-w320 ch-search w-fit h-fit md:h-600 md:hidden"
              >
                <span className="select-none button-text-large text-button-text-text active:text-button-text-text-pressed disabled:text-button-text-text-disabled">
                  <div className="select-none h-full w-full hidden md:flex items-center px-200 py-150 transition-all duration-200 md:hover:cursor-text border-0125 bg-background rounded-circle border-border-subtle">
                    <div className="w-300 h-300 mr-200">
                      <i className="ab-icon !not-italic text-size-800 text-text-primary ab-search"></i>
                    </div>
                    <span className="ui-text-medium text-text-subtlest">
                      Search
                    </span>
                  </div>
                </span>

                <div className="flex items-center justify-center -z-1 opacity-0 absolute inset-0 ab-btn-loading-wrapper transition-all">
                  <div className="relative animate-spin flex items-center justify-center w-300 h-300">
                    <div className="h-050 w-050 rounded-circle absolute left-50% -translate-x-50% top-0 z-1 bg-btn-loading-transparent"></div>
                    <div
                      className="w-full h-full rounded-circle border-box bg-btn-loading-transparent"
                      style={{
                        padding: "4px",
                        mask: "conic-gradient(rgba(0,0,0,0) 45deg, #000) subtract, linear-gradient(#000 0 0) content-box",
                      }}
                    ></div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-divider w-full ch-divider-footer h-0125 absolute bottom-0 left-0 right-0 transition-all duration-200 ease-linear">
            <Script
              src="https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js"
              strategy="afterInteractive"
            />

            {/* Render widget without JSX */}
            {React.createElement("gecko-coin-price-marquee-widget", {
              locale: "en",
              outlined: "true",
              "coin-ids": "",
              "initial-currency": "usd",
            })}
          </div>
        </div>
      </header>
    </>
  );
}
