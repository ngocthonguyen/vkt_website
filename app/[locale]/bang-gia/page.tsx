"use client";

import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Star, Clock } from "lucide-react";
import { useParams } from "next/navigation";

const plans = [
  {
    key: "website",
    gradient: "from-blue-50 to-white",
    borderColor: "border-primary/20",
    iconBg: "bg-primary/10",
    popular: false,
  },
  {
    key: "digitalization",
    gradient: "from-accent/10 to-white",
    borderColor: "border-accent",
    iconBg: "bg-accent/10",
    popular: true,
  },
  {
    key: "custom",
    gradient: "from-primary/10 to-white",
    borderColor: "border-primary/30",
    iconBg: "bg-primary/10",
    popular: false,
  },
  {
    key: "enterprise",
    gradient: "from-slate-50 to-white",
    borderColor: "border-slate-300",
    iconBg: "bg-slate-100",
    popular: false,
  },
];

export default function PricingPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params.locale as string;

  const handleContact = () => {
    window.location.href = `/${locale}/lien-he`;
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("pricing.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Pricing Cards — 2x2 on desktop, 1 col on mobile */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto items-start">
          {plans.map((plan) => (
            <Card
              key={plan.key}
              className={`relative flex flex-col bg-gradient-to-b ${plan.gradient} ${plan.borderColor} border-2 transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "shadow-glow scale-[1.02] xl:scale-[1.04] ring-2 ring-accent/40"
                  : "hover:shadow-glow"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-accent text-foreground text-sm font-bold px-4 py-1.5 rounded-full shadow-medium whitespace-nowrap">
                    <Star className="inline h-3 w-3 mr-1" />
                    {t(`pricing.${plan.key}.popular`)}
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-2 pt-8">
                {/* Badge */}
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
                    plan.popular
                      ? "bg-accent/20 text-accent-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {t(`pricing.${plan.key}.badge`)}
                </span>

                <CardTitle className="text-xl mb-2 leading-tight">
                  {t(`pricing.${plan.key}.name`)}
                </CardTitle>
                <p className="text-2xl font-bold text-primary mb-1">
                  {t(`pricing.${plan.key}.price`)}
                </p>
                <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-2">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{t(`pricing.${plan.key}.timeline`)}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-snug">
                  {t(`pricing.${plan.key}.desc`)}
                </p>

                {/* USP highlight for digitalization plan */}
                {plan.popular && (
                  <p className="mt-3 text-xs font-semibold text-accent bg-accent/10 rounded-lg px-3 py-2 leading-snug">
                    ✦ {t(`pricing.${plan.key}.usp`)}
                  </p>
                )}
              </CardHeader>

              <CardContent className="flex flex-col flex-1">
                <ul className="space-y-2.5 mb-6 flex-1">
                  {(
                    t(`pricing.${plan.key}.features`, {
                      returnObjects: true,
                    }) as string[]
                  ).map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle
                        className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                          plan.popular ? "text-accent" : "text-primary"
                        }`}
                      />
                      <span className="text-sm text-foreground leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-accent hover:opacity-90 shadow-glow"
                      : "bg-gradient-primary"
                  }`}
                  onClick={handleContact}
                >
                  {t("pricing.cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-background via-primary/5 to-accent/5 border-primary/10">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {t("pricing.addons_title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {["addon1", "addon2", "addon3", "addon4", "addon5"].map(
                  (key) => (
                    <div key={key} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        {t(`pricing.${key}`)}
                      </span>
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-2xl p-10 border border-primary/20 shadow-medium">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              {t("pricing.bottom_cta_title")}
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              {t("pricing.bottom_cta_desc")}
            </p>
            <Button
              size="lg"
              className="bg-gradient-accent hover:opacity-90 shadow-glow text-base px-8"
              onClick={handleContact}
            >
              {t("pricing.bottom_cta_btn")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
