import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-20 bg-gradient-hero min-h-screen flex items-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-accent/10"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-15"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-primary-foreground">
          {/* Logo and Brand */}
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/6d8cbf01-60ec-4d7f-9241-688a3d759756.png" 
              alt="VKT Software Logo" 
              className="w-24 h-24 object-contain drop-shadow-2xl"
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            VKT SOFTWARE
            <span className="block text-3xl md:text-5xl mt-3 bg-gradient-accent bg-clip-text text-transparent">
              Giải pháp số hoá và phần mềm theo yêu cầu
            </span>
            <span className="block text-xl md:text-3xl mt-3 text-blue-100 font-normal">
              cho doanh nghiệp Việt Nam
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-blue-100/90 mb-10 max-w-4xl mx-auto leading-relaxed">
            Chúng tôi đồng hành cùng doanh nghiệp Việt trong hành trình chuyển đổi số, 
            tối ưu hoá quy trình, và phát triển phần mềm theo yêu cầu với chi phí hợp lý 
            và chất lượng hàng đầu.
          </p>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-blue-100 bg-white/10 backdrop-blur-sm rounded-xl py-4 px-6 border border-white/20">
              <CheckCircle className="h-6 w-6 text-accent" />
              <span className="font-medium">Chi phí hợp lý</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-blue-100 bg-white/10 backdrop-blur-sm rounded-xl py-4 px-6 border border-white/20">
              <CheckCircle className="h-6 w-6 text-accent" />
              <span className="font-medium">Chất lượng cao</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-blue-100 bg-white/10 backdrop-blur-sm rounded-xl py-4 px-6 border border-white/20">
              <CheckCircle className="h-6 w-6 text-accent" />
              <span className="font-medium">Đồng hành lâu dài</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-accent hover:opacity-90 text-foreground font-semibold text-lg px-10 py-4 h-auto shadow-glow transition-all duration-300 hover:scale-105"
            >
              Yêu cầu tư vấn miễn phí
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-10 py-4 h-auto transition-all duration-300"
            >
              Tìm hiểu dịch vụ
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <p className="text-blue-100 mb-6 text-lg">
              <span className="bg-gradient-accent bg-clip-text text-transparent font-bold">20+ năm kinh nghiệm</span> - Từng làm việc tại Thụy Sĩ, Pháp, Singapore
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-blue-100/90">
              <div className="flex items-center justify-center gap-2">
                <span className="text-accent text-xl">✓</span>
                <span>Chuyên gia CNTT quốc tế</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-accent text-xl">✓</span>
                <span>Kinh nghiệm ngân hàng lớn</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-accent text-xl">✓</span>
                <span>Giải pháp thực tiễn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}