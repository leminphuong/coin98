"use client";

import React, { useRef } from "react";
import Slider from "react-slick";

import SliderHeader from "@/components/SliderHeader";
import SlideItem from "@/components/SlideItem";
import MobileItem from "@/components/MobileItem";
import type { PostItem } from "@/types/post";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FeaturedPostsSlider({
  title,
  items
}: {
  title: string;
  items: PostItem[];
}) {
  const sliderRef = useRef<Slider | null>(null);

  const next = () => sliderRef.current?.slickNext();
  const prev = () => sliderRef.current?.slickPrev();

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
      <SliderHeader title={title} onPrev={prev} onNext={next} />


      <div className="mt-100 hidden lg:block">
        <Slider ref={sliderRef} {...settings}>
          {items.map((item) => (
            <SlideItem key={item.slug} {...item} />
          ))}
        </Slider>
      </div>

      <div className="grid lg:hidden grid-cols-1">
        {items.map((item) => (
          <MobileItem key={item.slug} {...item} />
        ))}
      </div>
    </>
  );
}
