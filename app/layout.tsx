import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Script from "next/script";

import NewFooter from "./components/NewFooter";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Social Brand Managers",
  description: "Level up social media contents for your business",
  // robots:
  //   "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  // twitter: {},
  // authors: [{ name: "TechDuce Africa", url: "https://www.techduce.africa" }],
  // openGraph: {
  //   title: "Social Brand Managers",
  //   description:
  //     "Elevate Your Brand's Social Presence with Our Expertise - Your Ultimate Social Media Companion for Enhanced Business Content.",
  //   url: "https://socialbrandmanagers.com",
  //   siteName: "SBM",
  //   images: [
  //     {
  //       url: "https://socialbrandmanagers.com/_next/image?url=%2Flogo.png&w=1920&q=75",
  //       width: 636,
  //       height: 574,
  //     },
  //   ],
  //   locale: "en_NG",
  //   type: "website",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />

      {children}

      <NewFooter />
    </div>
  );
}
