"use client";

import { useState } from "react";

type Props = {
  slug: string;
};

export default function ArticleActions({ slug }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const fullUrl = `${window.location.origin}/${slug}`;

    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="flex items-center">
      {/* Save */}
      <div className="overflow-hidden relative w-max h-max mr-150">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered border-0125 border-transparent p-100"
        >
          <i className="ab-icon text-button-ghost-icon text-size-800 ab-bookmark_outlined"></i>
        </button>
      </div>

      {/* Copy */}
      <div className="relative w-max h-max group">
        <button
          onClick={handleCopy}
          className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered border-0125 border-transparent p-100"
          aria-label="Copy article link"
        >
          <i className="ab-icon text-size-800 ab-link text-button-ghost-icon"></i>
        </button>

        {/* Tooltip dùng CHUNG */}
        <span
          className={`
            pointer-events-none absolute -top-250 left-1/2 -translate-x-1/2
            text-xs px-100 py-50 rounded-050 whitespace-nowrap
            transition-all duration-150
            ${
              copied
                ? "opacity-100 bg-black text-white"
                : "opacity-0 group-hover:opacity-100 bg-black text-white"
            }
          `}
        >
          {copied ? "Copied" : "Copy link"}
        </span>
      </div>
    </div>
  );
}
