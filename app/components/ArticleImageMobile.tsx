export default function ArticleImageMobile({
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
    <picture className="relative flex-none block min-w-200 w-600 mr-200">
      <img
        alt={alt}
        src={src}
        width={width}
        height={height}
        className="object-cover rounded-050 aspect-square w-full"
      />
    </picture>
  );
}
