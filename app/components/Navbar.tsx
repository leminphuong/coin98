"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
        <Link href="/" className="hover:text-blue-600 transition">Home</Link>
        <Link href="/search" className="hover:text-blue-600 transition">Search</Link>
        <Link href="/learn" className="hover:text-blue-600 transition">Learn</Link>
        <Link href="/series" className="hover:text-blue-600 transition">Series</Link>
        <Link href="/signin" className="hover:text-blue-600 transition">Sign In</Link>
      </nav>

      {/* Mobile */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="text-gray-700 focus:outline-none">
          ☰
        </button>

        {open && (
          <div className="absolute right-5 top-16 bg-white shadow-lg border rounded-xl w-40 flex flex-col">
            <Link href="/" onClick={() => setOpen(false)} className="p-3 hover:bg-gray-50">Home</Link>
            <Link href="/search" onClick={() => setOpen(false)} className="p-3 hover:bg-gray-50">Search</Link>
            <Link href="/learn" onClick={() => setOpen(false)} className="p-3 hover:bg-gray-50">Learn</Link>
            <Link href="/series" onClick={() => setOpen(false)} className="p-3 hover:bg-gray-50">Series</Link>
            <Link href="/signin" onClick={() => setOpen(false)} className="p-3 hover:bg-gray-50">Sign In</Link>
          </div>
        )}
      </div>
    </>
  );
}
