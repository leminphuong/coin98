"use client";

import { useEffect, useState } from "react";

type LangKey = "vi" | "en";

const AUTH_KEY = "amberblocks_auth_user";
const LOCALE_KEY = "locale";
const UPDATE_API =
  "https://admin.coinjdg.com/wp-json/toan/v1/author/update-profile";

export default function SettingsLanguage() {
  const [lang, setLang] = useState<LangKey>("vi");
  const [loading, setLoading] = useState(false);

  /* ===== INIT (giống MenuHeader) ===== */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const localLang = localStorage.getItem(LOCALE_KEY) as LangKey | null;
    if (localLang === "vi" || localLang === "en") {
      setLang(localLang);
      return;
    }

    const rawUser = localStorage.getItem(AUTH_KEY);
    if (rawUser) {
      try {
        const user = JSON.parse(rawUser);
        if (user?.language === "vi" || user?.language === "en") {
          setLang(user.language);
        }
      } catch {}
    }
  }, []);

  /* ===== CHANGE LANGUAGE ===== */
  const changeLanguage = async (nextLang: LangKey) => {
    if (nextLang === lang || loading) return;

    setLoading(true);

    try {
      // 1️⃣ update backend
      const rawUser = localStorage.getItem(AUTH_KEY);
      if (rawUser) {
        const user = JSON.parse(rawUser);
        if (user?.id) {
          await fetch(UPDATE_API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              author_id: user.id,
              language: nextLang,
            }),
          });

          user.language = nextLang;
          localStorage.setItem(AUTH_KEY, JSON.stringify(user));
        }
      }

      // 2️⃣ set cookie cho server
      document.cookie = `locale=${nextLang}; path=/; max-age=31536000`;

      // 3️⃣ set local
      localStorage.setItem(LOCALE_KEY, nextLang);

      // 4️⃣ reload giống MenuHeader
      requestAnimationFrame(() => {
        window.location.reload();
      });
    } catch (e) {
      console.error("Change language failed", e);
      setLoading(false);
    }
  };

  return (
    <div className="h-full max-w-w728 mx-auto">
      {/* HEADER */}
      <div className="flex px-200 md:px-300 items-start mt-300">
        <button
          className="group/ab-button relative select-none flex items-center
            justify-center rounded-050 transition-all duration-200 ease-linear
            bg-button-tertiary-background
            lg:hover:bg-button-tertiary-background-hovered
            border-0125 border-button-tertiary-border
            p-050 lg:hidden mr-150"
        >
          <i className="ab-icon ab-menu text-size-400" />
        </button>

        <div className="flex grow flex-col break-words">
          <span className="ui-text-large-emphasis md:ui-h3-emphasis text-text-primary line-clamp-1">
            Settings
          </span>
        </div>

        <div className="min-h-500" />
      </div>

      {/* CONTENT */}
      <div className="p-300">
        <p className="ui-text-large-emphasis">Content language</p>

        <div
          className={`mt-150 flex flex-col gap-100 ${
            loading ? "opacity-60 pointer-events-none" : ""
          }`}
          role="radiogroup"
        >
          {/* VI */}
          <div
            role="radio"
            aria-checked={lang === "vi"}
            tabIndex={0}
            onClick={() => changeLanguage("vi")}
            className="select-none md:hover:cursor-pointer
              group/toggleRadio flex items-center w-fit p-150 px-0"
          >
            <div className="h-300 w-300 p-025 flex-none rounded-circle transition-all duration-200 ease-linear bg-background">
              <div
                className={`border-025 flex items-center justify-center
                  transition-all duration-200 ease-linear
                  h-full w-full rounded-circle bg-background
                  ${
                    lang === "vi"
                      ? "border-cbr-60"
                      : "border-border group-hover/toggleRadio:border-border-bold"
                  }`}
              >
                <div
                  className={`h-200 w-200 rounded-circle border-025 border-background
                    transition-all duration-200 ease-linear
                    ${lang === "vi" ? "bg-cbr-50" : "bg-inherit"}`}
                />
              </div>
            </div>

            <div className="flex flex-col items-start ml-200">
              <span className="text-text-primary ui-text-medium">
                Tiếng Việt
              </span>
            </div>
          </div>

          {/* EN */}
          <div
            role="radio"
            aria-checked={lang === "en"}
            tabIndex={0}
            onClick={() => changeLanguage("en")}
            className="select-none md:hover:cursor-pointer
              group/toggleRadio flex items-center w-fit p-150 px-0"
          >
            <div
              className={`h-300 w-300 p-025 flex-none rounded-circle
                transition-all duration-200 ease-linear
                ${
                  lang === "en"
                    ? "bg-background"
                    : "bg-background group-hover/toggleRadio:bg-background-hovered"
                }`}
            >
              <div
                className={`border-025 flex items-center justify-center
                  transition-all duration-200 ease-linear
                  h-full w-full rounded-circle bg-background
                  ${
                    lang === "en"
                      ? "border-cbr-60"
                      : "border-border group-hover/toggleRadio:border-border-bold"
                  }`}
              >
                <div
                  className={`h-200 w-200 rounded-circle border-025 border-background
                    transition-all duration-200 ease-linear
                    ${lang === "en" ? "bg-cbr-50" : "bg-inherit"}`}
                />
              </div>
            </div>

            <div className="flex flex-col items-start ml-200">
              <span className="text-text-primary ui-text-medium">
                English
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
