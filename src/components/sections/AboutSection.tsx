import { Users, Award, Globe, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Về chúng tôi
          </h2>
          <p className="text-xl text-primary font-semibold mb-2">
            VKT Software – Đối tác công nghệ cho doanh nghiệp Việt
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* CEO Profile */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-card p-8 rounded-2xl shadow-soft">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary-foreground">NT</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    Nguyễn Ngọc Thọ
                  </h3>
                  <p className="text-primary font-semibold mb-2">Founder & CEO</p>
                  <p className="text-muted-foreground">
                    Chuyên gia CNTT với gần 20 năm kinh nghiệm
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Kinh nghiệm quốc tế:</strong> Từng làm việc tại các ngân hàng 
                  và tập đoàn công nghệ lớn tại Thụy Sĩ, Pháp và Singapore.
                </p>
                <p>
                  <strong className="text-foreground">Chuyên môn:</strong> Chuyển đổi số ngân hàng, 
                  kiến trúc sư giải pháp, quản lý dự án CNTT quy mô lớn.
                </p>
                <p>
                  <strong className="text-foreground">Sứ mệnh:</strong> Mang kiến thức và kinh nghiệm quốc tế 
                  về Việt Nam, giúp doanh nghiệp SME tiếp cận công nghệ hiện đại với chi phí hợp lý.
                </p>
              </div>
            </div>
          </div>

          {/* Company Values */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Cam kết của VKT Software
            </h3>
            
            <div className="grid gap-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Target className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Giải pháp thực tiễn
                      </h4>
                      <p className="text-muted-foreground">
                        Tập trung vào giải pháp có thể triển khai ngay, phù hợp với 
                        quy trình thực tế của doanh nghiệp Việt Nam.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-green-500 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Chi phí hợp lý
                      </h4>
                      <p className="text-muted-foreground">
                        Báo giá minh bạch, không phát sinh chi phí, phù hợp với 
                        ngân sách của doanh nghiệp nhỏ và vừa.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Users className="h-8 w-8 text-orange-500 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Đồng hành lâu dài
                      </h4>
                      <p className="text-muted-foreground">
                        Hỗ trợ bảo hành, bảo trì và nâng cấp hệ thống, 
                        đồng hành cùng sự phát triển của doanh nghiệp.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-8">
            Tại sao chọn VKT Software?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-primary-foreground">
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-blue-100">Năm kinh nghiệm CNTT</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-blue-100">Quốc gia làm việc</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Cam kết chất lượng</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}