import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const GTM_ID = "GTM-WD23JB47";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Your global meta tags, styles, and scripts go here */}
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="theme-color" content="#0048a0" />
          {/* <!-- FACEBOOK META TAGS --> */}
          <meta property="og:title" content="Social Brand Managers" />
          <meta
            property="og:description"
            content="Elevate Your Brand's Social Presence with Our Expertise - Your Ultimate Social Media Companion for Enhanced Business Content."
          />
          <meta
            property="og:site_name"
            content="Social Brand Managers by Techduce Africa"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://socialbrandmanagers.com" />
          <meta
            property="og:image"
            content="https://assets-social-brand-managers.netlify.app/og%20image/og-image.webp"
          />
          <meta property="og:image:width" content="636" />
          <meta property="og:image:height" content="574" />
          <meta property="og:image:type" content="image/webp" />
          <meta property="og:locale" content="en_NG" />
          {/* <!-- TWITTER META TAGS --> */}
          <meta name="author" content="Techduce Africa" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@TechduceA" />
          <meta name="twitter:creator" content="@TechduceA" />
          <meta property="og:url" content="https://socialbrandmanagers.com" />
          <meta
            property="og:title"
            content="DuceCRM | Your Key to Better Customer Relationships"
          />

          <meta
            property="og:image"
            content="https://assets-social-brand-managers.netlify.app/og%20image/og-image.webp"
          />
          {/* <!-- GOOGLE INDEX TAG --> */}
          <meta
            name="robots"
            content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          />
          <link rel="canonical" href="https://socialbrandmanagers.com" />

          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
          </Script>
        </Head>
        <body className="bg-secondary-blue">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
