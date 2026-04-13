"use client";

import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Users, Globe } from "lucide-react";

const projectMeta = [
  { key: "anh_tuyet", icon: Code, status: "active" },
  { key: "pickleball", icon: Users, status: "active" },
  { key: "vkt_website", icon: Globe, status: "completed" },
];

export default function PortfolioPage() {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("portfolio.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("portfolio.subtitle")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectMeta.map((project) => (
            <Card
              key={project.key}
              className="h-full hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-gradient-card border-border/50 group"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-medium group-hover:shadow-glow transition-all duration-300">
                    <project.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      project.status === "active"
                        ? "bg-accent/20 text-accent-foreground"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {project.status === "active"
                      ? t("portfolio.status_active")
                      : t("portfolio.status_completed")}
                  </span>
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {t(`portfolio.projects.${project.key}.name`)}
                </CardTitle>
                <p className="text-muted-foreground">
                  {t(`portfolio.projects.${project.key}.desc`)}
                </p>
              </CardHeader>
              <CardContent>
                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-foreground mb-2">
                    {t("portfolio.tech_label")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(t(`portfolio.projects.${project.key}.tech`, { returnObjects: true }) as string[]).map(
                      (tech: string, idx: number) => (
                        <span
                          key={idx}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">
                    {t("portfolio.features_label")}
                  </p>
                  <ul className="space-y-1">
                    {(t(`portfolio.projects.${project.key}.features`, { returnObjects: true }) as string[]).map(
                      (feature: string, idx: number) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-accent"></div>
                          {feature}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
