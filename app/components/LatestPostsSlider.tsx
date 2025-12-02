"use client";

import Slider from "react-slick";
import { useRef } from "react";
import LatestPostItem from "@/components/LatestPostItem";
import LatestPostCard from "@/components/LatestPostCard";

import type { PostItem } from "@/types/post";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LatestPostsSlider({ items }: { items: PostItem[] }) {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    infinite: true,
    speed: 450,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, swipe: true } },
    ],
  };

  return (
    <div className="mt-100">
      {/* DESKTOP */}
      <div className="hidden lg:block">
        <Slider ref={sliderRef} {...settings}>
          {items.map((post) => (
            <LatestPostItem key={post.slug} {...post} />
          ))}
        </Slider>
      </div>

      {/* MOBILE */}
      <div className="grid lg:hidden grid-cols-2">
        {items.slice(0, 4).map((post) => (
          <LatestPostCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            image={post.image}
            readTime={post.readTime}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
}
