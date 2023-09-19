import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewFooter from "./components/NewFooter";

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
        <Navbar />
          <main>{children}</main>
        <NewFooter />
      </body>
    </html>
  );
}
