export default function ArticleImageLatestPostMobile({
  src,
  alt,
  width = 1200,
  height = 800,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <picture className="relative mb-200 block">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover rounded-050 aspect-3-2 w-full"
        sizes="(max-width: 480px) 100vw,
               (max-width: 768px) 50vw,
               33vw"
      />
    </picture>
  );
}
