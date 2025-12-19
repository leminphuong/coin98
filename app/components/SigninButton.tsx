"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuthUser } from "@/hooks/useAuthUser";

type Props = {
  className?: string;
};

type AuthorInfo = {
  id: number;
  slug: string;
  name: string;
  avatar: string | false;
  email: string | null;
};

export default function AuthButton({ className = "" }: Props) {
  const { user, isLoggedIn, logout } = useAuthUser();
  const [open, setOpen] = useState(false);
  const [author, setAuthor] = useState<AuthorInfo | null>(null);

  /* =========================
     FETCH AUTHOR DETAIL
  ========================= */
  useEffect(() => {
    if (!isLoggedIn || !user?.slug) return;

    const controller = new AbortController();

    fetch(
      `https://admin.coinjdg.com/wp-json/toan/v1/author?slug=${
        user.slug
      }&lang=${user.language || "vi"}`,
      { signal: controller.signal }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "success") {
          setAuthor(data.author);
        }
      })
      .catch(() => {});

    return () => controller.abort();
  }, [isLoggedIn, user?.slug, user?.language]);

  /* =========================
     NOT LOGGED IN → SIGN IN
  ========================= */
  if (!isLoggedIn) {
    return (
      <Link href="/signin">
        <button
          className={`group/ab-button relative select-none items-center justify-center
            rounded-050 transition-all duration-200 ease-linear
            bg-button-primary-background
            lg:hover:bg-button-primary-background-hovered
            active:bg-button-primary-background-pressed
            border-0125 border-button-primary-background
            py-100 px-150 hidden lg:block
            ${className}`}
        >
          <i className="ab-icon !not-italic text-button-primary-icon text-size-400 mr-100 ab-signin"></i>
          <span className="select-none text-button-primary-text button-text-large">
            Sign in
          </span>
        </button>
      </Link>
    );
  }

  /* =========================
     DATA FALLBACK
  ========================= */
  const displayName = author?.name || user?.slug;
  const avatarUrl =
    author?.avatar && typeof author.avatar === "string"
      ? author.avatar
      : `https://ui-avatars.com/api/?size=32&background=FEEEAF&color=9F6E3C&name=${encodeURIComponent(
          displayName || "User"
        )}&bold=true&font-size=0.4`;

  return (
    <div
      className={`overflow-hidden relative w-max h-max group/dropdown data-[show=open]:overflow-visible
        ml-150 hidden md:flex ${className}`}
      data-show={open ? "open" : "close"}
    >
      {/* AVATAR */}
      <div
        className="aspect-square ab-avatar-people ab-avatar-size-32 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <img
          alt="profile avatar"
          className="avatar-img aspect-square w-full object-cover"
          src={avatarUrl}
        />
      </div>

      {/* DROPDOWN */}
      <div
        className="w-max h-max absolute z-[100] overflow-hidden bg-transparent
          transition-transform ease-linear pt-150 top-100% right-0 w-w312"
        style={{ transitionDuration: "0ms" }}
      >
        <div className="ui-text-medium rounded-050 bg-background border-0125 border-border shadow-elevation-none group-data-[show=open]/dropdown:shadow-elevation-500">
          {/* PROFILE */}
          <Link
            href="/profile"
            className="px-300 py-200 flex w-full items-center"
          >
            <div className="aspect-square ab-avatar-people ab-avatar-size-48 min-w-600">
              <img
                alt="profile avatar"
                className="avatar-img aspect-square w-full object-cover"
                src={avatarUrl}
              />
            </div>
            <div className="ml-150 flex grow flex-col">
              <span className="capitalize text-size-400 text-text-primary font-medium">
                {displayName}
              </span>
              <span className="ui-text-small text-text-secondary line-clamp-1 break-all">
                {author?.email || user?.email}
              </span>
            </div>
          </Link>

          <div className="bg-divider h-0125 w-full mb-100"></div>

          {/* SAVED */}
          <Link
            href="/profile?tab=saved"
            className="px-300 py-200 flex w-full items-center lg:hover:bg-background-hovered"
          >
            <i className="ab-icon text-size-800 ab-bookmark_outlined"></i>
            <span className="ml-150 ui-text-medium">Saved</span>
          </Link>

          {/* ADMIN */}
          <a
            href="/profile"
            target="_blank"
            className="px-300 py-200 flex w-full items-center lg:hover:bg-background-hovered"
          >
            <i className="ab-icon text-size-800 ab-admin"></i>
            <span className="ml-150 ui-text-medium">Admin</span>
          </a>

          <div className="bg-divider h-0125 w-full mt-100"></div>

          {/* LOGOUT */}
          <button
            onClick={logout}
            className="px-300 py-200 flex w-full items-center lg:hover:bg-background-hovered"
          >
            <span className="ui-text-medium">Sign out</span>
          </button>
        </div>
      </div>
    </div>
  );
}
