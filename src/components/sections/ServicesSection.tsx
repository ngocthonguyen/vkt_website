import { Code, Zap, Settings, Cloud, Globe, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const services = [
  {
    icon: Code,
    title: "Viết phần mềm theo yêu cầu",
    description: "Phát triển phần mềm chuyên biệt theo đúng quy trình và nhu cầu vận hành của từng doanh nghiệp: quản lý bán hàng, nhân sự, kho, sản xuất, tài chính...",
    features: ["Phân tích yêu cầu chi tiết", "Thiết kế giao diện thân thiện", "Bảo hành và hỗ trợ"],
    color: "bg-blue-50 border-blue-200"
  },
  {
    icon: Zap,
    title: "Chuyển đổi số",
    description: "Chuyển đổi số giúp doanh nghiệp tiết kiệm chi phí, tăng tốc độ và kiểm soát dữ liệu tốt hơn. VKT tư vấn, triển khai toàn diện quy trình số hoá.",
    features: ["Khảo sát hiện trạng", "Lộ trình triển khai", "Đào tạo nhân viên"],
    color: "bg-green-50 border-green-200"
  },
  {
    icon: Settings,
    title: "Tối ưu hoá quy trình",
    description: "Hỗ trợ doanh nghiệp tự động hoá các bước lặp lại trong quy trình vận hành bằng phần mềm, tiết kiệm thời gian và giảm sai sót.",
    features: ["Phân tích quy trình", "Tự động hoá thông minh", "Tối ưu hiệu suất"],
    color: "bg-purple-50 border-purple-200"
  },
  {
    icon: Cloud,
    title: "Giải pháp hệ thống CNTT",
    description: "Tư vấn và triển khai hệ thống ERP, CRM, giải pháp quản lý email, dữ liệu, bảo mật, làm việc từ xa phù hợp với ngân sách SME.",
    features: ["Tư vấn giải pháp", "Triển khai hệ thống", "Bảo trì định kỳ"],
    color: "bg-orange-50 border-orange-200"
  },
  {
    icon: Globe,
    title: "Thiết kế website & marketing",
    description: "Giúp doanh nghiệp xây dựng hiện diện trực tuyến chuyên nghiệp: từ website giới thiệu, landing page đến các chiến dịch quảng cáo.",
    features: ["Website responsive", "SEO tối ưu", "Quản lý quảng cáo"],
    color: "bg-pink-50 border-pink-200"
  },
  {
    icon: TrendingUp,
    title: "Tư vấn chiến lược CNTT",
    description: "Đồng hành cùng ban lãnh đạo trong việc xây dựng chiến lược công nghệ thông tin dài hạn, phù hợp với mục tiêu phát triển doanh nghiệp.",
    features: ["Chiến lược dài hạn", "Roadmap công nghệ", "Đánh giá ROI"],
    color: "bg-indigo-50 border-indigo-200"
  }
];

const servicePopups = [
  {
    content: (
      <>
        <p>
          <strong>Phát triển phần mềm theo yêu cầu</strong> giúp doanh nghiệp sở hữu giải pháp công nghệ phù hợp 100% với quy trình vận hành thực tế. VKT Software đồng hành từ khâu phân tích nghiệp vụ, thiết kế giao diện thân thiện, đến triển khai và bảo hành lâu dài.
        </p>
        <ul className="mt-4 space-y-2">
          <li>• Phân tích chi tiết nhu cầu và quy trình của doanh nghiệp</li>
          <li>• Thiết kế UI/UX hiện đại, dễ sử dụng</li>
          <li>• Lập trình, kiểm thử, triển khai tận nơi</li>
          <li>• Bảo hành, bảo trì và nâng cấp theo yêu cầu</li>
        </ul>
        <p className="mt-4 text-primary font-semibold">Giải pháp tối ưu cho doanh nghiệp muốn tăng hiệu quả, giảm chi phí và kiểm soát tốt hơn!</p>
      </>
    )
  },
  {
    content: (
      <>
        <p>
          <strong>Chuyển đổi số</strong> là xu hướng tất yếu giúp doanh nghiệp tiết kiệm chi phí, tăng tốc độ xử lý và kiểm soát dữ liệu tốt hơn. VKT Software tư vấn lộ trình chuyển đổi số phù hợp, triển khai toàn diện từ khảo sát, đào tạo đến vận hành.
        </p>
        <ul className="mt-4 space-y-2">
          <li>• Khảo sát hiện trạng, phân tích điểm mạnh/yếu</li>
          <li>• Xây dựng lộ trình chuyển đổi số từng bước</li>
          <li>• Đào tạo nhân viên, chuyển giao công nghệ</li>
          <li>• Hỗ trợ vận hành, tối ưu liên tục</li>
        </ul>
        <p className="mt-4 text-primary font-semibold">Đồng hành cùng doanh nghiệp trên hành trình số hoá thành công!</p>
      </>
    )
  },
  {
    content: (
      <>
        <p>
          <strong>Tối ưu hoá quy trình</strong> giúp doanh nghiệp tự động hoá các bước lặp lại, giảm sai sót và tiết kiệm thời gian. VKT Software phân tích quy trình, tư vấn giải pháp tự động hoá thông minh, nâng cao hiệu suất làm việc.
        </p>
        <ul className="mt-4 space-y-2">
          <li>• Phân tích quy trình vận hành hiện tại</li>
          <li>• Đề xuất giải pháp tự động hoá phù hợp</li>
          <li>• Lập trình, tích hợp hệ thống</li>
          <li>• Đào tạo, hỗ trợ vận hành</li>
        </ul>
        <p className="mt-4 text-primary font-semibold">Tối ưu nguồn lực, tăng năng suất, giảm chi phí vận hành!</p>
      </>
    )
  },
  {
    content: (
      <>
        <p>
          <strong>Giải pháp hệ thống CNTT</strong> toàn diện cho doanh nghiệp SME: ERP, CRM, quản lý email, dữ liệu, bảo mật, làm việc từ xa... VKT Software tư vấn, triển khai và bảo trì hệ thống phù hợp ngân sách và nhu cầu thực tế.
        </p>
        <ul className="mt-4 space-y-2">
          <li>• Tư vấn lựa chọn giải pháp phù hợp</li>
          <li>• Triển khai, tích hợp hệ thống</li>
          <li>• Đào tạo sử dụng, hỗ trợ kỹ thuật</li>
          <li>• Bảo trì định kỳ, nâng cấp mở rộng</li>
        </ul>
        <p className="mt-4 text-primary font-semibold">Đảm bảo hệ thống vận hành ổn định, bảo mật và hiệu quả!</p>
      </>
    )
  },
  {
    content: (
      <>
        <p>
          <strong>Thiết kế website & marketing</strong> giúp doanh nghiệp xây dựng hình ảnh chuyên nghiệp, thu hút khách hàng online. VKT Software thiết kế website responsive, tối ưu SEO, hỗ trợ quảng cáo và quản lý chiến dịch marketing hiệu quả.
        </p>
        <ul className="mt-4 space-y-2">
          <li>• Thiết kế website hiện đại, chuẩn SEO</li>
          <li>• Đáp ứng mọi thiết bị (mobile, desktop...)</li>
          <li>• Tích hợp công cụ quảng cáo, quản lý chiến dịch</li>
          <li>• Hỗ trợ vận hành, cập nhật nội dung</li>
        </ul>
        <p className="mt-4 text-primary font-semibold">Tăng trưởng khách hàng, nâng tầm thương hiệu trên môi trường số!</p>
      </>
    )
  },
  {
    content: (
      <>
        <p>
          <strong>Tư vấn chiến lược CNTT</strong> dành cho ban lãnh đạo doanh nghiệp muốn xây dựng chiến lược công nghệ dài hạn, phù hợp mục tiêu phát triển. VKT Software đồng hành từ hoạch định, xây dựng roadmap đến đánh giá hiệu quả đầu tư (ROI).
        </p>
        <ul className="mt-4 space-y-2">
          <li>• Xây dựng chiến lược CNTT dài hạn</li>
          <li>• Lập roadmap công nghệ, kế hoạch triển khai</li>
          <li>• Đánh giá hiệu quả đầu tư (ROI)</li>
          <li>• Tư vấn nâng cấp, chuyển đổi công nghệ</li>
        </ul>
        <p className="mt-4 text-primary font-semibold">Định hướng công nghệ vững chắc, phát triển bền vững!</p>
      </>
    )
  },
];

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-primary rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-accent rounded-full blur-3xl opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Dịch vụ của chúng tôi
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            VKT Software chuyên cung cấp các giải pháp CNTT dành riêng cho các doanh nghiệp 
            nhỏ và vừa tại Việt Nam với chi phí hợp lý và chất lượng hàng đầu.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`h-full hover:shadow-glow transition-all duration-500 hover:-translate-y-2 hover:scale-105 bg-gradient-card border-border/50 backdrop-blur-sm group`}
            >
              <CardHeader className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-medium group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-gradient-accent shadow-sm"></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border-primary/20"
                  onClick={() => setOpenIndex(index)}
                >
                  Tìm hiểu thêm
                </Button>
                {openIndex !== null && (
                  <Dialog open={openIndex !== null} onOpenChange={open => setOpenIndex(open ? openIndex : null)}>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{services[openIndex].title}</DialogTitle>
                      </DialogHeader>
                      {servicePopups[openIndex].content}
                    </DialogContent>
                  </Dialog>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-background via-primary/5 to-accent/5 p-12 rounded-3xl shadow-glow max-w-4xl mx-auto border border-primary/10 backdrop-blur-sm">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Cần tư vấn giải pháp phù hợp?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết cho dự án của bạn.
            </p>
            <Button size="lg" className="bg-gradient-accent hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-glow text-lg px-10 py-4 h-auto"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Nhận tư vấn miễn phí
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}