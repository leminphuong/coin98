"use client";

import Link from "next/link";

/* ===== TYPES ===== */
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

/* ===== POST CARD (GIỮ NGUYÊN UI CỦA BẠN) ===== */
function PostCard({ post }: { post: PostItem }) {
  const author = post.authors?.[0];

  return (
    <Link href={`/${post.slug}`} className="block w-full">
      {/* MOBILE */}
      <div className="md:hidden transition-all bg-background py-300 px-200">
        <div className="ui-text-small text-text-secondary flex items-center mb-100">
          {author && (
            <>
              <img
                src={author.avatar}
                className="w-300 h-300 rounded-circle mr-100"
              />
              <span className="ui-text-x-small">{author.name}</span>
            </>
          )}
          <span className="ml-150">{post.date}</span>
        </div>

        <p className="article-h6">{post.title}</p>
        <p className="article-text-x-small line-clamp-3 mt-100">
          {post.excerpt}
        </p>

        <div className="mt-150 ui-text-small">{post.readTime}</div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block transition-all bg-background p-300">
        <div className="flex justify-between">
          <div>
            <p className="article-h4">{post.title}</p>
            <p className="article-text-x-small line-clamp-3 mt-150">
              {post.excerpt}
            </p>
          </div>

          {post.image && (
            <img
              src={post.image}
              className="w-w200 aspect-3-2 rounded-050 object-cover"
            />
          )}
        </div>

        <div className="mt-200 ui-text-small">{post.readTime}</div>
      </div>
    </Link>
  );
}

/* ===== SAVED TAB ===== */
export default function SavedTab({ posts }: { posts: PostItem[] }) {



  return <>{posts.map((p) => <PostCard key={p.slug} post={p} />)}</>;
}
