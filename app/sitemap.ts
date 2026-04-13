import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vktsoftware.com";
  const locales = ["vi", "en", "fr"];
  const pages = ["", "/dich-vu", "/ve-chung-toi", "/lien-he", "/bang-gia", "/du-an", "/blog"];

  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}${page}`])
        ),
      },
    }))
  );
}
