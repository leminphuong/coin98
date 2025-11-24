"use client";

interface SliderHeaderProps {
  title: string;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function SliderHeader({ title, onPrev, onNext }: SliderHeaderProps) {
  return (
    <div className="flex items-center px-200 md:px-300">
      {/* TITLE */}
      <div className="flex grow flex-col break-words">
        <span className="ui-text-large-emphasis md:ui-h3-emphasis text-text-primary line-clamp-1">
          {title}
        </span>
      </div>

      {/* CUSTOM ARROWS */}
      <div className="min-h-500 ml-150 hidden rounded-circle border-0125 
                      border-button-tertiary-border bg-transparent 
                      md:flex items-center overflow-hidden">
        <button
          onClick={onPrev}
          className="group/ab-button relative select-none flex items-center justify-center 
                     rounded-050 transition-all duration-200 ease-linear 
                     bg-button-ghost-background p-100 border-0125 border-transparent"
        >
          <i className="ab-icon text-button-ghost-icon text-size-800 mr-0 ab-chevron_left" />
        </button>

        <button
          onClick={onNext}
          className="group/ab-button relative select-none flex items-center justify-center 
                     rounded-050 transition-all duration-200 ease-linear 
                     bg-button-ghost-background p-100 border-0125 border-transparent"
        >
          <i className="ab-icon text-button-ghost-icon text-size-800 mr-0 ab-chevron_right" />
        </button>
      </div>
    </div>
  );
}
