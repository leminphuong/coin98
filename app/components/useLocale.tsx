"use client";

import { useEffect, useState } from "react";

export type Locale = "vi" | "en";

export function useLocale(initialLocale: Locale) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  // 1️⃣ Sync từ localStorage (UX)
  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && saved !== locale) {
      setLocale(saved);
    }
  }, []);

  // 2️⃣ Đổi locale (CLIENT → SERVER)
  const changeLocale = (next: Locale) => {
    // lưu local cho UX
    localStorage.setItem("locale", next);

    // 🔥 QUAN TRỌNG: set cookie để SERVER đọc
    document.cookie = `locale=${next}; path=/; max-age=31536000`;

    setLocale(next);

    // reload để server render đúng locale
    window.location.reload();
  };

  return { locale, changeLocale };
}
