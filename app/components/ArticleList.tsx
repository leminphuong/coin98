import React from "react";

interface ArticleType {
  id: string;
  type: "vertical" | "horizontal";
  url: string;
  title: string;
  excerpt: string;
  time: string;
  readTime?: string;
  image: string;
  authors: string[];
}
import AvatarCircle from "@/components/AvatarCircle";
import Link from "next/link";
import Image from "next/image";
export default function ArticleList() {
  // ===============================
  // DATA
  // ===============================
  const articles: ArticleType[] = [
    {
      id: "pioha7q5vsm32i1o49",
      type: "vertical",
      url: "/dinh-gia-base",
      title: "Định giá Base trước thềm TGE - Cuộc chơi Layer 2 kết thúc (P.2)",
      excerpt:
        "Tiếp nối phần 1 sau khi phân tích chiến lược tiếp theo của Base, phần 2 tập trung vào nội dung định giá Base trước thềm TGE.",
      time: "2 days ago",
      readTime: "13 min read",
      image:
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/posts/pioha7q5vsmi1o49/fdadw577h64uih39i0r28ihuu1rxn93u/phan-tich-base-8.jpeg",
      authors: [
        "https://files.amberblocks.com/userdata/usrodknlsjebyuc3z1srbebz84nxn8gu/profile-pictures/f4589433p263lg3v7es3eqejchz4ajch/img_2216.jpeg",
        "https://files.amberblocks.com/userdata/usrzihar2uey9sjefrz1xtywijisyagp/profile-pictures/fggd9ofu7867do4ff8wond9omarh9iir/288930474_3078241535821095_8640745413739969681_n.jpg",
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/channel/chnbzaa92ook5tnj/fuyvacrzjs2gap74gp5ulvwf5g1i25zr/upside-logo.png",
      ],
    },
    {
      id: "pioha7q5vs32mi1o49",
      type: "vertical",
      url: "/dinh-gia-base",
      title: "Định giá Base trước thềm TGE - Cuộc chơi Layer 2 kết thúc (P.2)",
      excerpt:
        "Tiếp nối phần 1 sau khi phân tích chiến lược tiếp theo của Base, phần 2 tập trung vào nội dung định giá Base trước thềm TGE.",
      time: "2 days ago",
      readTime: "13 min read",
      image:
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/posts/pioha7q5vsmi1o49/fdadw577h64uih39i0r28ihuu1rxn93u/phan-tich-base-8.jpeg",
      authors: [
        "https://files.amberblocks.com/userdata/usrodknlsjebyuc3z1srbebz84nxn8gu/profile-pictures/f4589433p263lg3v7es3eqejchz4ajch/img_2216.jpeg",
        "https://files.amberblocks.com/userdata/usrzihar2uey9sjefrz1xtywijisyagp/profile-pictures/fggd9ofu7867do4ff8wond9omarh9iir/288930474_3078241535821095_8640745413739969681_n.jpg",
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/channel/chnbzaa92ook5tnj/fuyvacrzjs2gap74gp5ulvwf5g1i25zr/upside-logo.png",
      ],
    },    {
      id: "pioha7q5vsmi1o4329",
      type: "vertical",
      url: "/dinh-gia-base",
      title: "Định giá Base trước thềm TGE - Cuộc chơi Layer 2 kết thúc (P.2)",
      excerpt:
        "Tiếp nối phần 1 sau khi phân tích chiến lược tiếp theo của Base, phần 2 tập trung vào nội dung định giá Base trước thềm TGE.",
      time: "2 days ago",
      readTime: "13 min read",
      image:
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/posts/pioha7q5vsmi1o49/fdadw577h64uih39i0r28ihuu1rxn93u/phan-tich-base-8.jpeg",
      authors: [
        "https://files.amberblocks.com/userdata/usrodknlsjebyuc3z1srbebz84nxn8gu/profile-pictures/f4589433p263lg3v7es3eqejchz4ajch/img_2216.jpeg",
        "https://files.amberblocks.com/userdata/usrzihar2uey9sjefrz1xtywijisyagp/profile-pictures/fggd9ofu7867do4ff8wond9omarh9iir/288930474_3078241535821095_8640745413739969681_n.jpg",
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/channel/chnbzaa92ook5tnj/fuyvacrzjs2gap74gp5ulvwf5g1i25zr/upside-logo.png",
      ],
    },
    {
      id: "pe7t5ewagkxh2anf1",
      type: "horizontal",
      url: "/phan-tich-ethena-ena",
      title:
        "Phân tích Ethena (ENA): Bài toán doanh thu từ USDe, sUSDe và USDtb (P.1)",
      excerpt:
        "Sau thất bại của UST năm 2022, Ethena ra đời như một ý tưởng táo bạo trong mảng stablecoin.",
      time: "Nov 13 2025",
      image:
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/posts/pe7t5ewagkxh2anf/fmc5kqms4lsfatgr9bkc6x85tk23ztbc/ethena-usde.jpeg",
      authors: [
        "https://files.amberblocks.com/userdata/usrzihar2uey9sjefrz1xtywijisyagp/profile-pictures/fggd9ofu7867do4ff8wond9omarh9iir/288930474_3078241535821095_8640745413739969681_n.jpg",
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/channel/chnbzaa92ook5tnj/fuyvacrzjs2gap74gp5ulvwf5g1i25zr/upside-logo.png",
      ],
    },
    {
      id: "pe7t5ewagkxh2anf2",
      type: "horizontal",
      url: "/phan-tich-ethena-ena",
      title:
        "Phân tích Ethena (ENA): Bài toán doanh thu từ USDe, sUSDe và USDtb (P.1)",
      excerpt:
        "Sau thất bại của UST năm 2022, Ethena ra đời như một ý tưởng táo bạo trong mảng stablecoin.",
      time: "Nov 13 2025",
      image:
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/posts/pe7t5ewagkxh2anf/fmc5kqms4lsfatgr9bkc6x85tk23ztbc/ethena-usde.jpeg",
      authors: [
        "https://files.amberblocks.com/userdata/usrzihar2uey9sjefrz1xtywijisyagp/profile-pictures/fggd9ofu7867do4ff8wond9omarh9iir/288930474_3078241535821095_8640745413739969681_n.jpg",
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/channel/chnbzaa92ook5tnj/fuyvacrzjs2gap74gp5ulvwf5g1i25zr/upside-logo.png",
      ],
    },    {
      id: "pe7t5ewagkxh2anf3",
      type: "horizontal",
      url: "/phan-tich-ethena-ena",
      title:
        "Phân tích Ethena (ENA): Bài toán doanh thu từ USDe, sUSDe và USDtb (P.1)",
      excerpt:
        "Sau thất bại của UST năm 2022, Ethena ra đời như một ý tưởng táo bạo trong mảng stablecoin.",
      time: "Nov 13 2025",
      image:
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/posts/pe7t5ewagkxh2anf/fmc5kqms4lsfatgr9bkc6x85tk23ztbc/ethena-usde.jpeg",
      authors: [
        "https://files.amberblocks.com/userdata/usrzihar2uey9sjefrz1xtywijisyagp/profile-pictures/fggd9ofu7867do4ff8wond9omarh9iir/288930474_3078241535821095_8640745413739969681_n.jpg",
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/channel/chnbzaa92ook5tnj/fuyvacrzjs2gap74gp5ulvwf5g1i25zr/upside-logo.png",
      ],
    },    {
      id: "pe7t5ewagkxh2anf4",
      type: "horizontal",
      url: "/phan-tich-ethena-ena",
      title:
        "Phân tích Ethena (ENA): Bài toán doanh thu từ USDe, sUSDe và USDtb (P.1)",
      excerpt:
        "Sau thất bại của UST năm 2022, Ethena ra đời như một ý tưởng táo bạo trong mảng stablecoin.",
      time: "Nov 13 2025",
      image:
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/posts/pe7t5ewagkxh2anf/fmc5kqms4lsfatgr9bkc6x85tk23ztbc/ethena-usde.jpeg",
      authors: [
        "https://files.amberblocks.com/userdata/usrzihar2uey9sjefrz1xtywijisyagp/profile-pictures/fggd9ofu7867do4ff8wond9omarh9iir/288930474_3078241535821095_8640745413739969681_n.jpg",
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/channel/chnbzaa92ook5tnj/fuyvacrzjs2gap74gp5ulvwf5g1i25zr/upside-logo.png",
      ],
    },    {
      id: "pe7t5ewagkxh2anf5",
      type: "horizontal",
      url: "/phan-tich-ethena-ena",
      title:
        "Phân tích Ethena (ENA): Bài toán doanh thu từ USDe, sUSDe và USDtb (P.1)",
      excerpt:
        "Sau thất bại của UST năm 2022, Ethena ra đời như một ý tưởng táo bạo trong mảng stablecoin.",
      time: "Nov 13 2025",
      image:
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/posts/pe7t5ewagkxh2anf/fmc5kqms4lsfatgr9bkc6x85tk23ztbc/ethena-usde.jpeg",
      authors: [
        "https://files.amberblocks.com/userdata/usrzihar2uey9sjefrz1xtywijisyagp/profile-pictures/fggd9ofu7867do4ff8wond9omarh9iir/288930474_3078241535821095_8640745413739969681_n.jpg",
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/channel/chnbzaa92ook5tnj/fuyvacrzjs2gap74gp5ulvwf5g1i25zr/upside-logo.png",
      ],
    },    {
      id: "pe7t5ewagkxh2anf6",
      type: "horizontal",
      url: "/phan-tich-ethena-ena",
      title:
        "Phân tích Ethena (ENA): Bài toán doanh thu từ USDe, sUSDe và USDtb (P.1)",
      excerpt:
        "Sau thất bại của UST năm 2022, Ethena ra đời như một ý tưởng táo bạo trong mảng stablecoin.",
      time: "Nov 13 2025",
      image:
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/posts/pe7t5ewagkxh2anf/fmc5kqms4lsfatgr9bkc6x85tk23ztbc/ethena-usde.jpeg",
      authors: [
        "https://files.amberblocks.com/userdata/usrzihar2uey9sjefrz1xtywijisyagp/profile-pictures/fggd9ofu7867do4ff8wond9omarh9iir/288930474_3078241535821095_8640745413739969681_n.jpg",
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/channel/chnbzaa92ook5tnj/fuyvacrzjs2gap74gp5ulvwf5g1i25zr/upside-logo.png",
      ],
    },    {
      id: "pe7t5ewagkxh2anf7",
      type: "horizontal",
      url: "/phan-tich-ethena-ena",
      title:
        "Phân tích Ethena (ENA): Bài toán doanh thu từ USDe, sUSDe và USDtb (P.1)",
      excerpt:
        "Sau thất bại của UST năm 2022, Ethena ra đời như một ý tưởng táo bạo trong mảng stablecoin.",
      time: "Nov 13 2025",
      image:
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/posts/pe7t5ewagkxh2anf/fmc5kqms4lsfatgr9bkc6x85tk23ztbc/ethena-usde.jpeg",
      authors: [
        "https://files.amberblocks.com/userdata/usrzihar2uey9sjefrz1xtywijisyagp/profile-pictures/fggd9ofu7867do4ff8wond9omarh9iir/288930474_3078241535821095_8640745413739969681_n.jpg",
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/channel/chnbzaa92ook5tnj/fuyvacrzjs2gap74gp5ulvwf5g1i25zr/upside-logo.png",
      ],
    },    {
      id: "pe7t5ewagkxh2anf8",
      type: "horizontal",
      url: "/phan-tich-ethena-ena",
      title:
        "Phân tích Ethena (ENA): Bài toán doanh thu từ USDe, sUSDe và USDtb (P.1)",
      excerpt:
        "Sau thất bại của UST năm 2022, Ethena ra đời như một ý tưởng táo bạo trong mảng stablecoin.",
      time: "Nov 13 2025",
      image:
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/posts/pe7t5ewagkxh2anf/fmc5kqms4lsfatgr9bkc6x85tk23ztbc/ethena-usde.jpeg",
      authors: [
        "https://files.amberblocks.com/userdata/usrzihar2uey9sjefrz1xtywijisyagp/profile-pictures/fggd9ofu7867do4ff8wond9omarh9iir/288930474_3078241535821095_8640745413739969681_n.jpg",
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/channel/chnbzaa92ook5tnj/fuyvacrzjs2gap74gp5ulvwf5g1i25zr/upside-logo.png",
      ],
    },    {
      id: "pe7t5ewagkxh2anf9",
      type: "horizontal",
      url: "/phan-tich-ethena-ena",
      title:
        "Phân tích Ethena (ENA): Bài toán doanh thu từ USDe, sUSDe và USDtb (P.1)",
      excerpt:
        "Sau thất bại của UST năm 2022, Ethena ra đời như một ý tưởng táo bạo trong mảng stablecoin.",
      time: "Nov 13 2025",
      image:
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/posts/pe7t5ewagkxh2anf/fmc5kqms4lsfatgr9bkc6x85tk23ztbc/ethena-usde.jpeg",
      authors: [
        "https://files.amberblocks.com/userdata/usrzihar2uey9sjefrz1xtywijisyagp/profile-pictures/fggd9ofu7867do4ff8wond9omarh9iir/288930474_3078241535821095_8640745413739969681_n.jpg",
        "https://files.amberblocks.com/thumbnail/chnbzaa92ook5tnj/channel/chnbzaa92ook5tnj/fuyvacrzjs2gap74gp5ulvwf5g1i25zr/upside-logo.png",
      ],
    },
  ];

  const total = articles.length;

  // ===============================
  // COMPONENT ITEM
  // ===============================
  const ArticleItem = ({
    item,
    index,
  }: {
    item: ArticleType;
    index: number;
  }) => {
    const isVertical = item.type === "vertical";
    const showDivider = index < total - 3; // ❌ Không show divider cho 3 bài cuối

    return (
      <>
        <div className="group/section-list-column w-full">
          <Link  href={item.url}>
            <div
              draggable="false"
              className={
                isVertical
                  ? "transition-all duration-300 bg-background lg:hover:bg-background-hovered article-vertical select-none px-200 py-300 md:px-300"
                  : "transition-all duration-300 bg-background lg:hover:bg-background-hovered article-horizontal select-none overflow-hidden md:py-300 md:px-200 py-300 px-200"
              }
            >
              {/* IMAGE */}
              {isVertical ? (
                <picture className="relative mb-200 block">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover rounded-050 aspect-3-2 w-full rounded-050"
                  />
                </picture>
              ) : (
                <div className="flex md:-mx-150 -mx-100 flex-row-reverse">
                  <div className="flex-none md:w-1/3 md:min-w-1500 md:mx-150 w-600 mx-100 md:hidden block">
                    <picture className="block w-full relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover rounded-050 md:aspect-3-2 aspect-square w-full rounded-050"
                      />
                    </picture>
                  </div>
                </div>
              )}

              {/* META */}
              <div className="ui-text-small text-text-secondary min-h-300 flex-wrap items-center mb-100 md:flex hidden">
                <div className="flex items-center ui-text-x-small md:ui-text-small text-text-primary">
                  <div className="mr-100 flex items-center -space-x-2">
                    {item.authors.map((a, i) => (
                      <div
                        key={i}
                        className="aspect-square relative ab-avatar-people ab-avatar-size-24 ring-2 ring-background"
                      >
                        <img
                          src={a}
                           alt={a}
                          className="avatar-img aspect-square w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  Multi Author
                </div>

                          <AvatarCircle />

                {item.time}
              </div>

              {/* TITLE */}
              <p
                className={
                  isVertical
                    ? "text-text-primary break-words md:article-h5 article-h5"
                    : "text-text-primary break-words lg:article-h6 md:article-h6 article-h7"
                }
              >
                {item.title}
              </p>

              {/* EXCERPT */}
              <div className="mt-100 md:block hidden">
                <span className="article-text-x-small break-words line-clamp-3 text-text-secondary">
                  {item.excerpt}
                </span>
              </div>

              {/* READ TIME */}
              {isVertical && (
                <div className="h-400 items-center justify-between mt-150 md:flex hidden">
                  <div className="flex items-center">
                    <div className="box-border badge flex w-fit items-center justify-center rounded-circle border-0125 px-100 py-0125 border-badge-labeled-neutral-border bg-badge-labeled-neutral-background h-300 text-text-primary my-050 whitespace-nowrap">
                      <span className="ui-text-small text-badge-labeled-neutral-text">
                        {item.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Link>
        </div>

        {/* DIVIDER – chỉ hiển thị nếu KHÔNG phải 3 bài cuối */}
        {showDivider && (
          <div className="px-200 md:px-300 group-last/section-list-column:hidden">
            <div className="bg-divider h-0125 w-full"></div>
          </div>
        )}
      </>
    );
  };

  // ===============================
  // CHIA 3 CỘT
  // ===============================
  const col1 = articles.filter((_, i) => i % 3 === 0);
  const col2 = articles.filter((_, i) => i % 3 === 1);
  const col3 = articles.filter((_, i) => i % 3 === 2);

  // ===============================
  // RENDER
  // ===============================
  return (
    <div className="flex flex-wrap">
      {[col1, col2, col3].map((col, colIndex) => {
        return (
          <div key={colIndex} className="w-full lg:w-1/3">
            {col.map((item) => {
              const originalIndex = articles.indexOf(item);
              return (
                <ArticleItem
                  key={item.id}
                  item={item}
                  index={originalIndex} // để xác định 3 bài cuối
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
