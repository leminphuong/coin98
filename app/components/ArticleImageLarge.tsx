export default function ArticleImageLarge({ src, alt }: { src: string; alt: string }) {
  return (
    <picture className="relative lg:mb-250 mb-200 block">
      <img
        src={src}
        alt={alt}
        className="object-cover rounded-050 aspect-3-2 w-full rounded-050"
      />
    </picture>
  );
}
