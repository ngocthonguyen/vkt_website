import type { BlogPost } from "./blog-types";
import { post as excel } from "@/content/blog/doanh-nghiep-nho-mat-bao-nhieu-tien-vi-excel";
import { post as dauHieu } from "@/content/blog/5-dau-hieu-can-chuyen-doi-so";
import { post as chiPhi } from "@/content/blog/chi-phi-chuyen-doi-so-doanh-nghiep-nho";
import { post as nhaHang } from "@/content/blog/lo-trinh-chuyen-doi-so-nha-hang";
import { post as customSw } from "@/content/blog/khi-nao-nen-viet-phan-mem-rieng";

export const allPosts: BlogPost[] = [excel, dauHieu, chiPhi, nhaHang, customSw].sort(
  (a, b) => (a.date < b.date ? 1 : -1)
);

export function getAllSlugs(): string[] {
  return allPosts.map((p) => p.slug);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const post = getPostBySlug(slug);
  if (!post) return [];
  const related = post.relatedSlugs
    .map((s) => getPostBySlug(s))
    .filter((p): p is BlogPost => !!p);
  if (related.length >= limit) return related.slice(0, limit);
  // Fill with most recent other posts
  const others = allPosts.filter(
    (p) => p.slug !== slug && !related.find((r) => r.slug === p.slug)
  );
  return [...related, ...others].slice(0, limit);
}

export function getReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function formatDate(iso: string, locale = "vi-VN"): string {
  try {
    return new Date(iso).toLocaleDateString(locale, {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}
