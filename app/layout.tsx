import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Script from "next/script";

import NewFooter from "./components/NewFooter";
import GoogleAnalytics from "./components/GoogleAnalytics";

const GTM_ID = "GTM-WD23JB47";

export const metadata: Metadata = {
  title: "Social Brand Managers",
  description: "Level up social media contents for your business",
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
        <Navbar />
        <main>{children}</main>
        <NewFooter />
      </body>
    </html>
  );
}
