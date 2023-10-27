import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Script from "next/script";

import NewFooter from "./components/NewFooter";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { type } from "os";

const GTM_ID = "GTM-WD23JB47";

export const metadata: Metadata = {
  title: "Social Brand Managers",
  description: "Level up social media contents for your business",
  openGraph: {
    title: "Social Brand Managers",
    description:
      "Elevate Your Brand's Social Presence with Our Expertise - Your Ultimate Social Media Companion for Enhanced Business Content.",
    url: "https://socialbrandmanagers.com",
    siteName: "SBM",
    images: [
      {
        url: "https://socialbrandmanagers.com/_next/image?url=%2Flogo.png&w=1920&q=75",
        width: 800,
        height: 600,
      },
      {
        url: "https://socialbrandmanagers.com/_next/image?url=https%3A%2F%2Fassets-social-brand-managers.netlify.app%2Fresized%2520images%2Fservicepagepic3.png&w=828&q=75",
        width: 1800,
        height: 1600,
        alt: "SBM custom alt",
      },
    ],
    locale: "en_GB",
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
        <div className="overflow-hidden">
          <Navbar />
          <main className="">{children}</main>
          <NewFooter />
        </div>
      </body>
    </html>
  );
}
