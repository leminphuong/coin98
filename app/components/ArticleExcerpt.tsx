export default function ArticleExcerpt({ excerpt }: { excerpt?: string }) {
  if (!excerpt) return null;

  return (
    <div className="mt-100 hidden">
      <span className="article-text-x-small break-words line-clamp-3 text-text-secondary">
        {excerpt}
      </span>
    </div>
  );
}
