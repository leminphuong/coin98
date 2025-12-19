"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Author = {
  id: number;
  slug: string;
  name: string;
  avatar: string;
};

type PostItem = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  authors: Author[];
};

function PostCard({ post }: { post: PostItem }) {
  const author = post.authors?.[0];

  return (
    <Link href={`/${post.slug}`} className="block w-full">
      {/* ================= MOBILE ================= */}
      <div className="transition-all duration-300 bg-background lg:hover:bg-background-hovered article-horizontal select-none overflow-hidden py-300 px-200 md:hidden">
        {/* META */}
        <div className="ui-text-small text-text-secondary min-h-300 flex-wrap items-center mb-100 flex">
          {author && (
            <div className="flex items-center h-max ui-text-small text-text-primary">
              <div className="aspect-square ab-avatar-people ab-avatar-size-24 flex-none mr-100">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="avatar-img aspect-square w-full object-cover"
                />
              </div>
              <div className="line-clamp-1 break-all max-w-w160 ui-text-x-small">
                {author.name}
              </div>
            </div>
          )}
          <div className="m-050 flex items-center justify-center h-100 aspect-square">
            <div className="w-100 aspect-square rounded-circle bg-g block scale-50" />
          </div>
          {post.date}
        </div>

        {/* CONTENT */}
        <div className="flex -mx-150 flex-row-reverse">
          {post.image && (
            <div className="flex-none w-1/3 min-w-1500 mx-150 block">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover rounded-050 aspect-3-2 w-full"
              />
            </div>
          )}

          <div className="flex-1 mx-150">
            <p className="text-text-primary break-words article-h6">
              {post.title}
            </p>
            <div className="mt-100 block">
              <span className="article-text-x-small line-clamp-3 text-text-secondary">
                {post.excerpt}
              </span>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="h-400 items-center justify-between mt-150 flex">
          <div className="box-border badge flex items-center rounded-circle border-0125 px-100 py-0125 bg-badge-labeled-neutral-background h-300">
            <span className="ui-text-small">{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="transition-all duration-300 bg-background lg:hover:bg-background-hovered article-horizontal select-none overflow-hidden p-300 hidden md:block">
        {/* META */}
        <div className="ui-text-small text-text-secondary min-h-300 flex-wrap items-center mb-150 flex">
          {author && (
            <div className="flex items-center h-max ui-text-small text-text-primary">
              <div className="aspect-square ab-avatar-people ab-avatar-size-24 flex-none mr-100">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="avatar-img aspect-square w-full object-cover"
                />
              </div>
              <div className="line-clamp-1 break-all max-w-w160 ui-text-x-small">
                {author.name}
              </div>
            </div>
          )}
          <div className="m-050 flex items-center justify-center h-100 aspect-square">
            <div className="w-100 aspect-square rounded-circle bg-g block scale-50" />
          </div>
          {post.date}
        </div>

        {/* CONTENT */}
        <div className="flex -mx-300 flex-row-reverse">
          {post.image && (
            <div className="flex-none w-30% min-w-w200 mx-300 block">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover rounded-050 aspect-3-2 w-full"
              />
            </div>
          )}

          <div className="flex-1 mx-300">
            <p className="text-text-primary break-words article-h4">
              {post.title}
            </p>
            <div className="mt-150 block">
              <span className="article-text-x-small line-clamp-3 text-text-secondary">
                {post.excerpt}
              </span>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="h-400 items-center justify-between mt-200 flex">
          {/* READ TIME */}
          <div className="flex items-center">
            <div className="box-border badge flex w-fit items-center justify-center rounded-circle border-0125 px-100 py-0125 border-badge-labeled-neutral-border bg-badge-labeled-neutral-background h-300 text-text-primary my-050 whitespace-nowrap">
              <span className="ui-text-small text-badge-labeled-neutral-text">
                {post.readTime}
              </span>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center">
            {/* SAVE */}
            <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible mr-150">
              <button
                type="button"
                className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered border-0125 border-transparent p-100"
              >
                <i className="ab-icon !not-italic text-button-ghost-icon text-size-800 ab-bookmark_outlined" />
              </button>

              <div className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 rounded-050 border border-tooltip-background bg-tooltip-background text-tooltip-text shadow-elevation-none lg:group-hover/tooltip:shadow-elevation-200 mb-150 bottom-100% translate-y-100 lg:group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2">
                Save
                <div className="tooltip-arrow" />
              </div>
            </div>

            {/* COPY LINK */}
            <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible">
              <button
                type="button"
                className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered border-0125 border-transparent p-100"
              >
                <i className="ab-icon !not-italic text-button-ghost-icon text-size-800 ab-link" />
              </button>

              <div className="w-max h-max absolute z-10 overflow-hidden px-075 py-050 text-size-400 rounded-050 border border-tooltip-background bg-tooltip-background text-tooltip-text shadow-elevation-none lg:group-hover/tooltip:shadow-elevation-200 mb-150 bottom-100% translate-y-100 lg:group-hover/tooltip:translate-y-0 left-1/2 -translate-x-1/2">
                Copy link
                <div className="tooltip-arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function PostsTab() {
  const { slug } = useParams<{ slug: string }>();
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [authorName, setAuthorName] = useState("");

  useEffect(() => {
    if (!slug) return;

    fetch(
      `https://admin.coinjdg.com/wp-json/toan/v1/author?slug=${slug}&lang=vi`
    )
      .then((r) => r.json())
      .then((res) => {
        if (res?.status === "success") {
          setPosts(res.author.follow?.posts || []);
          setAuthorName(res.author.name || slug);
        }
      });
  }, [slug]);

  return (
    <>

      {/* LIST */}
      <div className="mt-200">
        {posts.length === 0 ? (
          <div className="h-full w-full max-w-w728 mx-auto">
            {/* HEADER */}
            <div className="flex items-center px-200 md:px-300 pt-300 md:pt-200">
              <button
                className="group/ab-button relative select-none flex items-center justify-center
            rounded-050 transition-all duration-200 ease-linear
            bg-button-tertiary-background
            lg:hover:bg-button-tertiary-background-hovered
            active:bg-button-tertiary-background-pressed
            border-0125 border-button-tertiary-border
            p-050 lg:hidden mr-150"
              >
                <i className="ab-icon !not-italic text-button-tertiary-icon w-300 h-300 flex items-center justify-center text-size-400 ab-menu" />
              </button>

              <div className="flex grow flex-col break-words">
                <span className="ui-text-large-emphasis md:ui-h3-emphasis text-text-primary line-clamp-1">
                  Contribution
                </span>
              </div>

              <div className="min-h-500" />
            </div>

            {/* EMPTY CONTENT */}
            <div className="px-200 md:px-300">
              <div className="bg-background-subtle pb-500 px-1200 pt-200 mt-200 lg:mt-300 flex flex-col items-center">
                <div className="relative w-1300 aspect-square">
                  <img
                    src="http://admin.coinjdg.com/wp-content/uploads/2025/12/channel.svg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-center mt-150">
                  Create your own channel and start making contribution now
                </p>
              </div>
            </div>
          </div>
        ) : (
          posts.map((post) => <PostCard key={post.slug} post={post} />)
        )}
      </div>
    </>
  );
}
