import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["200", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Kaung Myat Tun | Software Engineer & Full Stack Developer",
  description:
    "Software Engineer specializing in React, Next.js, and System Design. Focused on building scalable, clean, and maintainable web applications.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Express.js",
    "Clean Architecture",
    "System Design",
  ],
  authors: [{ name: "Kaung Myat Tun" }],
  creator: "Kaung Myat Tun",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kaungmyattun.vercel.app",
    title: "Kaung Myat Tun | Software Engineer",
    description:
      "Engineering high-performance web applications and scalable APIs.",
    siteName: "Kaung Myat Tun Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Kaung Myat Tun Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaung Myat Tun | Software Engineer",
    description:
      "Engineering high-performance web applications and scalable APIs.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
