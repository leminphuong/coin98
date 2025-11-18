import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Coin98 Clone | Crypto Knowledge Hub",
  description:
    "Crypto insights, DeFi guides, and blockchain news built with Next.js 14.",
  openGraph: {
    title: "Coin98 Clone",
    description: "Crypto education platform built with Next.js 14.",
    url: "https://coin98-clone.net",
    siteName: "Coin98 Clone",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coin98 Clone",
    description: "Crypto education platform built with Next.js 14.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`__variable_9f8903 __variable_7ca1b9 __variable_9f8903 no-scrollbar bg-background text-text-primary`}
      style={{ "--vh": "4.7px" } as React.CSSProperties}
    >
      <body
        suppressHydrationWarning
        data-preview="hide"
        data-modal="hide"
        data-type="search"
        cz-shortcut-listen="true"
        className="
          no-scrollbar 
          group/body 
          data-[preview=show]:overflow-hidden 
          data-[modal=show]:overflow-hidden 
          flex 
          min-h-screen 
          flex-col
        "
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
