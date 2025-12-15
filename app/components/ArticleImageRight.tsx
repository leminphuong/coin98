export default function ArticleImageRight({
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
    <div className="flex-none lg:mx-150 w-600 mx-100 block">
      <picture className="block w-full relative">
        <img
          alt={alt}
          src={src}
          width={width}
          height={height}
          className="object-cover rounded-050 lg:aspect-3-2 aspect-square w-full rounded-050"
        />
      </picture>
    </div>
  );
}
