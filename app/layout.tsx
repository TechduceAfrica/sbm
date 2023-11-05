import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Script from "next/script";

import NewFooter from "./components/NewFooter";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Head from "next/head";

const GTM_ID = "GTM-WD23JB47";

export const metadata: Metadata = {
  metadataBase: new URL("https://socialbrandmanagers.com"),
  title: "Social Brand Managers",
  description: "Level up social media contents for your business",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  twitter: {},
  authors: [{ name: "TechDuce Africa", url: "https://www.techduce.africa" }],
  openGraph: {
    title: "Social Brand Managers",
    description:
      "Elevate Your Brand's Social Presence with Our Expertise - Your Ultimate Social Media Companion for Enhanced Business Content.",
    url: "https://socialbrandmanagers.com",
    siteName: "SBM",
    // images: [
    //   {
    //     url: "/_next/image?url=%2Flogo.png&w=1920&q=75",
    //     width: 636,
    //     height: 574,
    //   },
    // ],
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:image"
          content="https://socialbrandmanagers.com/_next/image?url=%2Flogo.png&w=1920&q=75"
        />
        <meta property="og:image:width" content="636" />
        <meta property="og:image:height" content="574" />
        <meta property="og:image:type" content="image/webp" />
      </head>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <body className="bg-secondary-blue">
        <Navbar />

        <main className="">{children}</main>

        <NewFooter />
      </body>
    </html>
  );
}
