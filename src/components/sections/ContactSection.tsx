import { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);
    try {
      const response = await fetch('https://formspree.io/f/xdkzrdjb', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "Cảm ơn bạn đã liên hệ!",
          description: "Chúng tôi sẽ phản hồi trong vòng 24 giờ.",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setIsError(true);
        toast({
          title: "Gửi thất bại!",
          description: "Vui lòng thử lại hoặc liên hệ trực tiếp qua email.",
          variant: "destructive"
        });
      }
    } catch (err) {
      setIsError(true);
      toast({
        title: "Gửi thất bại!",
        description: "Vui lòng thử lại hoặc liên hệ trực tiếp qua email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bạn cần số hoá doanh nghiệp? Cần phần mềm riêng theo quy trình của bạn? 
            Hãy liên hệ ngay để được tư vấn miễn phí!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl">Gửi yêu cầu tư vấn</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Họ tên *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Nhập họ tên của bạn"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Số điện thoại *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Nhập số điện thoại"
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Nhập địa chỉ email"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Nhu cầu / Lời nhắn *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Mô tả ngắn gọn về nhu cầu của bạn..."
                    className="mt-1 min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-gradient-primary" disabled={isSubmitting}>
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? 'Đang gửi...' : 'Gửi yêu cầu tư vấn'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Thông tin liên hệ
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">contact@vktsoftware.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Hotline/Zalo</p>
                      <p className="text-muted-foreground">0783 1980 78</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Địa chỉ</p>
                      <p className="text-muted-foreground">265/56 Ngọc Thuỵ, Bồ Đề, Hà Nội</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Facebook className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Facebook</p>
                      <p className="text-muted-foreground">fb.com/vktsoftware</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-soft">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Tư vấn miễn phí 24/7
                </h3>
                <p className="text-muted-foreground mb-6">
                  Liên hệ ngay để được tư vấn chi tiết về giải pháp phù hợp nhất 
                  cho doanh nghiệp của bạn.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 bg-gradient-primary" onClick={() => { window.location.href = 'tel:0783198078'; }}>
                    Gọi ngay: 0783 1980 78
                  </Button>
                  <Button variant="outline" className="flex-1" onClick={() => { window.open('https://zalo.me/0783198078', '_blank'); }}>
                    Chat Zalo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3">
                  ⭐ Cam kết dịch vụ
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Tư vấn miễn phí và báo giá chi tiết</li>
                  <li>✓ Triển khai đúng tiến độ cam kết</li>
                  <li>✓ Bảo hành và hỗ trợ kỹ thuật</li>
                  <li>✓ Đào tạo sử dụng cho nhân viên</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}