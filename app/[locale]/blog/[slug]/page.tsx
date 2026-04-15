import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import {
  allPosts,
  getPostBySlug,
  getRelatedPosts,
  getReadingTime,
  formatDate,
} from "@/lib/blog";
import { locales, type Locale } from "@/lib/i18n";
import MarkdownRenderer, {
  extractHeadings,
} from "@/components/blog/MarkdownRenderer";
import BlogCTA from "@/components/blog/BlogCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";
import TableOfContents from "@/components/blog/TableOfContents";
import ShareButton from "@/components/blog/ShareButton";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const post of allPosts) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const locale = (locales.includes(params.locale as Locale)
    ? params.locale
    : "vi") as Locale;
  const baseUrl = "https://vktsoftware.com";
  const url = `${baseUrl}/${locale}/blog/${post.slug}`;

  return {
    title: `${post.title} | VKT Software Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${baseUrl}/${l}/blog/${post.slug}`])
      ),
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.dateModified ?? post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: `${baseUrl}/api/og`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${baseUrl}/api/og`],
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const locale = (locales.includes(params.locale as Locale)
    ? params.locale
    : "vi") as Locale;
  const headings = extractHeadings(post.content);
  const related = getRelatedPosts(post.slug, 3);
  const readingTime = getReadingTime(post.content);
  const baseUrl = "https://vktsoftware.com";
  const url = `${baseUrl}/${locale}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorTitle,
      worksFor: {
        "@type": "Organization",
        name: "VKT Software",
        url: baseUrl,
      },
    },
    publisher: {
      "@type": "Organization",
      name: "VKT Software",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/vkt-logo.svg`,
      },
    },
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: `${baseUrl}/api/og`,
    keywords: post.keywords.join(", "),
    articleSection: post.tags[0] ?? "Chuyển đổi số",
    inLanguage: locale === "vi" ? "vi-VN" : locale === "fr" ? "fr-FR" : "en-US",
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: `${baseUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/${locale}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };

  return (
    <div className="pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <nav
            className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
            aria-label="Breadcrumb"
          >
            <Link href={`/${locale}`} className="hover:text-primary">
              Trang chủ
            </Link>
            <span>/</span>
            <Link href={`/${locale}/blog`} className="hover:text-primary">
              Blog
            </Link>
            <span>/</span>
            <span className="text-foreground truncate">{post.title}</span>
          </nav>

          <Link href={`/${locale}/blog`}>
            <Button variant="ghost" size="sm" className="mb-6 gap-2 -ml-2">
              <ArrowLeft className="h-4 w-4" />
              Tất cả bài viết
            </Button>
          </Link>

          <div className="grid lg:grid-cols-[1fr_240px] gap-10">
            <article className="min-w-0 max-w-3xl">
              <header className="mb-10">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
                  {post.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground pb-6 border-b border-border">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {post.author}{" "}
                    <span className="hidden sm:inline text-xs">
                      — {post.authorTitle}
                    </span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {readingTime} phút đọc
                  </span>
                  <ShareButton title={post.title} />
                </div>
              </header>

              <MarkdownRenderer content={post.content} />

              <BlogCTA locale={locale} />

              <RelatedPosts posts={related} locale={locale} />
            </article>

            <TableOfContents headings={headings} />
          </div>
        </div>
      </div>
    </div>
  );
}
