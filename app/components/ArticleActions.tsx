export default function ArticleActions() {
  return (
    <div className="flex items-center">
      {/* Save */}
      <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible mr-150">
        <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered border-0125 border-transparent p-100">
          <i className="ab-icon text-button-ghost-icon text-size-800 ab-bookmark_outlined"></i>
        </button>
      </div>

      {/* Copy */}
      <div className="overflow-hidden relative w-max h-max group/tooltip lg:hover:overflow-visible">
        <button className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered border-0125 border-transparent p-100">
          <i className="ab-icon text-button-ghost-icon text-size-800 ab-link"></i>
        </button>
      </div>
    </div>
  );
}
