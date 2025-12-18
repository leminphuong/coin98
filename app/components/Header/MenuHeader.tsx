import Link from "next/link";
import Script from "next/script";
import React, { useState } from "react";
import { useSearch } from "@/components/SearchContext";
import { useLocale } from "@/components/useLocale";
import { usePathname } from "next/navigation";

interface MenuHeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  locale: "vi" | "en";
}

export default function MenuHeader({
  isSidebarOpen,
  setIsSidebarOpen,
  locale: serverLocale,
}: MenuHeaderProps) {
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const [isChangingLocale, setIsChangingLocale] = useState(false);

  const handleChangeLocale = () => {
    const nextLocale = locale === "vi" ? "en" : "vi";

    setIsChangingLocale(true);

    // set cookie cho server
    document.cookie = `locale=${nextLocale}; path=/; max-age=31536000`;

    // optional: giữ local cho UX
    localStorage.setItem("locale", nextLocale);

    // cho loader render trước khi reload
    requestAnimationFrame(() => {
      window.location.reload();
    });
  };

  const { locale, changeLocale } = useLocale(serverLocale);

  const { isSearchOpen, setIsSearchOpen } = useSearch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-200 left-200 h-fit w-fit -z-1"></div>
      <header className="z-90 max-w-screen w-screen transition-all duration-0 fixed left-0 top-0 ch-template-center2rows">
        <div className="ab-channel-header w-full relative z-10">
          <div className="ch-content w-full max-w-w1440 mx-auto flex items-center">
            {/* LEFT SIDE */}
            <div className="ch-left flex items-center flex-none">
              {/* MENU BUTTON */}
              <button
                onClick={() => setIsSidebarOpen((prev) => !prev)}
                className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed lg:hover:disabled:bg-button-ghost-background-disabled disabled:bg-button-ghost-background-disabled border-0125 border-transparent p-100 md:hidden mr-100"
              >
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
                className={`no-scrollbar bg-overlay ch-sidebar ch-menu-mobile-wrapper transition-all duration-200 ease-linear
    ${isSidebarOpen ? "open h-auto" : "h-0 overflow-hidden"}`}
              >
                <div className="overflow-auto bg-background shadow-elevation-500 pb-300 flex flex-col max-h-full">
                  {/* LANGUAGE SELECT */}
                  <div className="relative p-200">
                    <div className="h-300 flex items-center justify-between w-full">
                      <p className="ui-text-large">Language edition</p>

                      <button
                        onClick={handleChangeLocale}
                        disabled={isChangingLocale}
                        className="group/ab-button relative select-none flex items-center justify-center rounded-050
    transition-all duration-200 ease-linear
    lg:disabled:cursor-not-allowed
    bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered
    active:bg-button-ghost-background-pressed
    lg:hover:disabled:bg-button-ghost-background-disabled
    disabled:bg-button-ghost-background-disabled
    border-0125 border-transparent py-050 px-100"
                      >
                        {/* CONTENT */}
                        <span
                          className={`select-none text-button-ghost-text button-text-medium transition-opacity ${
                            isChangingLocale ? "opacity-0" : "opacity-100"
                          }`}
                        >
                          <div className="flex items-center">
                            <img
                              width="22"
                              height="16"
                              className="mr-100"
                              alt={locale === "vi" ? "English" : "Vietnamese"}
                              src={
                                locale === "vi"
                                  ? "http://admin.coinjdg.com/wp-content/uploads/2025/12/gb.png"
                                  : "http://admin.coinjdg.com/wp-content/uploads/2025/12/vn.png"
                              }
                            />
                            <p className="ui-text-small">
                              {locale === "vi" ? "Eng" : "Vie"}
                            </p>
                          </div>
                        </span>

                        <i
                          className={`ab-icon !not-italic text-button-ghost-icon text-size-400 ml-100 ab-chevron_right transition-opacity ${
                            isChangingLocale ? "opacity-0" : "opacity-100"
                          }`}
                        />

                        {/* LOADER */}
                        <div
                          className={`flex items-center justify-center absolute inset-0 transition-opacity ${
                            isChangingLocale
                              ? "opacity-100 z-10"
                              : "opacity-0 -z-1"
                          }`}
                        >
                          <div className="relative animate-spin flex items-center justify-center w-200 h-200">
                            <div className="h-050 w-050 rounded-circle absolute left-50% -translate-x-50% top-0 z-1 bg-btn-loading-transparent" />
                            <div
                              className="w-full h-full rounded-circle border-box bg-btn-loading-transparent"
                              style={{
                                padding: "4px",
                                WebkitMask:
                                  "conic-gradient(#0000 45deg, #000), linear-gradient(#000 0 0) content-box",
                                mask: "conic-gradient(#0000 45deg, #000), linear-gradient(#000 0 0) content-box",
                                WebkitMaskComposite: "source-out",
                                maskComposite: "subtract",
                              }}
                            />
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

                    <div className="flex flex-col transition-all duration-300">
                      <Link
                        href="/"
                        onClick={() => setIsSidebarOpen(false)}
                        className={`px-200 py-150 ui-text-large-emphasis ${
                          isActive("/")
                            ? "text-text-primary bg-background-subtle"
                            : "text-text-subtlest"
                        }`}
                      >
                        Home
                      </Link>

                      <Link
                        href="/learn"
                        onClick={() => setIsSidebarOpen(false)}
                        className={`px-200 py-150 ui-text-large ${
                          isActive("/learn")
                            ? "text-text-primary bg-background-subtle"
                            : "text-text-subtlest"
                        }`}
                      >
                        Learn
                      </Link>

                      <Link
                        href="/series"
                        onClick={() => setIsSidebarOpen(false)}
                        className={`px-200 py-150 ui-text-large ${
                          isActive("/series")
                            ? "text-text-primary bg-background-subtle"
                            : "text-text-subtlest"
                        }`}
                      >
                        Series
                      </Link>

                      <Link
                        href="/report"
                        onClick={() => setIsSidebarOpen(false)}
                        className={`px-200 py-150 ui-text-large ${
                          isActive("/report")
                            ? "text-text-primary bg-background-subtle"
                            : "text-text-subtlest"
                        }`}
                      >
                        Report
                      </Link>

                      <Link
                        href="/courses"
                        onClick={() => setIsSidebarOpen(false)}
                        className={`px-200 py-150 ui-text-large ${
                          isActive("/courses")
                            ? "text-text-primary bg-background-subtle"
                            : "text-text-subtlest"
                        }`}
                      >
                        Courses
                      </Link>

                      <div className="bg-divider h-0125 w-full my-050"></div>

                      {/* SIGN IN */}
                      <Link className="lg:ml-150" href="/signin">
                        <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background py-100 px-150 lg:hidden">
                          <i className="ab-icon !not-italic text-button-ghost-icon mr-100 text-size-600 ab-signin"></i>
                          <span className="select-none text-button-ghost-text ui-text-large">
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
                  {/* HOME */}
                  <Link
                    href="/"
                    className={`h-full mx-150 lg:mx-250 flex items-center ui-text-medium relative ${
                      isActive("/")
                        ? "text-text-primary"
                        : "text-text-subtlest hover:text-text-primary"
                    }`}
                  >
                    <span className="overflow-hidden whitespace-nowrap text-ellipsis max-w-1500">
                      Home
                    </span>

                    {isActive("/") && (
                      <div className="h-025 w-full absolute bottom-0 left-0 bg-icon z-1" />
                    )}
                  </Link>

                  {/* LEARN */}
                  <Link
                    href="/learn"
                    className={`h-full mx-150 lg:mx-250 flex items-center ui-text-medium relative ${
                      isActive("/learn")
                        ? "text-text-primary"
                        : "text-text-subtlest hover:text-text-primary"
                    }`}
                  >
                    <span className="overflow-hidden whitespace-nowrap text-ellipsis max-w-1500">
                      Learn
                    </span>

                    {isActive("/learn") && (
                      <div className="h-025 w-full absolute bottom-0 left-0 bg-icon z-1" />
                    )}
                  </Link>

                  {/* SERIES */}
                  <Link
                    href="/series"
                    className={`h-full mx-150 lg:mx-250 flex items-center ui-text-medium relative ${
                      isActive("/series")
                        ? "text-text-primary"
                        : "text-text-subtlest hover:text-text-primary"
                    }`}
                  >
                    <span className="overflow-hidden whitespace-nowrap text-ellipsis max-w-1500">
                      Series
                    </span>

                    {isActive("/series") && (
                      <div className="h-025 w-full absolute bottom-0 left-0 bg-icon z-1" />
                    )}
                  </Link>

                  {/* REPORT */}
                  <Link
                    href="/report"
                    className={`h-full mx-150 lg:mx-250 flex items-center ui-text-medium relative ${
                      isActive("/report")
                        ? "text-text-primary"
                        : "text-text-subtlest hover:text-text-primary"
                    }`}
                  >
                    <span className="overflow-hidden whitespace-nowrap text-ellipsis max-w-1500">
                      Report
                    </span>

                    {isActive("/report") && (
                      <div className="h-025 w-full absolute bottom-0 left-0 bg-icon z-1" />
                    )}
                  </Link>

                  {/* COURSES */}
                  <Link
                    href="/courses"
                    className={`h-full mx-150 lg:mx-250 flex items-center ui-text-medium relative ${
                      isActive("/courses")
                        ? "text-text-primary"
                        : "text-text-subtlest hover:text-text-primary"
                    }`}
                  >
                    <span className="overflow-hidden whitespace-nowrap text-ellipsis max-w-1500">
                      Courses
                    </span>

                    {isActive("/courses") && (
                      <div className="h-025 w-full absolute bottom-0 left-0 bg-icon z-1" />
                    )}
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
                      data-show={isOpen ? "open" : "close"}
                      className="overflow-hidden relative w-max h-max group/dropdown data-[show=open]:overflow-visible"
                    >
                      <div
                        className="flex items-center relative px-150 py-100 rounded-050 hover:bg-button-ghost-background-pressed"
                        onClick={() => setIsOpen((prev) => !prev)}
                      >
                        <img
                          width="22"
                          height="16"
                          alt={locale === "vi" ? "Vietnamese" : "English"}
                          src={
                            locale === "vi"
                              ? "http://admin.coinjdg.com/wp-content/uploads/2025/12/vn.png"
                              : "https://admin.coinjdg.com/wp-content/uploads/2025/12/gb.png"
                          }
                        />

                        <p className="ui-text-small ml-100 mr-050">
                          {locale === "vi" ? "Vie" : "Eng"}
                        </p>

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
                              <div
                                className={`flex items-center p-200 cursor-pointer group ${
                                  locale === "vi"
                                    ? "bg-background-subtle"
                                    : "hover:bg-background-subtle"
                                }`}
                                onClick={() => changeLocale("vi")}
                              >
                                <img
                                  width="22"
                                  height="16"
                                  src="https://admin.coinjdg.com/wp-content/uploads/2025/12/vn.png"
                                  alt="Vietnamese"
                                />
                                <p
                                  className={`ml-100 ui-text-small ${
                                    locale === "vi"
                                      ? "ui-text-small-emphasis text-text-primary"
                                      : "text-text-subtlest"
                                  }`}
                                >
                                  Vietnamese
                                </p>
                              </div>

                              <div
                                className={`flex items-center p-200 cursor-pointer group ${
                                  locale === "en"
                                    ? "bg-background-subtle"
                                    : "hover:bg-background-subtle"
                                }`}
                                onClick={() => changeLocale("en")}
                              >
                                <img
                                  width="22"
                                  height="16"
                                  src="https://admin.coinjdg.com/wp-content/uploads/2025/12/gb.png"
                                  alt="English"
                                />
                                <p
                                  className={`ml-100 ui-text-small ${
                                    locale === "en"
                                      ? "ui-text-small-emphasis text-text-primary"
                                      : "text-text-subtlest"
                                  }`}
                                >
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

              <Link href="/signin">
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
              </Link>

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
