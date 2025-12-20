// hooks/useCopyLink.ts
import { useState } from "react";

export function useCopyLink() {
  const [copied, setCopied] = useState(false);

  const copy = async (text?: string) => {
    try {
      const value = text || window.location.href;
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

  return { copied, copy };
}
