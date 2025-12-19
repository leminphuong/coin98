"use client";

import { useEffect } from "react";

interface BodyClassProps {
  className: string | string[];
}

export default function BodyClass({ className }: BodyClassProps) {
  useEffect(() => {
    const classes = Array.isArray(className) ? className : [className];
    document.body.classList.add(...classes);

    return () => {
      document.body.classList.remove(...classes);
    };
  }, [className]);

  return null;
}
