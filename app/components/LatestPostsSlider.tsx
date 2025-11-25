"use client";

import Slider from "react-slick";
import { useRef } from "react";
import LatestPostItem from "./LatestPostItem";
import LatestPostCard from "./LatestPostCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LatestPostsSlider() {
  const sliderRef = useRef<Slider>(null);

  const items = [
    {
      href: "/btc-dump-manh-trong-24h",
      title: "BTC dump mạnh trong 24h: Điều gì đang xảy ra?",
      image:
        "https://coin.joydigi.net/wp-content/uploads/2025/11/trump-airdrop-1-300x201.jpg",
      author: "Trung Đoàn",
      date: "Nov 21 2025",
      avatar: "https://coin.joydigi.net/wp-content/uploads/2025/11/trump-airdrop-1-300x201.jpg",
      description:
        "Thị trường crypto đang chứng kiến biến động rất mạnh trong 24h...",
      readTime: "3 min read",
    },
    {
      href: "/btc-dump-manh-trong-24h",
      title: "BTC dump mạnh trong 24h: Điều gì đang xảy ra?",
      image:
        "https://coin.joydigi.net/wp-content/uploads/2025/11/trump-airdrop-1-300x201.jpg",
      author: "Trung Đoàn",
      date: "Nov 21 2025",
      avatar: "https://coin.joydigi.net/wp-content/uploads/2025/11/trump-airdrop-1-300x201.jpg",
      description:
        "Thị trường crypto đang chứng kiến biến động rất mạnh trong 24h...",
      readTime: "3 min read",
    },
    {
      href: "/btc-dump-manh-trong-24h",
      title: "BTC dump mạnh trong 24h: Điều gì đang xảy ra?",
      image:
        "https://coin.joydigi.net/wp-content/uploads/2025/11/trump-airdrop-1-300x201.jpg",
      author: "Trung Đoàn",
      date: "Nov 21 2025",
      avatar: "https://coin.joydigi.net/wp-content/uploads/2025/11/trump-airdrop-1-300x201.jpg",
      description:
        "Thị trường crypto đang chứng kiến biến động rất mạnh trong 24h...",
      readTime: "3 min read",
    },
    {
      href: "/btc-dump-manh-trong-24h",
      title: "BTC dump mạnh trong 24h: Điều gì đang xảy ra?",
      image:
        "https://coin.joydigi.net/wp-content/uploads/2025/11/trump-airdrop-1-300x201.jpg",
      author: "Trung Đoàn",
      date: "Nov 21 2025",
      avatar: "https://coin.joydigi.net/wp-content/uploads/2025/11/trump-airdrop-1-300x201.jpg",
      description:
        "Thị trường crypto đang chứng kiến biến động rất mạnh trong 24h...",
      readTime: "3 min read",
    },
    {
      href: "/btc-dump-manh-trong-24h",
      title: "BTC dump mạnh trong 24h: Điều gì đang xảy ra?",
      image:
        "https://coin.joydigi.net/wp-content/uploads/2025/11/trump-airdrop-1-300x201.jpg",
      author: "Trung Đoàn",
      date: "Nov 21 2025",
      avatar: "https://coin.joydigi.net/wp-content/uploads/2025/11/trump-airdrop-1-300x201.jpg",
      description:
        "Thị trường crypto đang chứng kiến biến động rất mạnh trong 24h...",
      readTime: "3 min read",
    },
  ];

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
      <div className="hidden lg:block">
        <Slider ref={sliderRef} {...settings}>
          {items.map((item, idx) => (
            <LatestPostItem key={idx} {...item} />
          ))}
        </Slider>
      </div>
      <div className="grid lg:hidden grid-cols-2">
        {items.slice(0, 4).map((item, idx) => (
          <LatestPostCard
            key={idx}
            href={item.href}
            title={item.title}
            excerpt={item.description}
            image={item.image}
            readTime={item.readTime}
            date={item.date}
            authors={[{ name: item.author, avatar: item.avatar }]}
          />
        ))}
      </div>
    </div>
  );
}
