"use client";

import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const languages = [
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const params = useParams();
  const pathname = usePathname();
  const locale = (params.locale as string) || 'vi';
  const currentLanguage = languages.find(l => l.code === locale) || languages[0];

  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;

  const navigationItems = [
    { name: t('nav.home'), href: isHomePage ? '#home' : `/${locale}` },
    { name: t('nav.services'), href: isHomePage ? '#services' : `/${locale}#services` },
    { name: t('nav.about'), href: isHomePage ? '#about' : `/${locale}#about` },
    { name: t('nav.contact'), href: isHomePage ? '#contact' : `/${locale}#contact` },
    { name: t('nav.pricing'), href: `/${locale}/bang-gia` },
    { name: t('nav.portfolio'), href: `/${locale}/du-an` },
    { name: t('nav.blog'), href: `/${locale}/blog` },
  ];

  const switchLocale = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, '');
    window.location.href = `/${newLocale}${currentPath || ''}`;
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-lg border-b border-border/50 z-50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className="flex items-center space-x-3">
              <img
                src="/vkt-logo.svg"
                alt="VKT Software AI Logo"
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">VKT SOFTWARE</span>
                <span className="text-xs text-muted-foreground tracking-wider uppercase">{t('nav.tagline')}</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  {currentLanguage.flag}
                  <span className="hidden lg:inline">{currentLanguage.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => switchLocale(lang.code)}
                    className="gap-2"
                  >
                    {lang.flag} {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="bg-gradient-accent hover:opacity-90 transition-all duration-300 shadow-medium hover:shadow-glow"
              onClick={() => {
                if (isHomePage) {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = `/${locale}#contact`;
                }
              }}
            >
              {t('nav.contact')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-between px-3 py-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Globe className="h-4 w-4" />
                      {currentLanguage.flag} {currentLanguage.name}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {languages.map((lang) => (
                      <DropdownMenuItem
                        key={lang.code}
                        onClick={() => switchLocale(lang.code)}
                        className="gap-2"
                      >
                        {lang.flag} {lang.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" className="bg-gradient-primary"
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (isHomePage) {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = `/${locale}#contact`;
                    }
                  }}
                >
                  {t('nav.contact')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
