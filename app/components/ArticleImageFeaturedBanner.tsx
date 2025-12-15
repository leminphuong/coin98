export default function ArticleImageFeaturedBanner({
  src,
  alt = "featured banner",
  breakpoint = "(min-width:560px)",
}: {
  src: string;
  alt?: string;
  breakpoint?: string;
}) {
  return (
    <picture>
      <source media={breakpoint} srcSet={src} />

      <img
        alt={alt}
        src={src}
       className="w-full h-full object-cover"
      />
    </picture>
  );
}
