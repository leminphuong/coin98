"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { SeriesCardDesktop, SeriesCardMobile } from "@/components/SeriesCard";
import type { SeriesItem } from "@/types/series";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SeriesSlider() {
  const sliderRef = useRef<Slider | null>(null);

  const series: SeriesItem[] = [
    {
      id: "spotlight",
      title: "The Spotlight",
      posts: 58,
      image:
        "https://coin.joydigi.net/wp-content/uploads/2025/11/trump-airdrop-1-300x201.jpg",
      description:
        "Series phỏng vấn những builder thực thụ của ngành crypto...",
      url: "/series/the-spotlight",
    },
    {
      id: "snapshot1",
      title: "The Snapshot",
      posts: 217,
      image:
        "https://coin.joydigi.net/wp-content/uploads/2025/11/trump-airdrop-1-300x201.jpg",
      description:
        "Những chuyển động thị trường crypto được cập nhật nhanh nhất.",
      url: "/series/the-snapshot",
    },
        {
      id: "snapshot2",
      title: "The Snapshot",
      posts: 217,
      image:
        "https://coin.joydigi.net/wp-content/uploads/2025/11/trump-airdrop-1-300x201.jpg",
      description:
        "Những chuyển động thị trường crypto được cập nhật nhanh nhất.",
      url: "/series/the-snapshot",
    },
    {
      id: "people",
      title: "Crypto People",
      posts: 45,
      image:
        "https://coin.joydigi.net/wp-content/uploads/2025/11/trump-airdrop-1-300x201.jpg",
      description:
        "Những nhân vật nổi bật của Web3 và hệ sinh thái blockchain.",
      url: "/series/nhan-vat",
    },
  ];

  const next = () => sliderRef.current?.slickNext();
  const prev = () => sliderRef.current?.slickPrev();

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
          {series.map((item) => (
            <SeriesCardDesktop key={item.id} item={item} />
          ))}
        </Slider>
      </div>

      {/* MOBILE LIST */}
      <div className="grid lg:hidden grid-cols-1 gap-300">
        {series.map((item) => (
          <SeriesCardMobile key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
