"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

/* =========================
   SIDEBAR
========================= */
export default function SidebarPortal() {
  const [categories, setCategories] = useState<any[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  const keyword = searchParams.get("keyword") || "";

  useEffect(() => {
    fetch("/wp-json/toan/v1/categories-tree")
      .then((res) => res.json())
      .then((res) => Array.isArray(res) && setCategories(res));
  }, []);

  const goCategory = (slug: string) => {
    router.push(
      `/learn/detail?${keyword ? `keyword=${encodeURIComponent(keyword)}&` : ""}category=${slug}`
    );
  };

  return (
    <div
      id="sidebar-portal"
      className="max-w-w480 lg:max-w-sp320 w-full h-full bg-background z-2 fixed top-0 transition-transform -translate-x-100% lg:translate-x-0 flex pt-sp264 lg:pt-sp200"
    >
      <div className="grow">
        {/* Header */}
        <div className="px-300 py-150 flex items-center justify-between">
          <span className="ui-text-x-small-emphasis text-text-subtlest uppercase">
            Topics
          </span>

          <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 bg-button-ghost-background p-100 lg:hidden">
            <i className="ab-icon !not-italic text-button-ghost-icon text-size-800 ab-cancel"></i>
          </button>
        </div>

        {/* Select All */}
        <div
          className="group/toggleCheck flex items-center md:hover:cursor-pointer w-fit p-150 px-300 pb-200"
          onClick={() =>
            router.push(
              `/learn/detail${keyword ? `?keyword=${encodeURIComponent(keyword)}` : ""}`
            )
          }
        >
          <ToggleCheck />
          <div className="flex flex-col items-start ml-200">
            <span className="text-text-primary ui-text-medium">
              Select all
            </span>
          </div>
        </div>

        <div className="px-300">
          <div className="bg-divider h-0125 w-full" />
        </div>

        {/* Scrollable */}
        <div className="h-[calc(100%_-_94px)] overflow-y-auto">
          {categories.map((parent) => (
            <Accordion key={parent.id} title={parent.name}>
              {parent.children?.map((child: any) => (
                <AccordionItem
                  key={child.id}
                  label={child.name}
                  onClick={() => goCategory(child.slug)}
                />
              ))}
            </Accordion>
          ))}
        </div>
      </div>

      <div className="bg-divider w-0125 h-full" />
    </div>
  );
}

/* =========================
   COMPONENTS (GIỮ UI)
========================= */

function ToggleCheck() {
  return (
    <div className="flex items-center rounded-075 p-025 transition-all duration-200 h-300 w-300 bg-toggle-background group-hover/toggleCheck:bg-toggle-background-hovered">
      <div className="rounded-050 transition-all duration-200 border-025 h-full w-full flex justify-center border-border bg-toggle-background group-hover/toggleCheck:border-border-bold">
        <div className="rotate-45 mt-0125 rounded-025 w-075 mx-auto h-150 relative overflow-hidden transition-all">
          <div className="absolute bottom-0 left-0 w-0 h-025 bg-background -rotate-180 transition-all" />
          <div className="absolute bottom-0 right-0 h-0 w-025 bg-background transition-all" />
        </div>
      </div>
    </div>
  );
}

function Accordion({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  const id = "accordion_" + Math.random().toString(36).slice(2, 10);

  return (
    <div className="flex flex-col relative px-300">
      {/* Label */}
      <label
        htmlFor={id}
        className="flex items-center lg:hover:cursor-pointer select-none py-200 ml-500 peer-checked:[&_.iconWrapper]:rotate-180"
      >
        <span className="flex-1 ui-text-small-emphasis">{title}</span>
        <div className="iconWrapper ml-100 transition-all duration-100">
          <i className="ab-icon !not-italic ab-chevron_down"></i>
        </div>
      </label>

      {/* Content */}
      <div className="h-0 overflow-hidden transition-all duration-100 ease-in-out peer-checked:h-full px-200 select-none">
        {children}
      </div>
    </div>
  );
}

function AccordionItem({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <div
      className="group/toggleCheck flex items-center w-fit p-150 cursor-pointer"
      onClick={onClick}
    >
      <ToggleCheck />
      <div className="flex flex-col items-start ml-200">
        <span className="text-text-primary ui-text-medium">
          {label}
        </span>
      </div>
    </div>
  );
}
