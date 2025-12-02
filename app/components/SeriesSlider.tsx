"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { SeriesCardDesktop, SeriesCardMobile } from "@/components/SeriesCard";
import type { SeriesItem } from "@/types/series";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  items: SeriesItem[];
}

export default function SeriesSlider({ items }: Props) {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      {/* DESKTOP SLIDER */}
      <div className="hidden lg:block">
        <Slider ref={sliderRef} {...settings}>
          {items.map((item) => (
            <SeriesCardDesktop key={item.id} item={item} />
          ))}
        </Slider>
      </div>

      {/* MOBILE LIST */}
      <div className="grid lg:hidden grid-cols-1 gap-300">
        {items.map((item) => (
          <SeriesCardMobile key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
