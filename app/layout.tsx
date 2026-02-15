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
      { url: "/alanur_bild.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/alanur_bild.jpg", sizes: "16x16", type: "image/jpeg" },
      { url: "/alanur_bild.jpg", sizes: "192x192", type: "image/jpeg" },
      { url: "/alanur_bild.jpg", sizes: "512x512", type: "image/jpeg" },
    ],
    shortcut: "/alanur_bild.jpg",
    apple: [
      { url: "/alanur_bild.jpg", sizes: "180x180", type: "image/jpeg" },
      { url: "/alanur_bild.jpg", sizes: "152x152", type: "image/jpeg" },
      { url: "/alanur_bild.jpg", sizes: "120x120", type: "image/jpeg" },
    ],
    other: [
      { rel: "mask-icon", url: "/alanur_bild.jpg", color: "#f43f5e" },
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
    images: ["/alanur_bild.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alanur Atesoglu | Soziologie & Marketing",
    description:
      "Soziologie-Studentin mit Fokus auf Marketing und Kommunikation.",
    images: ["/alanur_bild.jpg"],
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
