"use client";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import vi from '@/locales/vi.json';
import en from '@/locales/en.json';
import fr from '@/locales/fr.json';

export function createI18nInstance(locale: string) {
  const instance = i18n.createInstance();
  instance.use(initReactI18next).init({
    resources: {
      vi: { translation: vi },
      en: { translation: en },
      fr: { translation: fr },
    },
    lng: locale,
    fallbackLng: 'vi',
    interpolation: { escapeValue: false },
  });
  return instance;
}
