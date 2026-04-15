import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog-types";
import { formatDate, getReadingTime } from "@/lib/blog";

export default function RelatedPosts({
  posts,
  locale,
}: {
  posts: BlogPost[];
  locale: string;
}) {
  if (posts.length === 0) return null;
  return (
    <section className="mt-20" aria-label="Bài viết liên quan">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
        Bài viết liên quan
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/${locale}/blog/${post.slug}`}
            className="group block"
          >
            <Card className="h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <span>{formatDate(post.date)}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {getReadingTime(post.content)} phút
                  </span>
                </div>
                <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-primary">
                  Đọc tiếp <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
