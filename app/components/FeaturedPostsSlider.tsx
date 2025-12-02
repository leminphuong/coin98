"use client";

import React, { useRef } from "react";
import Slider from "react-slick";

import SliderHeader from "@/components/SliderHeader";
import SlideItem from "@/components/SlideItem";
import MobileItem from "@/components/MobileItem";
import { PostItem } from "@/types/post";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FeaturedPostsSlider() {
  const sliderRef = useRef<Slider | null>(null);

  const next = () => sliderRef.current?.slickNext();
  const prev = () => sliderRef.current?.slickPrev();

  const items: PostItem[] = [
    {
      slug: "/crypto-giam-sau",
      image:
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/posts/p6tq04wjhifax5hz/f3bjwnv6m69d1xljfzidc8hhk1fry5xg/vi-sao-market-giam.png",
      title: "Vì sao thị trường liên tục giảm? Crypto đã đến lúc downtrend?",
      author: "Triệu Hoàng",
      date: "Nov 05 2025",
      excerpt: "Nội dung tóm tắt bài viết...",
      avatar:
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/posts/p6tq04wjhifax5hz/f3bjwnv6m69d1xljfzidc8hhk1fry5xg/vi-sao-market-giam.png",

      readTime: "3 min read",
    },
    {
      slug: "/chainlink-smartcon-2025",
      image:
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/posts/p6tq04wjhifax5hz/f3bjwnv6m69d1xljfzidc8hhk1fry5xg/vi-sao-market-giam.png",
      title: "Vì sao thị trường liên tục giảm? Crypto đã đến lúc downtrend?",
      author: "Triệu Hoàng",
      date: "Nov 05 2025",
      excerpt: "Nội dung tóm tắt bài viết...",
      avatar:
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/posts/p6tq04wjhifax5hz/f3bjwnv6m69d1xljfzidc8hhk1fry5xg/vi-sao-market-giam.png",

      readTime: "3 min read",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };

  return (
    <>
      <SliderHeader title="Bài viết nổi bật" onPrev={prev} onNext={next} />

      {/* DESKTOP SLIDER */}
      <div className="mt-100 hidden lg:block">
        <Slider ref={sliderRef} {...settings}>
          {items.map((item, idx) => (
            <SlideItem key={idx} {...item} />
          ))}
        </Slider>
      </div>

      {/* MOBILE LIST */}
      <div className="grid lg:hidden grid-cols-1">
        {items.map((item, idx) => (
          <MobileItem key={idx} {...item} />
        ))}
      </div>
    </>
  );
}
