"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-background pb-500 md:pb-1300 pt-1500 flex flex-col items-center w-screen h-screen overflow-hidden">

      {/* TITLE */}
      <div className="w-full max-w-w680 flex flex-col items-center article-h3 text-center text-text-primary">
        <i className="ab-icon !not-italic text-icon-link text-size-1100 mb-200 ab-amber_logo_mark"></i>
        Join the AmberBlocks
      </div>

      <div className="mt-500 relative w-full max-w-w680">

        {/* BACK BUTTON */}
        {step > 1 && (
          <div className="fixed left-200 top-1200 md:absolute md:top-100 md:left-0 w-fit h-fit select-none overflow-hidden">
            {/* Desktop */}
            <button
              onClick={() => setStep(step - 1)}
              className="group/ab-button hidden md:flex items-center justify-center rounded-050 bg-button-ghost-background py-050 px-100"
            >
              <i className="ab-icon text-button-ghost-icon text-size-400 mr-100 ab-arrow_left"></i>
              <span className="button-text-medium text-button-ghost-text">Back</span>
            </button>

            {/* Mobile */}
            <button
              onClick={() => setStep(step - 1)}
              className="group/ab-button flex md:hidden items-center justify-center rounded-050 bg-button-ghost-background p-100"
            >
              <i className="ab-icon text-button-ghost-icon text-size-800 ab-arrow_left"></i>
            </button>
          </div>
        )}

        {/* WRAPPER */}
        <div className="w-full relative max-w-w320 mx-auto select-none">

          {/* ---------- STEP 1 ---------- */}
          <form
            className={`absolute top-0 w-full transition-all duration-300 ease-linear ${
              step === 1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-100%"
            }`}
          >
            {/* EMAIL */}
            <div className="flex flex-col">
              <label className="h-600 bg-background flex items-center py-150 border-0125 border-border px-0">
                <i className="ab-icon mr-150 text-size-800 ab-mail"></i>
                <input
                  placeholder="Enter your email"
                  autoComplete="off"
                  name="email"
                  className="outline-none bg-transparent flex-1 text-text-primary placeholder:text-text-subtlest"
                />
              </label>
            </div>

            {/* DISPLAY NAME */}
            <div className="flex flex-col mt-400">
              <label className="h-600 bg-background flex items-center py-150 border-0125 border-border px-0">
                <i className="ab-icon mr-150 text-size-800 ab-admin"></i>
                <input
                  placeholder="Your display name"
                  autoComplete="off"
                  name="displayName"
                  className="outline-none bg-transparent flex-1 text-text-primary placeholder:text-text-subtlest"
                />
              </label>
              <span className="mt-050 text-text-subtlest ui-text-x-small">Example: John</span>
            </div>

            {/* CHECKBOX */}
            <div className="flex items-start mt-400">
              <div className="group/toggleCheck flex items-center mr-075">
                <div className="flex items-center rounded-075 p-025 h-250 w-250">
                  <div className="rounded-050 border-025 border-cbr-30 bg-toggle-background-active w-full h-full"></div>
                </div>
              </div>

              <span className="ui-text-x-small">
                I confirm that I am at least 18 years old and agree to{" "}
                <Link
                  href="https://docs.amberblocks.com/terms-of-service"
                  target="_blank"
                  className="ui-text-x-small-emphasis text-text-highlight"
                >
                  AmberBlocks Terms of Service
                </Link>
                ,{" "}
                <Link
                  href="https://docs.amberblocks.com/"
                  target="_blank"
                  className="ui-text-x-small-emphasis text-text-highlight"
                >
                  Publisher Terms of Service
                </Link>
                , and{" "}
                <Link
                  href="https://docs.amberblocks.com/privacy-policy"
                  target="_blank"
                  className="ui-text-x-small-emphasis text-text-highlight"
                >
                  Privacy Policy
                </Link>
              </span>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="group/ab-button w-full mt-400 rounded-050 bg-button-primary-background py-100 px-150"
            >
              <span className="text-button-primary-text button-text-large">Continue</span>
            </button>
          </form>

          {/* ---------- STEP 2 ---------- */}
          <form
            className={`absolute top-0 w-full transition-all duration-300 ease-linear ${
              step === 2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-100%"
            }`}
          >
            {/* PASSWORD */}
            <div className="flex flex-col">
              <label className="h-600 bg-background flex items-center py-150 border-0125 border-border px-0">
                <i className="ab-icon mr-150 text-size-800 ab-permission"></i>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="outline-none bg-transparent flex-1 text-text-primary placeholder:text-text-subtlest"
                />
              </label>
            </div>

            <div className="mt-200 ui-text-x-small">Password must have at least:</div>

            {[
              "8 characters",
              "1 upper case letter",
              "1 digit",
              "1 special character (ex: @, #, $, %, & ,...)"
            ].map((rule) => (
              <div key={rule} className="flex items-center py-050">
                <i className="ab-icon text-size-400 text-border-subtle ab-chevron_check"></i>
                <span className="ml-100 ui-text-x-small">{rule}</span>
              </div>
            ))}

            {/* CONFIRM PASSWORD */}
            <div className="flex flex-col mt-400">
              <label className="h-600 bg-background flex items-center py-150 border-0125 border-border px-0">
                <i className="ab-icon mr-150 text-size-800 ab-permission"></i>
                <input
                  type="password"
                  placeholder="Re-enter password"
                  className="outline-none bg-transparent flex-1 text-text-primary placeholder:text-text-subtlest"
                />
              </label>
            </div>

            <button
              type="button"
              onClick={() => setStep(3)}
              className="group/ab-button w-full mt-400 rounded-050 bg-button-primary-background py-100 px-150"
            >
              <span className="text-button-primary-text button-text-large">Sign up</span>
            </button>
          </form>

          {/* ---------- STEP 3 ---------- */}
          <form
            className={`absolute top-0 w-full transition-all duration-300 ease-linear ${
              step === 3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-200%"
            }`}
          >
            <div className="py-150 ui-text-small">
              An OTP has been sent to your email address
              <br />
              <span className="ui-text-small-emphasis">example@gmail.com</span>
            </div>

            {/* OTP INPUT */}
            <div className="flex flex-col mt-400">
              <label className="h-600 bg-background flex items-center py-150 border-0125 border-border px-0">
                <input
                  placeholder="Enter OTP code"
                  className="outline-none flex-1 text-text-primary placeholder:text-text-subtlest"
                />
                <div className="flex-none">52s</div>
              </label>
            </div>

            <button
              type="submit"
              className="group/ab-button w-full mt-400 rounded-050 bg-button-primary-background py-100 px-150"
            >
              <span className="text-button-primary-text button-text-large">Sign up</span>
            </button>
          </form>
        </div>

        {/* LINK TO SIGNIN */}
        <Link href="/signin">
          <button className="group/ab-button w-full mt-200 rounded-050 bg-button-ghost-background py-100 px-150">
            <span className="button-text-large text-button-ghost-text">Sign in</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
