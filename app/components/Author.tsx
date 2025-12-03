"use client";

import Image from "next/image";

interface Author {
  id: number;
  name: string;
  avatar: string;
  url?: string;
}

export default function AuthorItem({ author }: { author: Author }) {
  return (
    <div className="flex items-center h-max ui-text-small text-text-primary">
      <div className="aspect-square ab-avatar-people ab-avatar-size-24 flex-none mr-100">
        <img
          alt={author.name}
          loading="lazy"
          width="32"
          height="32"
          className="avatar-img aspect-square w-full object-cover rounded-full"
          src={author.avatar || "/default-avatar.png"}
        />
      </div>

      <div className="line-clamp-1 break-all max-w-w160 ui-text-x-small md:ui-text-small">
        <span>{author.name}</span>
      </div>
    </div>
  );
}
