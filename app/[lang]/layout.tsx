import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import SectionIdAssigner from "@/components/SectionIdAssigner"; // Adjust path to match your file structure
import "../globals.css";

// Professional, modern enterprise typography
const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

// Comprehensive SEO Metadata Configuration
export const metadata: Metadata = {
  metadataBase: new URL("https://symventra.com"),
  title: {
    default: "SymVentra | Choose the health future that fits you",
    template: "%s | SymVentra",
  },
  description:
    "Discover personalized healthcare solutions with SymVentra. Choose the health future that fits your lifestyle, wellness, and long-term goals.",
  keywords: [
    "SymVentra",
    "healthcare",
    "personalized health",
    "wellness future",
    "health solutions",
  ],
  authors: [{ name: "SymVentra Team" }],
  creator: "SymVentra",
  publisher: "SymVentra",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "SymVentra | Choose the health future that fits you",
    description:
      "Discover personalized healthcare solutions with SymVentra. Choose the health future that fits your lifestyle and goals.",
    url: "https://symventra.com",
    siteName: "SymVentra",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SymVentra - Healthcare Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SymVentra | Choose the health future that fits you",
    description:
      "Discover personalized healthcare solutions with SymVentra. Choose the health future that fits your lifestyle and goals.",
    images: ["/og-image.jpg"],
    creator: "@symventra",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params?: Promise<{ lang?: string }>;
}>) {
  const resolvedParams = params ? await params : undefined;
  const langCode = resolvedParams?.lang ?? "en";
  const htmlLang = langCode.split("-")[0] || "en";

  const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

  return (
    <html
      lang={htmlLang}
      className={`${sansFont.variable} ${monoFont.variable} h-full antialiased scroll-pt-24 scroll-smooth`}
    >
      <body className="font-sans min-h-full flex flex-col antialiased text-slate-900 bg-white">
        {/* Cookiebot via Next.js Script */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="76acced4-09ad-4300-92c2-3b066c02c028"
          data-blockingmode="auto"
          type="text/javascript"
          strategy="beforeInteractive"
        />

        {/* Google Analytics 4 Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              send_page_view: false
            });
          `}
        </Script>  

        {/* Dynamic section ID assigner wrapping page layout */}
        <SectionIdAssigner>{children}</SectionIdAssigner>
      </body>
    </html>
  );
}