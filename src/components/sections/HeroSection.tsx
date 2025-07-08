import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            VKT Software
            <span className="block text-3xl md:text-5xl mt-2">
              Giải pháp số hoá và phần mềm theo yêu cầu
            </span>
            <span className="block text-2xl md:text-4xl mt-2 text-blue-100">
              cho doanh nghiệp Việt Nam
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Chúng tôi đồng hành cùng doanh nghiệp Việt trong hành trình chuyển đổi số, 
            tối ưu hoá quy trình, và phát triển phần mềm theo yêu cầu với chi phí hợp lý 
            và chất lượng hàng đầu.
          </p>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 text-blue-100">
              <CheckCircle className="h-5 w-5 text-green-300" />
              <span>Chi phí hợp lý</span>
            </div>
            <div className="flex items-center gap-2 text-blue-100">
              <CheckCircle className="h-5 w-5 text-green-300" />
              <span>Chất lượng cao</span>
            </div>
            <div className="flex items-center gap-2 text-blue-100">
              <CheckCircle className="h-5 w-5 text-green-300" />
              <span>Đồng hành lâu dài</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-blue-50 text-lg px-8 py-3 h-auto shadow-medium"
            >
              Yêu cầu tư vấn miễn phí
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3 h-auto"
            >
              Tìm hiểu dịch vụ
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-blue-200/30">
            <p className="text-blue-100 mb-4">
              <strong>20+ năm kinh nghiệm</strong> - Từng làm việc tại Thụy Sĩ, Pháp, Singapore
            </p>
            <div className="flex justify-center items-center gap-8 text-blue-100 text-sm">
              <span>✓ Chuyên gia CNTT quốc tế</span>
              <span>✓ Kinh nghiệm ngân hàng lớn</span>
              <span>✓ Giải pháp thực tiễn</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}