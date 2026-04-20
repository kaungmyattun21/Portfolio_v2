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
  description: "Software Engineer specializing in React, Next.js, and Clean Architecture. Focused on building scalable, clean, and maintainable web applications.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", "Express.js", "Clean Architecture"],
  authors: [{ name: "Kaung Myat Tun" }],
  creator: "Kaung Myat Tun",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kaungmyattun.com", // Assuming this is the domain, can be updated later
    title: "Kaung Myat Tun | Software Engineer",
    description: "Engineering high-performance web applications and scalable APIs.",
    siteName: "Kaung Myat Tun Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaung Myat Tun | Software Engineer",
    description: "Engineering high-performance web applications and scalable APIs.",
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
