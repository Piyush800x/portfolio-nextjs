import { Analytics } from "@vercel/analytics/react"
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Piyush Paul - Hire Me",
    description: "Hire me to get a Premium looking website!",
    openGraph: {
        title: "Piyush Paul - Hire Me",
        description: "Hire me to get a Premium looking website!",
        type: "website",
        locale: "en_US",
        url: process.env.SITE_URL,
        siteName: "Piyush Paul - Hire Me"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
      <html lang="en">
        <Head>
          <title>Piyush Paul - Hire Me</title>
          <meta name="description" content="Hire me to get a Premium looking website!"/>
        </Head>
        <body>
          {children}
          <Analytics/>
        </body>
      </html>
    );
}
