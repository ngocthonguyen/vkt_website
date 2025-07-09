import { Users, Award, Globe, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-primary font-semibold mb-2">
            {t('about.subtitle')}
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
                    {t('about.ceo_name')}
                  </h3>
                  <p className="text-primary font-semibold mb-2">{t('about.ceo_title')}</p>
                  <p className="text-muted-foreground">
                    {t('about.ceo_desc')}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">{t('about.exp_title')}</strong> {t('about.exp_desc')}
                </p>
                <p>
                  <strong className="text-foreground">{t('about.specialty_title')}</strong> {t('about.specialty_desc')}
                </p>
                <p>
                  <strong className="text-foreground">{t('about.mission_title')}</strong> {t('about.mission_desc')}
                </p>
              </div>
            </div>
          </div>

          {/* Company Values */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {t('about.commitment_title')}
            </h3>
            
            <div className="grid gap-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Target className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {t('about.value1_title')}
                      </h4>
                      <p className="text-muted-foreground">
                        {t('about.value1_desc')}
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
                        {t('about.value2_title')}
                      </h4>
                      <p className="text-muted-foreground">
                        {t('about.value2_desc')}
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
                        {t('about.value3_title')}
                      </h4>
                      <p className="text-muted-foreground">
                        {t('about.value3_desc')}
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
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            {t('about.why_title')}
          </h3>
          <p className="text-blue-100 mb-8 text-lg max-w-3xl mx-auto">
            {t('about.why_subtitle')}
          </p>
          


          {/* Advantages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold text-primary-foreground mb-3">
                {t('about.advantage1_title')}
              </h4>
              <p className="text-blue-100/90 text-sm leading-relaxed">
                {t('about.advantage1_desc')}
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold text-primary-foreground mb-3">
                {t('about.advantage2_title')}
              </h4>
              <p className="text-blue-100/90 text-sm leading-relaxed">
                {t('about.advantage2_desc')}
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold text-primary-foreground mb-3">
                {t('about.advantage3_title')}
              </h4>
              <p className="text-blue-100/90 text-sm leading-relaxed">
                {t('about.advantage3_desc')}
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold text-primary-foreground mb-3">
                {t('about.advantage4_title')}
              </h4>
              <p className="text-blue-100/90 text-sm leading-relaxed">
                {t('about.advantage4_desc')}
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold text-primary-foreground mb-3">
                {t('about.advantage5_title')}
              </h4>
              <p className="text-blue-100/90 text-sm leading-relaxed">
                {t('about.advantage5_desc')}
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold text-primary-foreground mb-3">
                {t('about.advantage6_title')}
              </h4>
              <p className="text-blue-100/90 text-sm leading-relaxed">
                {t('about.advantage6_desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}