import { Code, Zap, Settings, Cloud, Globe, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dịch vụ của chúng tôi
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            VKT Software chuyên cung cấp các giải pháp CNTT dành riêng cho các doanh nghiệp 
            nhỏ và vừa tại Việt Nam với chi phí hợp lý và chất lượng hàng đầu.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-1 ${service.color}`}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Tìm hiểu thêm
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-card p-8 rounded-2xl shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Cần tư vấn giải pháp phù hợp?
            </h3>
            <p className="text-muted-foreground mb-6">
              Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết cho dự án của bạn.
            </p>
            <Button size="lg" className="bg-gradient-primary">
              Nhận tư vấn miễn phí
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}