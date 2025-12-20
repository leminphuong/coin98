"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

import PostsTab from "@/components/profile/PostsTab";
import AboutTab from "@/components/profile/AboutTab";
import SavedTab from "@/components/profile/SavedTab";
import FollowingTab from "@/components/profile/FollowingTab";
import LearningTab from "@/components/profile/LearningTab";
import HistoryTab from "@/components/profile/HistoryTab";
import LanguageTab from "@/components/profile/LanguageTab";

const AUTH_KEY = "amberblocks_auth_user";

export default function ProfileTabContent() {
  const params = useParams<{ slug?: string }>();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "posts";

  const [author, setAuthor] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let resolvedSlug = params?.slug;

    // 👉 fallback localStorage
    if (!resolvedSlug && typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem(AUTH_KEY);
        if (raw) resolvedSlug = JSON.parse(raw)?.slug;
      } catch {}
    }

    if (!resolvedSlug) {
      setLoading(false);
      return;
    }

    console.log(resolvedSlug);
    

    setLoading(true);

    fetch(
      `https://admin.coinjdg.com/wp-json/toan/v1/author?slug=${resolvedSlug}&lang=vi`
    )
      .then((r) => r.json())
      .then((res) => {
        if (res?.status === "success") {
          setAuthor(res.author);
        }
      })
      .finally(() => setLoading(false));
  }, [params?.slug]);

  if (loading) return null;
  if (!author) return null;

  /* ===== TAB SWITCH ===== */
  switch (tab) {
    case "about":
      return <AboutTab />;

    case "saved":
      return <SavedTab />;

    case "following":
      return <FollowingTab series={author.follow?.series || []} />;

    case "learning":
      return <LearningTab courses={author.follow?.courses || []} />;

    case "history":
      return <HistoryTab posts={author.history_posts || []} />;

    case "password":
      return <LanguageTab />;

    default:
      return <PostsTab />;
  }
}
