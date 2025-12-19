"use client";

import { useState } from "react";
import Link from "next/link";

/* =========================
   PASSWORD RULE ITEM
========================= */
function PasswordRule({ label, valid }: { label: string; valid: boolean }) {
  return (
    <div className="flex items-center py-050">
      <i
        className={`ab-icon text-size-400 mr-100 ab-chevron_check ${
          valid ? "text-icon-system-green" : "text-border-subtle"
        }`}
      />
      <span
        className={`ui-text-x-small ${
          valid ? "text-text-primary" : "text-text-subtlest"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* =========================
     FORM STATE
  ========================= */
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step1Error, setStep1Error] = useState("");
  const handleContinue = () => {
    if (!emailValid) {
      setStep1Error("Please enter a valid email address.");
      return;
    }

    if (displayName.trim().length < 2) {
      setStep1Error("Display name must be at least 2 characters.");
      return;
    }

    setStep1Error("");
    setStep(2);
  };

  /* =========================
     VALIDATION
  ========================= */
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const passwordRules = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    digit: /\d/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const passwordValid =
    passwordRules.length &&
    passwordRules.uppercase &&
    passwordRules.digit &&
    passwordRules.special;

  const canGoStep2 = emailValid && displayName.trim().length >= 2;
  const canSignup = canGoStep2 && passwordValid && password === confirmPassword;

  /* =========================
     SUBMIT SIGNUP
  ========================= */
  const handleSignup = async () => {
    if (!canSignup || loading) {
      setError("Please check your email and password requirements.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://admin.coinjdg.com/wp-json/toan/v1/author/create` +
          `?name=${encodeURIComponent(displayName)}` +
          `&email=${encodeURIComponent(email)}` +
          `&password=${encodeURIComponent(password)}`
      );

      const data = await res.json();

      if (data.status !== "success") {
        setError(data.message || "Signup failed");
        return;
      }

      window.location.href = "/signin";
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background pb-500 pt-1500 flex flex-col items-center w-screen h-screen overflow-hidden">
      {/* TITLE */}
      <div className="w-full max-w-w680 flex flex-col items-center article-h3 text-center">
        <i className="ab-icon text-size-1100 mb-200 ab-amber_logo_mark" />
        Join the AmberBlocks
      </div>

      <div className="mt-500 relative w-full max-w-w680">
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="fixed md:absolute left-200 top-1200 md:top-100 md:left-0
               z-50 group/ab-button flex items-center
               rounded-050 bg-button-ghost-background py-050 px-100"
          >
            <i className="ab-icon text-size-400 mr-100 ab-arrow_left" />
            <span className="button-text-medium">Back</span>
          </button>
        )}

        {/* FORM WRAPPER */}
        <div className="w-full relative max-w-w320 mx-auto">
          {/* =========================
              STEP 1
          ========================= */}
          <form
            className={`absolute top-0 w-full transition-all duration-300 ${
              step === 1
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-100%"
            }`}
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="h-600 bg-background flex items-center py-150 rounded-050 border-0125 border-border transition-all duration-200 focus-within:border-cbr-50 rounded-none px-0 border-x-none border-t-none focus-within:shadow-t-none cursor-text">
              <i className="ab-icon mr-150 text-size-800 ab-mail" />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStep1Error("");
                }}
                placeholder="Enter your email"
                className="flex-1 bg-transparent outline-none"
              />
            </label>

            <label className="h-600 bg-background flex items-center py-150 rounded-050 border-0125 border-border transition-all duration-200 focus-within:border-cbr-50 rounded-none px-0 border-x-none border-t-none focus-within:shadow-t-none cursor-text mt-400">
              <i className="ab-icon mr-150 text-size-800 ab-admin" />
              <input
                value={displayName}
                onChange={(e) => {
                  setDisplayName(e.target.value);
                  setStep1Error("");
                }}
                placeholder="Your display name"
                className="flex-1 bg-transparent outline-none"
              />
            </label>
            {step1Error && (
              <div className="mt-200 ui-text-x-small text-icon-system-red text-center">
                {step1Error}
              </div>
            )}
            <button
              type="button"
              onClick={handleContinue}
              className={`group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed bg-button-primary-background lg:hover:bg-button-primary-background-hovered active:bg-button-primary-background-pressed lg:hover:disabled:bg-button-primary-background-disabled disabled:bg-button-primary-background-disabled border-0125 border-button-primary-background lg:hover:border-button-primary-background-hovered active:border-button-primary-background-pressed lg:hover:disabled:border-button-primary-background-disabled disabled:border-button-primary-background-disabled py-100 px-150 w-full mt-400`}
            >
              <span className="button-text-large text-button-primary-text">
                Continue
              </span>
            </button>
            <Link href="/signin">
              <div className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed lg:hover:disabled:bg-button-ghost-background-disabled disabled:bg-button-ghost-background-disabled border-0125 border-transparent py-100 px-150 w-full mt-200">
                <span className="select-none text-button-ghost-text group-disabled/ab-button:text-button-ghost-text-disable button-text-large">
                  Sign in
                </span>
                <div className="flex items-center justify-center -z-1 opacity-0 absolute inset-0 ab-btn-loading-wrapper transition-all">
                  <div className="relative animate-spin flex items-center justify-center w-300 h-300">
                    <div className="h-050 w-050 rounded-circle absolute left-50% -translate-x-50% top-0 z-1 bg-btn-loading-transparent"></div>
                  </div>
                </div>
              </div>
            </Link>
          </form>

          {/* =========================
              STEP 2
          ========================= */}
          <form
            className={`absolute top-0 w-full transition-all duration-300 ${
              step === 2
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-100%"
            }`}
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="h-600 bg-background flex items-center py-150 rounded-050 border-0125 border-border transition-all duration-200 focus-within:border-cbr-50 rounded-none px-0 border-x-none border-t-none focus-within:shadow-t-none cursor-text">
              <i className="ab-icon mr-150 text-size-800 ab-permission" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="flex-1 bg-transparent outline-none"
              />
            </label>

            <div className="mt-200 ui-text-x-small">
              Password must have at least:
            </div>

            <div className="mt-100">
              <PasswordRule label="8 characters" valid={passwordRules.length} />
              <PasswordRule
                label="1 upper case letter"
                valid={passwordRules.uppercase}
              />
              <PasswordRule label="1 digit" valid={passwordRules.digit} />
              <PasswordRule
                label="1 special character"
                valid={passwordRules.special}
              />
            </div>

            <label className="h-600 bg-background flex items-center py-150 rounded-050 border-0125 border-border transition-all duration-200 focus-within:border-cbr-50 rounded-none px-0 border-x-none border-t-none focus-within:shadow-t-none cursor-text mt-400">
              <i className="ab-icon mr-150 text-size-800 ab-permission" />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter password"
                className="flex-1 bg-transparent outline-none"
              />
            </label>

            {error && (
              <div className="mt-200 ui-text-x-small text-icon-system-red">
                {error}
              </div>
            )}

            <button
              type="button"
              onClick={handleSignup}
              className={`group/ab-button w-full mt-400 rounded-050 py-100 ${
                canSignup ? "bg-button-primary-background" : "bg-button-primary-background"
              }`}
            >
              <span className="button-text-large text-button-primary-text">
                {loading ? "Signing up..." : "Sign up"}
              </span>
            </button>
            <Link href="/signin">
              <div className="group/ab-button relative select-none flex items-center justify-center rounded-050 transition-all duration-200 ease-linear lg:disabled:cursor-not-allowed bg-button-ghost-background lg:hover:bg-button-ghost-background-hovered active:bg-button-ghost-background-pressed lg:hover:disabled:bg-button-ghost-background-disabled disabled:bg-button-ghost-background-disabled border-0125 border-transparent py-100 px-150 w-full mt-200">
                <span className="select-none text-button-ghost-text group-disabled/ab-button:text-button-ghost-text-disable button-text-large">
                  Sign in
                </span>
                <div className="flex items-center justify-center -z-1 opacity-0 absolute inset-0 ab-btn-loading-wrapper transition-all">
                  <div className="relative animate-spin flex items-center justify-center w-300 h-300">
                    <div className="h-050 w-050 rounded-circle absolute left-50% -translate-x-50% top-0 z-1 bg-btn-loading-transparent"></div>
                  </div>
                </div>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
