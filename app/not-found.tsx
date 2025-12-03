import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="w-screen flex-1 flex flex-col overflow-hidden">
      <div className="content flex-1 flex flex-col items-center justify-center">
        
        {/* 404 Number */}
        <div className="flex items-center">
          <span className="font-serif-100 leading-120 text-size-1400 md:text-size-2100 font-semibold text-text-not-found">
            404
          </span>
        </div>

        {/* Message */}
        <div className="mt-200 md:mt-300 flex flex-col items-center justify-center">
          <span className="ui-text-medium">We couldn't find that page.</span>
        </div>

        {/* Button */}
        <div className="mt-200 md:mt-300 flex justify-center">
          <Link href="/" className="inline-block">
            <button className="ab-btn-size-regular ab-btn-primary ab-btn">
              Go to Home
            </button>
          </Link>
        </div>

      </div>

      {/* Background Image */}
      <div className="land flex-none h-sp200 md:h-sp264 overflow-hidden relative">
        <img
          src="https://coin98.net/assets/error/land-lm.svg"
          alt="land 404 page"
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
