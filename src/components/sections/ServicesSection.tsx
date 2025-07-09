import { Code, Zap, Settings, Cloud, Globe, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";

const servicesRaw = [
  {
    icon: Code,
    key: "custom_software"
  },
  {
    icon: Zap,
    key: "digital_transformation"
  },
  {
    icon: Settings,
    key: "process_optimization"
  },
  {
    icon: Cloud,
    key: "it_solutions"
  },
  {
    icon: Globe,
    key: "web_marketing"
  },
  {
    icon: TrendingUp,
    key: "it_strategy"
  }
];

export default function ServicesSection() {
  const { t } = useTranslation();
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
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('services.desc')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesRaw.map((service, index) => (
            <Card 
              key={index} 
              className={`h-full hover:shadow-glow transition-all duration-500 hover:-translate-y-2 hover:scale-105 bg-gradient-card border-border/50 backdrop-blur-sm group`}
            >
              <CardHeader className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-medium group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{t(`services.${service.key}.title`)}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed text-base">
                  {t(`services.${service.key}.desc`)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {t(`services.${service.key}.features`, { returnObjects: true }).map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-gradient-accent shadow-sm"></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border-primary/20"
                  onClick={() => setOpenIndex(index)}
                >
                  {t('services.learn_more')}
                </Button>
                {openIndex === index && (
                  <Dialog open={openIndex === index} onOpenChange={open => setOpenIndex(open ? index : null)}>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{t(`services.${service.key}.title`)}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <p>{t(`services.${service.key}.popup.desc`)}</p>
                        <ul className="mt-2 space-y-2">
                          {t(`services.${service.key}.popup.details`, { returnObjects: true }).map((item: string, idx: number) => (
                            <li key={idx}>• {item}</li>
                          ))}
                        </ul>
                        <p className="mt-4 text-primary font-semibold">{t(`services.${service.key}.popup.benefit`)}</p>
                      </div>
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
              {t('services.cta_title')}
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('services.cta_desc')}
            </p>
            <Button size="lg" className="bg-gradient-accent hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-glow text-lg px-10 py-4 h-auto"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('services.cta_btn')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}