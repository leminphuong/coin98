"use client";

import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ProfileTabs() {
  const params = useParams();
  const searchParams = useSearchParams();

  const slug = params?.slug as string | undefined;
  const tab = searchParams.get("tab") || "posts";

  const itemClass = (key: string) =>
    `min-w-1500 select-none transition-all duration-200 ease-linear
     flex items-center p-150 rounded-050
     ${
       tab === key
         ? "ui-text-small-emphasis md:ui-text-medium-emphasis bg-background-highlight text-menu-item-text-highlight"
         : "ui-text-small md:ui-text-medium text-text-primary hover:bg-background-subtle"
     }`;

  /* =========================
     AUTHOR PROFILE
     /author/[slug]?tab=...
  ========================= */
  if (slug) {
    return (
      <div className="py-200 relative">
        <Link href="?tab=posts" className={itemClass("posts")}>
          <i className="ab-icon !not-italic mr-150 md:text-size-800 ab-contribution" />
          Contribution
        </Link>

        <Link href="?tab=about" className={itemClass("about")}>
          <i className="ab-icon !not-italic mr-150 md:text-size-800 ab-admin" />
          About
        </Link>
      </div>
    );
  }

  /* =========================
     MY PROFILE
     /profile?tab=...
  ========================= */
  return (
    <div className="sticky top-1600 md:top-sp160 lg:top-sp160">
      {/* GROUP 1 */}
      <div className="group/profile-menu">
        <div className="py-200 relative">
          <Link href="?tab=posts" className={itemClass("posts")}>
            <i className="ab-icon !not-italic mr-150 md:text-size-800 ab-contribution" />
            Contribution
          </Link>

          <Link href="?tab=about" className={itemClass("about")}>
            <i className="ab-icon !not-italic mr-150 md:text-size-800 ab-admin" />
            About
          </Link>

          <div className="bg-divider h-0125 w-full absolute bottom-0 left-0" />
        </div>
      </div>

      {/* GROUP 2 */}
      <div className="group/profile-menu">
        <div className="py-200 relative">
          <Link href="?tab=saved" className={itemClass("saved")}>
            <i className="ab-icon !not-italic mr-150 md:text-size-800 ab-bookmark_outlined" />
            Saved
          </Link>

          <Link href="?tab=following" className={itemClass("following")}>
            <i className="ab-icon !not-italic mr-150 md:text-size-800 ab-system_following" />
            Following
          </Link>

          <Link href="?tab=learning" className={itemClass("learning")}>
            <i className="ab-icon !not-italic mr-150 md:text-size-800 ab-learner" />
            Learning
          </Link>

          <Link href="?tab=history" className={itemClass("history")}>
            <i className="ab-icon !not-italic mr-150 md:text-size-800 ab-history" />
            Viewing history
          </Link>

          <div className="bg-divider h-0125 w-full absolute bottom-0 left-0" />
        </div>
      </div>

      {/* GROUP 3 */}
      <div className="group/profile-menu">
        <div className="py-200 relative">
          <Link href="?tab=password" className={itemClass("password")}>
            <i className="ab-icon !not-italic mr-150 md:text-size-800 ab-setting" />
            Setting
          </Link>
        </div>
      </div>
    </div>
  );
}
