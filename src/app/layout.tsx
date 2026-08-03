import 'lenis/dist/lenis.css';
import { SmoothScroll } from '@/components/SmoothScroll';

import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saksham.dev"),
  title: "Saksham Sharma | Backend SDE",
  description:
    "Backend SDE building scalable, production-ready APIs. FastAPI, PostgreSQL, ASP.NET Core, and the testing discipline to ship systems that hold up.",
  keywords: [
    "Saksham Sharma",
    "Backend Engineer",
    "SDE",
    "FastAPI",
    "PostgreSQL",
    "Full Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Saksham Sharma" }],
  openGraph: {
    title: "Saksham Sharma | Backend SDE",
    description:
      "Backend SDE building scalable, production-ready APIs. FastAPI, PostgreSQL, ASP.NET Core, and the testing discipline to ship systems that hold up.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saksham Sharma | Backend SDE",
    description:
      "Backend SDE building scalable, production-ready APIs.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
