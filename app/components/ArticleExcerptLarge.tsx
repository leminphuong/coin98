export default function ArticleExcerptLarge({
  excerpt,
}: {
  excerpt?: string;
}) {
  if (!excerpt) return null;

  return (
    <div className="lg:mt-150 mt-100 lg:block hidden">
      <span className="article-text-x-small break-words line-clamp-3 text-text-secondary">
        {excerpt}
      </span>
    </div>
  );
}
