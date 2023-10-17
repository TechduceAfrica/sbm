import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

import NewFooter from "./components/NewFooter";
import GoogleAnalytics from "./components/GoogleAnalytics";

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
      <body className="bg-secondary-blue">
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}

        <Navbar />
        <main>{children}</main>
        <NewFooter />
      </body>
    </html>
  );
}
