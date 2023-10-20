const URL = "https://socialbrandmanagers.com";

export default async function sitemap() {
  const routes = [
    "",
    "/about",
    "/portfolio",
    "/blog",
    "/form",
    "/analytics-and-report",
    "/brand-management",
    "/community-management",
    "/content-creation-curation",
    "/social-media-strategy",
    "/social-media-advertising",
    "/services",
    "/join-us",
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
