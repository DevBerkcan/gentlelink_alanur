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
  title: "Alanur Atesoglu | Soziologie & Marketing",
  description:
    "Soziologie-Studentin mit Interesse an Marketing, Social Media und digitaler Kommunikation.",
  keywords: [
    "Alanur Atesoglu",
    "Soziologie",
    "Marketing",
    "Digitale Kommunikation",
    "LinkedIn",
    "Digitale Trends",
    "Social Media",
    "Branding",
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
      { rel: "mask-icon", url: "/berkcan.png", color: "#f43f5e" },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Alanur",
  },
  openGraph: {
    title: "Alanur Atesoglu | Soziologie & Marketing",
    description:
      "Soziologie-Studentin mit Fokus auf Marketing, Social Media und digitale Kommunikation.",
    type: "website",
    locale: "de_DE",
    siteName: "Alanur Atesoglu",
    images: ["/berkcan.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alanur Atesoglu | Soziologie & Marketing",
    description:
      "Soziologie-Studentin mit Fokus auf Marketing und Kommunikation.",
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
