export default function ArticleImageLatestPost({
  src,
  alt,
  width = 600,
  height = 400,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <picture className="relative md:mb-200 mb-200 block">
      <img
        alt={alt}
        src={src}
        width={width}
        height={height}
        loading="eager"
        decoding="async"
        className="object-cover rounded-050 aspect-3-2 w-full"
        style={{ color: "transparent" }}
      />
    </picture>
  );
}
