"use client";

import { PostItem } from "./types";

export default function MobileItem({ href, image, title, author, date }: PostItem) {
  return (
    <a href={href}>
      <div
        draggable={false}
        className="transition-all duration-300 bg-background select-none 
                   overflow-hidden p-300 px-200 box-border flex"
      >
        <picture className="relative flex-none block min-w-200 w-600 mr-200">
          <img
            alt={title}
            width={600}
            height={400}
            className="object-cover rounded-050 aspect-square w-full"
            src={image}
          />
        </picture>

        <div className="flex-1 break-words flex flex-col justify-center">
          <p className="text-text-primary break-words article-h7 mb-050">
            {title}
          </p>

          <span className="ui-text-x-small text-text-secondary">
            {author} · {date}
          </span>
        </div>
      </div>
    </a>
  );
}
