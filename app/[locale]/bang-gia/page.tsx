"use client";

import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Star } from "lucide-react";
import { useParams } from "next/navigation";

export default function PricingPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params.locale as string;

  const plans = [
    {
      key: "starter",
      gradient: "from-blue-50 to-white",
      borderColor: "border-primary/20",
      iconBg: "bg-primary/10",
    },
    {
      key: "business",
      gradient: "from-accent/10 to-white",
      borderColor: "border-accent",
      iconBg: "bg-accent/10",
      popular: true,
    },
    {
      key: "enterprise",
      gradient: "from-primary/10 to-white",
      borderColor: "border-primary",
      iconBg: "bg-primary/10",
    },
  ];

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

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.key}
              className={`relative h-full bg-gradient-to-b ${plan.gradient} ${plan.borderColor} border-2 hover:shadow-glow transition-all duration-300 hover:-translate-y-1`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-accent text-foreground text-sm font-bold px-4 py-1 rounded-full shadow-medium">
                    <Star className="inline h-3 w-3 mr-1" />
                    {t(`pricing.${plan.key}.popular`)}
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl mb-2">
                  {t(`pricing.${plan.key}.name`)}
                </CardTitle>
                <p className="text-3xl font-bold text-primary mb-2">
                  {t(`pricing.${plan.key}.price`)}
                </p>
                <p className="text-muted-foreground">
                  {t(`pricing.${plan.key}.desc`)}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {(t(`pricing.${plan.key}.features`, { returnObjects: true }) as string[]).map(
                    (feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    )
                  )}
                </ul>
                <Button
                  className="w-full bg-gradient-primary"
                  onClick={() => (window.location.href = `/${locale}#contact`)}
                >
                  {t("pricing.cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-background via-primary/5 to-accent/5 border-primary/10">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {t("pricing.addons_title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {["addon1", "addon2", "addon3", "addon4"].map((key) => (
                  <div key={key} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{t(`pricing.${key}`)}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button
                  size="lg"
                  className="bg-gradient-accent hover:opacity-90 shadow-glow"
                  onClick={() => (window.location.href = `/${locale}#contact`)}
                >
                  {t("pricing.cta")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
