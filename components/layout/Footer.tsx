"use client";

import { Mail, Phone, MapPin, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Footer() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params.locale as string) || 'vi';

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">VKT</span>
              </div>
              <span className="text-xl font-bold">VKT Software</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {t('footer.company_desc')}
            </p>
            <div className="flex space-x-4">
              <a href="https://fb.com/vktsoftware" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:contact@vktsoftware.com" className="text-gray-300 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.services_title')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href={`/${locale}#services`} className="hover:text-primary transition-colors">{t('footer.service1')}</Link></li>
              <li><Link href={`/${locale}#services`} className="hover:text-primary transition-colors">{t('footer.service2')}</Link></li>
              <li><Link href={`/${locale}#services`} className="hover:text-primary transition-colors">{t('footer.service3')}</Link></li>
              <li><Link href={`/${locale}#services`} className="hover:text-primary transition-colors">{t('footer.service4')}</Link></li>
              <li><Link href={`/${locale}#services`} className="hover:text-primary transition-colors">{t('footer.service5')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.contact_title')}</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>0783 1980 78</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@vktsoftware.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>265/56 Ngọc Thuỵ, Bồ Đề, Hà Nội</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {new Date().getFullYear()} VKT Software. {t('footer.rights')}
            </p>
            <div className="flex space-x-6 text-gray-400">
              <Link href={`/${locale}/bang-gia`} className="hover:text-primary transition-colors">{t('nav.pricing')}</Link>
              <Link href={`/${locale}/du-an`} className="hover:text-primary transition-colors">{t('nav.portfolio')}</Link>
              <Link href={`/${locale}/blog`} className="hover:text-primary transition-colors">{t('nav.blog')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
