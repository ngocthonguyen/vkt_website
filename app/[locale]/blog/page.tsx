"use client";

import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const blogSlugs = ["chuyen-doi-so-2026", "chi-phi-lam-app", "ai-cho-doanh-nghiep"];

export default function BlogListPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params.locale as string;

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("blog.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("blog.subtitle")}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogSlugs.map((slug) => (
            <Card
              key={slug}
              className="h-full hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-gradient-card border-border/50 group"
            >
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {t(`blog.posts.${slug}.date`)}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {t(`blog.posts.${slug}.author`)}
                  </span>
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors leading-tight">
                  {t(`blog.posts.${slug}.title`)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t(`blog.posts.${slug}.excerpt`)}
                </p>
                <Link href={`/${locale}/blog/${slug}`}>
                  <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border-primary/20">
                    {t("blog.read_more")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
