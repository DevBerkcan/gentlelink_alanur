import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { KlaroCookieConsent } from "@/components/KlaroCookieConsent";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { MicrosoftClarity } from "@/components/analytics/MicrosoftClarity";
import { TrackingProvider } from "@/components/analytics/TrackingProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alanur Millihuzin | Soziologie student & Marketing Enthusiast",
  description:
    "Soziologie student & Marketing Enthusiast aus Wuppertal. Leidenschaft für digitale Trends, Social Media und innovative Marketingstrategien.",
  keywords: [
    "Alanur Millihuzin",
    "Entrepreneur",
    "Wuppertal",
    "Freelancer",
    "Soziologie student",
    "Marketing Enthusiast",
    "Digitale Trends",
    "Social Media",
    "Innovative Marketingstrategien",
  ],
  icons: {
    icon: [
      { url: "/berkcan.png", sizes: "32x32", type: "image/png" },
      { url: "/berkcan.png", sizes: "16x16", type: "image/png" },
      { url: "/berkcan.png", sizes: "192x192", type: "image/png" },
      { url: "/berkcan.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/berkcan.png",
    apple: [
      { url: "/berkcan.png", sizes: "180x180", type: "image/png" },
      { url: "/berkcan.png", sizes: "152x152", type: "image/png" },
      { url: "/berkcan.png", sizes: "120x120", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/berkcan.png", color: "#8b5cf6" },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Alanur",
  },
  openGraph: {
    title: "Alanur Atesoglu | Software Developer & Entrepreneur",
    description:
      "Software Developer & Entrepreneur aus Düsseldorf. React, Next.js & TypeScript.",
    type: "website",
    locale: "de_DE",
    siteName: "Alanur Atesoglu",
    images: ["/berkcan.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alanur Atesoglu | Software Developer & Entrepreneur",
    description:
      "Software Developer & Entrepreneur aus Düsseldorf.",
    images: ["/berkcan.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={inter.className}>
        <GoogleAnalytics />
        <MicrosoftClarity />
        <ThemeProvider>
          <NextUIProvider>
            <Suspense fallback={null}>
              <TrackingProvider>
                <KlaroCookieConsent />
                {children}
              </TrackingProvider>
            </Suspense>
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
