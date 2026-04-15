import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { allPosts, getReadingTime, formatDate } from "@/lib/blog";
import { locales, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const pageTitleByLocale: Record<Locale, string> = {
  vi: "Blog — Chuyển đổi số cho doanh nghiệp Việt Nam",
  en: "Blog — Digital Transformation for Vietnamese Businesses",
  fr: "Blog — Transformation numérique pour entreprises vietnamiennes",
};
const pageDescByLocale: Record<Locale, string> = {
  vi: "Kiến thức thực tế về chuyển đổi số, số hoá quản lý, phần mềm theo yêu cầu và tự động hoá — viết cho chủ doanh nghiệp nhỏ Việt Nam.",
  en: "Practical knowledge on digital transformation, management digitalization, custom software and automation — written for Vietnamese SME owners.",
  fr: "Connaissances pratiques sur la transformation numérique, la digitalisation, les logiciels sur mesure et l'automatisation pour PME vietnamiennes.",
};

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = (locales.includes(params.locale as Locale)
    ? params.locale
    : "vi") as Locale;
  const title = pageTitleByLocale[locale];
  const description = pageDescByLocale[locale];
  const baseUrl = "https://vktsoftware.com";
  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/blog`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${baseUrl}/${l}/blog`])
      ),
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/blog`,
      type: "website",
    },
  };
}

export default function BlogListPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = (locales.includes(params.locale as Locale)
    ? params.locale
    : "vi") as Locale;

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {locale === "vi"
              ? "Blog — Kiến thức chuyển đổi số"
              : locale === "fr"
              ? "Blog — Transformation numérique"
              : "Blog — Digital Transformation"}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {pageDescByLocale[locale]}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {allPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="group block"
            >
              <Card className="h-full hover:shadow-glow transition-all duration-500 hover:-translate-y-1 bg-gradient-card border-border/50">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.date, locale === "vi" ? "vi-VN" : locale === "fr" ? "fr-FR" : "en-US")}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="h-4 w-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {getReadingTime(post.content)} phút đọc
                    </span>
                  </div>
                  <CardTitle className="text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-5 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border-primary/20"
                  >
                    Đọc tiếp
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
