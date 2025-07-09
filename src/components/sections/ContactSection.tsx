import { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();
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
          title: t('contact.success_title'),
          description: t('contact.success_desc'),
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setIsError(true);
        toast({
          title: t('contact.error_title'),
          description: t('contact.error_desc'),
          variant: "destructive"
        });
      }
    } catch (err) {
      setIsError(true);
      toast({
        title: t('contact.error_title'),
        description: t('contact.error_desc'),
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
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.desc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl">{t('contact.form_title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">{t('contact.name_label')}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder={t('contact.name_placeholder')}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">{t('contact.phone_label')}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder={t('contact.phone_placeholder')}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">{t('contact.email_label')}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder={t('contact.email_placeholder')}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">{t('contact.message_label')}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder={t('contact.message_placeholder')}
                    className="mt-1 min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-gradient-primary" disabled={isSubmitting}>
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? t('contact.sending') : t('contact.submit_btn')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  {t('contact.info_title')}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t('contact.email_label')}</p>
                      <p className="text-muted-foreground">contact@vktsoftware.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t('contact.phone_label')}</p>
                      <p className="text-muted-foreground">0783 1980 78</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t('contact.address_label')}</p>
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
                  {t('contact.free_consult_title')}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t('contact.free_consult_desc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 bg-gradient-primary" onClick={() => { window.location.href = 'tel:0783198078'; }}>
                    {t('contact.call_now')}
                  </Button>
                  <Button variant="outline" className="flex-1" onClick={() => { window.open('https://zalo.me/0783198078', '_blank'); }}>
                    {t('contact.chat_zalo')}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3">
                  ⭐ {t('contact.commitment_title')}
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ {t('contact.commitment1')}</li>
                  <li>✓ {t('contact.commitment2')}</li>
                  <li>✓ {t('contact.commitment3')}</li>
                  <li>✓ {t('contact.commitment4')}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}