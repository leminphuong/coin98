"use client";

import { useState } from "react";
import Link from "next/link";

const AUTH_KEY = "amberblocks_auth_user";

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const canSubmit = email.length > 5 && password.length > 5;

  /* =========================
     HANDLE LOGIN
  ========================= */
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || loading) return;

    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://admin.coinjdg.com/wp-json/toan/v1/author/login` +
          `?email=${encodeURIComponent(email)}` +
          `&password=${encodeURIComponent(password)}`
      );

      const data = await res.json();

      if (data.status !== "success") {
        setError(data.message || "Login failed");
        return;
      }

      /* ✅ CHỈ LƯU CẦN THIẾT */
      const authUser = {
        id: data.author.id,
        slug: data.author.slug,
        language: data.author.language,
        email: data.author.email,
      };

      localStorage.setItem(AUTH_KEY, JSON.stringify(authUser));

      /* redirect sau login */
      window.location.href = "/";
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background pb-500 md:pb-1300 pt-1500 flex flex-col items-center w-screen h-screen overflow-hidden">
      {/* TITLE */}
      <div className="w-full max-w-w680 flex flex-col items-center article-h3 text-center text-text-primary">
        <i className="ab-icon text-size-1100 mb-200 ab-amber_logo_mark"></i>
        Sign in to AmberBlocks
      </div>

      {/* FORM */}
      <form
        onSubmit={handleLogin}
        className="w-full select-none mt-500 max-w-w320 mx-auto"
      >
        {/* EMAIL */}
        <div className="flex flex-col">
          <label className="h-600 bg-background flex items-center py-150 rounded-050 border-0125 border-border transition-all duration-200 focus-within:border-cbr-50 px-0 border-x-none border-t-none cursor-text">
            <i className="ab-icon mr-150 text-size-800 text-icon ab-mail"></i>
            <input
              placeholder="Enter your email"
              autoComplete="off"
              className="outline-none bg-transparent flex-1 text-text-primary placeholder:text-text-subtlest"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        {/* PASSWORD */}
        <div className="flex flex-col mt-400">
          <label className="h-600 bg-background flex items-center py-150 rounded-050 border-0125 border-border transition-all duration-200 focus-within:border-cbr-50 px-0 border-x-none border-t-none cursor-text">
            <i className="ab-icon mr-150 text-size-800 text-icon ab-permission"></i>
            <input
              placeholder="Password"
              type="password"
              autoComplete="off"
              className="outline-none bg-transparent flex-1 text-text-primary placeholder:text-text-subtlest"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        {/* ERROR */}
        {error && (
          <div className="mt-200 ui-text-x-small text-icon-system-red text-center">
            {error}
          </div>
        )}

        {/* SIGN IN BUTTON */}
        <button
          type="submit"
          disabled={!canSubmit}
          className={`group/ab-button relative flex items-center justify-center rounded-050 transition-all duration-200
            py-100 px-150 w-full mt-400
            ${
              canSubmit
                ? "bg-button-primary-background border-button-primary-background"
                : "bg-button-primary-background border-button-primary-background"
            }`}
        >
          <span className="text-button-primary-text button-text-large">
            {loading ? "Signing in..." : "Sign in"}
          </span>
        </button>
      </form>

      {/* SIGN UP */}
      <div className="max-w-w320 mx-auto w-full">
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

      {/* FOOTER */}
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
