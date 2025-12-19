"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && keyword.trim()) {
      router.push(`/learn/detail?keyword=${encodeURIComponent(keyword.trim())}`);
    }
  };

  return (
    <label
      htmlFor="search"
      className="h-600 bg-background flex items-center py-150 px-200
      rounded-circle border-0125 border-border transition-all duration-200
      focus-within:border-cbr-50 focus-within:shadow-outline-primary"
    >
      <i className="ab-icon mr-150 text-size-800 text-icon ab-search"></i>

      <input
        id="search"
        data-theme="dark"
        placeholder="Search in portal"
        autoComplete="off"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
        className="outline-none bg-transparent flex-1
        text-text-primary placeholder:text-text-subtlest"
      />
    </label>
  );
}
