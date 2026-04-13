export const locales = ['vi', 'en', 'fr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'vi';
