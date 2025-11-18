"use client";

import Link from "next/link";

export interface ArticleCardHorizontalFullProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  avatar: string;
  author: string;
  date: string;
  readTime: string;
}

export default function ArticleCardHorizontalFull({
  slug,
  title,
  excerpt,
  image,
  avatar,
  author,
  date,
  readTime,
}: ArticleCardHorizontalFullProps) {
  return (
    <div>
      <Link href={`/${slug}`}>
        <div
          className="transition-all duration-300 bg-background lg:hover:bg-background-hovered article-horizontal select-none overflow-hidden lg:py-300 lg:px-200 py-300 px-200"
          draggable="false"
        >
          {/* AUTHOR ROW */}
          <div className="ui-text-small text-text-secondary min-h-300 flex-wrap items-center lg:mb-100 mb-100 lg:flex hidden">
            
            <div className="flex items-center h-max ui-text-small text-text-primary">
              <div className="aspect-square ab-avatar-people ab-avatar-size-24 flex-none mr-100">
                <img
                  alt="Avatar"
                  src={avatar}
                  width={32}
                  height={32}
                  className="avatar-img aspect-square w-full object-cover"
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

          {/* MAIN CONTENT ROW */}
          <div className="flex lg:-mx-150 -mx-100 flex-row-reverse">
            
            {/* IMAGE RIGHT */}
            <div className="flex-none lg:mx-150 w-600 mx-100 block">
              <picture className="block w-full relative">
                <img
                  alt={title}
                  src={image}
                  width={600}
                  height={400}
                  className="object-cover rounded-050 lg:aspect-3-2 aspect-square w-full rounded-050"
                />
              </picture>
            </div>

            {/* TEXT LEFT */}
            <div className="flex-1 lg:mx-150 mx-100">
              <p className="text-text-primary break-words lg:article-h6 article-h7">
                {title}
              </p>

              <div className="lg:mt-100 hidden">
                <span className="article-text-x-small break-words line-clamp-3 text-text-secondary">
                  {excerpt}
                </span>
              </div>
            </div>
          </div>

          {/* READ TIME - DESKTOP ONLY */}
          <div className="h-400 items-center justify-between lg:mt-150 hidden">
            <div className="flex items-center">
              <div className="box-border badge flex w-fit items-center justify-center rounded-circle border-0125 px-100 py-0125 border-badge-labeled-neutral-border bg-badge-labeled-neutral-background h-300 text-text-primary my-050 whitespace-nowrap">
                <span className="ui-text-small text-badge-labeled-neutral-text">
                  {readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>

    </div>
  );
}
