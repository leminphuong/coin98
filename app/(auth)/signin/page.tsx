"use client";

import Link from "next/link";
import Image from "next/image";

export default function SigninPage() {
  return (
    <div className="bg-background pb-500 md:pb-1300 pt-1500 flex flex-col items-center w-screen h-screen overflow-hidden">
      
      {/* Title */}
      <div className="w-full max-w-w680 flex flex-col items-center article-h3 text-center text-text-primary">
        <i className="ab-icon !not-italic text-icon-link text-size-1100 mb-200 ab-amber_logo_mark"></i>
        Sign in to AmberBlocks
      </div>

      {/* FORM */}
      <form className="w-full select-none mt-500 max-w-w320 mx-auto">
        
        {/* EMAIL */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="h-600 bg-background flex items-center py-150 rounded-050 border-0125 border-border transition-all duration-200 focus-within:border-cbr-50 px-0 border-x-none border-t-none cursor-text"
          >
            <i className="ab-icon !not-italic mr-150 flex-none transition-all duration-200 text-size-800 text-icon ab-mail"></i>
            <input
              placeholder="Enter your email"
              id="email"
              autoComplete="off"
              name="email"
              className="outline-none bg-transparent flex-1 text-text-primary placeholder:text-text-subtlest"
            />
          </label>
        </div>

        {/* PASSWORD */}
        <div className="flex flex-col mt-400">
          <label
            htmlFor="password"
            className="h-600 bg-background flex items-center py-150 rounded-050 border-0125 border-border transition-all duration-200 focus-within:border-cbr-50 px-0 border-x-none border-t-none cursor-text"
          >
            <i className="ab-icon !not-italic mr-150 flex-none transition-all duration-200 text-size-800 text-icon ab-permission"></i>
            <input
              placeholder="Password"
              id="password"
              type="password"
              autoComplete="off"
              name="password"
              className="outline-none bg-transparent flex-1 text-text-primary placeholder:text-text-subtlest"
            />
            <i className="ab-icon !not-italic ml-150 flex-none transition-all duration-200 text-size-800 text-icon ab-show lg:hover:cursor-pointer"></i>
          </label>
        </div>

        {/* FORGOT PASSWORD */}
        <Link href="/forgot-password" className="block w-max ml-auto mt-200">
          <button
            type="button"
            className="group/ab-button relative flex items-center justify-center rounded-050 transition-all duration-200 bg-button-ghost-background p-050"
          >
            <span className="button-text-medium text-text-subtlest">
              Forgot password
            </span>
          </button>
        </Link>

        {/* SIGN IN BUTTON */}
        <button
          type="submit"
          disabled
          className="group/ab-button relative flex items-center justify-center rounded-050 transition-all duration-200 bg-button-primary-background border-button-primary-background py-100 px-150 w-full mt-400"
        >
          <span className="text-button-primary-text button-text-large">
            Sign in
          </span>
        </button>
      </form>

      {/* GOOGLE LOGIN + SIGN UP */}
      <div className="max-w-w320 mx-auto w-full">
        
        {/* Google */}
        <button className="group/ab-button relative flex items-center justify-center rounded-050 transition-all duration-200 bg-button-tertiary-background border-button-tertiary-border py-100 px-150 w-full mt-200">
          <span className="button-text-large text-button-tertiary-text">
            <div className="flex items-center">
              <img
                width={24}
                height={24}
                src="/assets/logo/logo-google.png"
                alt="google"
              />
              <span className="ml-150">Continue with Google</span>
            </div>
          </span>
        </button>

        {/* Sign up */}
        <Link href="/signup">
          <button
            type="button"
            className="group/ab-button relative flex items-center justify-center rounded-050 transition-all duration-200 bg-button-ghost-background py-050 px-100 w-full mt-200"
          >
            <span className="button-text-medium text-button-ghost-text">
              Sign up
            </span>
          </button>
        </Link>
      </div>

      {/* FOOTER BOTTOM ICONS */}
      <div className="w-full max-w-w680 hidden md:flex fixed bottom-500 left-1/2 -translate-x-1/2 items-center ui-text-x-small text-text-secondary">
        <div className="grow flex items-center flex-col">
          <i className="ab-icon text-size-1100 mb-100 ab-star"></i>
          Personalize your experience
        </div>

        <div className="grow flex items-center flex-col mx-300">
          <i className="ab-icon text-size-1100 mb-100 ab-diamond"></i>
          Save the newest contents
        </div>

        <div className="grow flex items-center flex-col">
          <i className="ab-icon text-size-1100 mb-100 ab-blockchain"></i>
          Web3 & Blockchain catchup
        </div>
      </div>
    </div>
  );
}
