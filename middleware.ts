import { NextRequest, NextResponse } from 'next/server';

const locales = ['vi', 'en', 'fr'];
const defaultLocale = 'vi';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Skip internal Next.js paths and static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // static files
  ) {
    return NextResponse.next();
  }

  // Redirect to default locale
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|images|favicon|vkt-logo|android-chrome|apple-touch|site\\.webmanifest|robots\\.txt|sitemap\\.xml).*)'],
};
