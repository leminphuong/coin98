"use client";

import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="bg-background pb-500 md:pb-1300 pt-1500 flex flex-col items-center w-screen h-screen overflow-hidden">

      {/* TITLE */}
      <div className="w-full max-w-w680 flex flex-col items-center article-h3 text-center text-text-primary">
        <i className="ab-icon !not-italic text-icon-link text-size-1100 mb-200 ab-amber_logo_mark"></i>
        Forgot password
      </div>

      <div className="mt-500 relative w-full max-w-w680">

        {/* BACK BUTTON */}
        <div className="fixed select-none left-200 top-1200 md:absolute md:top-100 md:left-0 w-fit h-fit overflow-hidden">
          <Link href="/signin">

            {/* Mobile */}
            <button className="group/ab-button flex md:hidden items-center justify-center rounded-050 bg-button-ghost-background p-100">
              <i className="ab-icon text-button-ghost-icon text-size-800 ab-arrow_left"></i>
            </button>

            {/* Desktop */}
            <button className="group/ab-button hidden md:flex items-center justify-center rounded-050 bg-button-ghost-background py-050 px-100">
              <i className="ab-icon text-button-ghost-icon text-size-400 mr-100 ab-arrow_left"></i>
              <span className="button-text-medium text-button-ghost-text">Back</span>
            </button>

          </Link>
        </div>

        {/* FORM */}
        <form className="transition-all duration-300 ease-linear w-full select-none max-w-w320 mx-auto">

          {/* EMAIL FIELD */}
          <div className="flex flex-col">
            <label className="h-600 bg-background flex items-center py-150 border-0125 border-border px-0 cursor-text">
              <i className="ab-icon mr-150 text-size-800 ab-mail"></i>
              <input
                id="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="off"
                className="outline-none bg-transparent flex-1 text-text-primary placeholder:text-text-subtlest"
              />
            </label>
          </div>

          {/* RESET BUTTON */}
          <button
            type="submit"
            className="group/ab-button w-full mt-400 rounded-050 bg-button-primary-background py-100 px-150 border-0125 border-button-primary-background"
          >
            <span className="text-button-primary-text button-text-large">
              Reset password
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
