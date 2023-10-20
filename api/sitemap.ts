import { NextApiRequest, NextApiResponse } from "next";

function generateSitemap() {
  const baseUrl = "https://www.socialbrandmanagers.com";
  const urls = [
    "/",
    "/about",
    "/portfolio",
    "/form",
    "/analytics-and-report",
    "/blog",
    "/brand-management",
    "/community-management",
    "/content-creation-curation",
    "/join-us",
    "/services",
    "/social-media-advertising",
    "/social-media-strategy",
  ];

  const currentDate = new Date().toISOString();
  const xmlEntries = urls.map((url) => {
    return `
      <url>
        <loc>${baseUrl}${url}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
    `;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${xmlEntries.join("")}
</urlset>`;
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  // Generate your sitemap dynamically here
  const sitemapXml = generateSitemap();

  // Set the content type to XML
  res.setHeader("Content-Type", "text/xml");
  // Write the sitemap XML to the response
  res.write(sitemapXml);
  res.end();
};
