import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

export default function BlogCTA({ locale }: { locale: string }) {
  return (
    <aside
      className="mt-16 p-8 md:p-10 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-2xl border border-primary/20"
      aria-label="Call to action"
    >
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-4xl mb-3">💡</div>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Bạn cần tư vấn chuyển đổi số?
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          VKT Software tư vấn miễn phí — phân tích quy trình hiện tại và đề xuất
          giải pháp phù hợp nhất với ngân sách của doanh nghiệp bạn.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" asChild className="bg-gradient-accent shadow-glow">
            <a href="tel:+84783198078" aria-label="Gọi ngay">
              <Phone className="mr-2 h-4 w-4" />
              Gọi ngay: 0783 198 078
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://zalo.me/0783198078"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat Zalo
            </a>
          </Button>
        </div>
        <div className="mt-5">
          <Link
            href={`/${locale}/bang-gia`}
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            Xem bảng giá dịch vụ
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
