import "./globals.css";

import { DM_Sans, Outfit } from "next/font/google";

import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import Script from "next/script";

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
  title: "Leancontinuo | Evolución interna y externa",
  description:
    "Evolución interna y externa, curiosidad y acción para elevar la humanidad. Leancontinuo es la ventana para conocer un apasionado por la evolución humana a través de la tecnología y la filosofía.",
  keywords: [
    "LeanContinuo",
    "Lean Continuo",
    "Aprendizaje Continuo",
    "Lectura",
    "Escritura",
    "Tecnología",
    "Mentalidad Probabilística",
    "Filosofía",
    "Inteligencia Artificial",
    "Análisis de datos",
    "Web3",
    "Blockchain",
    "Descentralización",
  ],
  authors: [{ name: "Leandro Guardia, Leancontinuo" }],
  creator: "Leandro Guardia",
  publisher: "Leancontinuo",
  robots: "index, follow",
  alternates: {
    canonical: "https://leancontinuo.com/",
  },
  openGraph: {
    title: "Leancontinuo",
    description: "Evolución interna y externa, curiosidad y acción para elevar la humanidad.",
    url: "https://leancontinuo.com/",
    siteName: "Leancontinuo",
    images: [
      {
        url: "https://leancontinuo.com/logomark.png",
        alt: "Lean Continuo",
      },
    ],
    locale: "es_BO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@leancontinuo",
    creator: "@leancontinuo",
    title: "Leancontinuo",
    description: "Evolución interna y externa, curiosidad y acción para elevar la humanidad.",
    images: [
      {
        url: "https://leancontinuo.com/logomark.png",
        alt: "Lean Continuo",
      },
    ],
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
      <GoogleTagManager gtmId="GTM-K36SHWQQ" />
      <body
        className={`${outfit.variable} ${dmSans.variable} antialiased`}
      >
        <div className="page-loader" aria-hidden="true">
          <div className="loader" aria-label="Cargando" role="status" />
        </div>
        {children}
        {showBreakpointIndicator ? <BreakpointIndicator /> : null}
        <Script id="page-loader" strategy="beforeInteractive">
          {`
            (function() {
              var MIN_DURATION = 1000;
              var startTime = Date.now();
              var done = false;

              function markLoaded() {
                if (done) return;
                done = true;
                var loader = document.querySelector(".page-loader");
                if (loader) loader.classList.add("loaded");
              }

              function onReady() {
                var elapsed = Date.now() - startTime;
                var remaining = MIN_DURATION - elapsed;
                if (remaining <= 0) {
                  markLoaded();
                } else {
                  setTimeout(markLoaded, remaining);
                }
              }

              if (document.readyState === "complete") {
                onReady();
              } else {
                window.addEventListener("load", onReady);
              }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
