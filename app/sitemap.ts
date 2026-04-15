import { MetadataRoute } from "next";
import { allPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vktsoftware.com";
  const locales = ["vi", "en", "fr"] as const;
  const staticPages = [
    "",
    "/dich-vu",
    "/ve-chung-toi",
    "/lien-he",
    "/bang-gia",
    "/du-an",
    "/blog",
  ];

  const staticEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1.0 : page === "/dich-vu" ? 0.9 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}${page}`])
        ),
      },
    }))
  );

  const blogEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    allPosts.map((post) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.dateModified ?? post.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}/blog/${post.slug}`])
        ),
      },
    }))
  );

  return [...staticEntries, ...blogEntries];
}
