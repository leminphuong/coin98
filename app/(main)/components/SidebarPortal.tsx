"use client";

import React from "react";

export default function SidebarPortal() {
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

          <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 lg:disabled:cursor-not-allowed bg-button-ghost-background p-100 lg:hidden">
            <i className="ab-icon !not-italic text-button-ghost-icon text-size-800 ab-cancel"></i>
          </button>
        </div>

        {/* Select All */}
        <div className="group/toggleCheck flex items-center md:hover:cursor-pointer w-fit p-150 px-300 pb-200">
          <ToggleCheck />
          <div className="flex flex-col items-start ml-200">
            <span className="text-text-primary ui-text-medium">Select all</span>
          </div>
        </div>

        <div className="px-300">
          <div className="bg-divider h-0125 w-full" />
        </div>

        {/* Scrollable */}
        <div className="h-[calc(100%_-_94px)] overflow-y-auto">
          {/* SECTION 1 */}
          <Accordion title="Người mới bắt đầu" />

          <Accordion title="Kiến thức cơ bản">
            <AccordionItem label="Lưu trữ" />
            <AccordionItem label="Bảo mật" />
            <AccordionItem label="Mua bán" />
            <AccordionItem label="Sàn giao dịch" />
            <AccordionItem label="Công cụ" />
            <AccordionItem label="Đầu tư Crypto" />
            <AccordionItem label="Thuật ngữ Crypto" />
            <AccordionItem label="Thêm mạng" />
          </Accordion>

          <Accordion title="Airdrop" />
          <Accordion title="Kinh nghiệm" />
          <Accordion title="Trading" />

          <Accordion title="Kinh tế - Tài chính">
            <AccordionItem label="Tổ chức tài chính" />
            <AccordionItem label="CBDC" />
            <AccordionItem label="Sự kiện" />
            <AccordionItem label="Phân tích tài chính" />
            <AccordionItem label="Nhân vật" />
            <AccordionItem label="Thuật ngữ tài chính" />
          </Accordion>

          <Accordion title="Coin & Token" />
          <Accordion title="NFT" />
          <Accordion title="Gaming" />
          <Accordion title="Web3" />
          <Accordion title="AI" />
          <Accordion title="Layer 2" />
        </div>
      </div>

      <div className="bg-divider w-0125 h-full" />
    </div>
  );
}

/* ------------------- COMPONENTS ------------------- */

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
      {/* Checkbox */}
      <div className="group/toggleCheck flex items-center md:hover:cursor-pointer w-fit absolute top-200">
        <div className="flex items-center rounded-075 p-025 transition-all duration-200 ease-linear h-300 w-300 bg-toggle-background group-hover/toggleCheck:bg-toggle-background-hovered">
          <div className="rounded-050 transition-all duration-200 ease-in-out border-025 h-full w-full flex justify-center border-border bg-toggle-background group-hover/toggleCheck:border-border-bold">
            <div className="rotate-45 mt-0125 relative rounded-025 w-075 mx-auto bg-transparent overflow-hidden transition-all duration-200 ease-in-out h-150">
              <div className="overflow-hidden transition-all duration-100 ease-in-out h-025 bg-background absolute bottom-0 left-0 -rotate-180 w-0 delay-100"></div>
              <div className="overflow-hidden transition-all duration-100 ease-in-out w-025 bg-background absolute bottom-0 right-0 h-0"></div>
            </div>
          </div>
        </div>
        <div className="flex-col items-start ml-200 hidden">
          <span className="text-text-primary ui-text-medium"></span>
          <span className="mt-050 text-text-subtlest break-work whitespace-pre-wrap ui-text-medium hidden"></span>
        </div>
      </div>

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

function AccordionItem({ label }: { label: string }) {
  return (
    <div className="group/toggleCheck flex items-center w-fit p-150">
      <ToggleCheck />
      <div className="flex flex-col items-start ml-200">
        <span className="text-text-primary ui-text-medium">{label}</span>
      </div>
    </div>
  );
}
