"use client";

import { PostItem } from "@/types/post";

export default function SlideItem({ slug, image, title, author, date }: PostItem) {
  return (
    <a
      className=""
      tabIndex={-1}
      href={slug}
      style={{ width: "100%", display: "inline-block" }}
    >
      <div
        draggable={false}
        className="transition-all duration-300 bg-background lg:hover:bg-background-hovered 
                   select-none overflow-hidden p-300 px-200 lg:px-300 box-border flex"
      >
        <picture className="relative flex-none block min-w-200 w-600 md:min-w-30% md:w-30% mr-200">
          <img
            alt={title}
            width={600}
            height={400}
            className="object-cover rounded-050 aspect-square md:aspect-3-2 w-full"
            src={image}
          />
        </picture>

        <div className="flex-1 break-words flex flex-col justify-center lg:justify-start">
          <p className="text-text-primary break-words article-h7 lg:article-h6 lg:mb-100">
            {title}
          </p>

          <div className="ui-text-small text-text-secondary hidden min-h-300 
                          lg:flex flex-wrap items-center mt-050">
            <div className="flex items-center ui-text-small text-text-primary">
              <div className="aspect-square ab-avatar-people ab-avatar-size-24 flex-none mr-100">
                <img
                  alt="Avatar"
                  width={32}
                  height={32}
                  className="avatar-img aspect-square w-full object-cover rounded-circle"
                  src={image}
                />
              </div>

              <div className="line-clamp-1 break-all max-w-w160 ui-text-x-small md:ui-text-small">
                <span>{author}</span>
              </div>
            </div>

            <div className="m-050 flex items-center justify-center h-100 aspect-square">
              <div className="w-100 aspect-square rounded-circle bg-g block scale-50"></div>
            </div>

            {date}
          </div>
        </div>
      </div>
    </a>
  );
}
