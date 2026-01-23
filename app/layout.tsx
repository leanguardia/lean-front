import "./globals.css";

import { DM_Sans, Outfit } from "next/font/google";

import type { Metadata } from "next";

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "leancontinuo",
  description: "knowledge, insights, and experiences",
  keywords: ["knowledge", "insights", "experiences"],
  authors: [{ name: "Leancontinuo", url: "https://leancontinuo.com" }],
  creator: "Leancontinuo",
  publisher: "Leancontinuo",
  openGraph: {
    title: "Leancontinuo",
    description: "knowledge, insights, and experiences",
  },
};

const BreakpointIndicator = function () {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center justify-center rounded-full bg-black px-3 py-2 text-xs font-mono text-white">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showBreakpointIndicator = process.env.NODE_ENV !== "production";

  return (
    <html lang="es">
      <body
        className={`${outfit.variable} ${dmSans.variable} antialiased`}
      >
        {children}
        {showBreakpointIndicator ? <BreakpointIndicator /> : null}
      </body>
    </html>
  );
}
