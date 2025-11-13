import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://archive-portfolio.piyushpaul.com"),
  title: "Piyush Paul - Full Stack Web Developer & Web Scraping Specialist",
  description:
    "Welcome to Piyush Paul's portfolio. I am a student specializing in creating full stack web applications with Next.js, proficient in web scraping using Python, and exploring Rust. Check out my latest project: a wallpaper app built with Tauri, Rust, and React. Let's collaborate and bring your ideas to life!",
  openGraph: {
    title: "Piyush Paul - Full Stack Web Developer",
    description:
      "Welcome to Piyush Paul's portfolio. I am a student specializing in creating full stack web applications with Next.js, proficient in web scraping using Python, and exploring Rust. Check out my latest project: a wallpaper app built with Tauri, Rust, and React. Let's collaborate and bring your ideas to life!",
    type: "website",
    locale: "en_US",
    url: process.env.SITE_URL,
    siteName: "Piyush Paul Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>
          Piyush Paul - Full Stack Web Developer & Web Scraping Specialist
        </title>
        <meta
          name="description"
          content="Welcome to Piyush Paul's portfolio. I am a student specializing in creating full stack web applications with Next.js, proficient in web scraping using Python, and exploring Rust. Check out my latest project: a wallpaper app built with Tauri, Rust, and React. Let's collaborate and bring your ideas to life!"
        />
      </Head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  );
}
