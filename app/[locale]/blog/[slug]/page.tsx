"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

const validSlugs = ["chuyen-doi-so-2026", "chi-phi-lam-app", "ai-cho-doanh-nghiep"];

export default function BlogPostPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params.locale as string;
  const slug = params.slug as string;

  if (!validSlugs.includes(slug)) {
    notFound();
  }

  const content = t(`blog.posts.${slug}.content`) as string;
  const title = t(`blog.posts.${slug}.title`) as string;
  const date = t(`blog.posts.${slug}.date`) as string;
  const author = t(`blog.posts.${slug}.author`) as string;

  // Simple markdown rendering for ## and ### headers, ** bold, and paragraphs
  const renderContent = (md: string) => {
    return md.split("\n\n").map((block, i) => {
      const trimmed = block.trim();
      if (trimmed.startsWith("### ")) {
        return <h3 key={i} className="text-xl font-bold text-foreground mt-8 mb-3">{trimmed.slice(4)}</h3>;
      }
      if (trimmed.startsWith("## ")) {
        return <h2 key={i} className="text-2xl font-bold text-foreground mt-10 mb-4">{trimmed.slice(3)}</h2>;
      }
      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        const items = trimmed.split("\n").filter(l => l.trim().startsWith("- ") || l.trim().startsWith("* "));
        return (
          <ul key={i} className="space-y-2 mb-4 ml-4">
            {items.map((item, j) => (
              <li key={j} className="text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{item.replace(/^[-*]\s/, "")}</span>
              </li>
            ))}
          </ul>
        );
      }
      // Handle bold text within paragraphs
      const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={i} className="text-muted-foreground leading-relaxed mb-4">
          {parts.map((part, j) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={j} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>
            ) : (
              <span key={j}>{part}</span>
            )
          )}
        </p>
      );
    });
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <Link href={`/${locale}/blog`}>
            <Button variant="ghost" size="sm" className="mb-8 gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t("blog.back_to_blog")}
            </Button>
          </Link>

          {/* Article Header */}
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {date}
              </span>
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {author}
              </span>
              <button
                className="flex items-center gap-2 hover:text-primary transition-colors ml-auto"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title, url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                  }
                }}
              >
                <Share2 className="h-4 w-4" />
                {t("blog.share")}
              </button>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose-custom">
            {renderContent(content)}
          </article>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/10 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t("services.cta_title")}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t("services.cta_desc")}
            </p>
            <Button
              size="lg"
              className="bg-gradient-accent hover:opacity-90 shadow-glow"
              onClick={() => (window.location.href = `/${locale}#contact`)}
            >
              {t("services.cta_btn")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
