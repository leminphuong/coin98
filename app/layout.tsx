import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="
        no-scrollbar bg-background text-text-primary
        __variable_9f8903 __variable_7ca1b9
      "
    >
      <body
        suppressHydrationWarning
        className="no-scrollbar flex min-h-screen flex-col"
      >
        {children}
      </body>
      
    </html>
  );
}
