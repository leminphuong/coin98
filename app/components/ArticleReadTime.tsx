export default function ArticleReadTime({ readTime }: { readTime?: string }) {
  if (!readTime) return null;

  return (
    <div className="flex items-center">
      <div className="box-border badge flex w-fit items-center justify-center rounded-circle border-0125 px-100 py-0125 border-badge-labeled-neutral-border bg-badge-labeled-neutral-background h-300 text-text-primary my-050 whitespace-nowrap">
        <span className="ui-text-small text-badge-labeled-neutral-text">
          {readTime}
        </span>
      </div>
    </div>
  );
}
