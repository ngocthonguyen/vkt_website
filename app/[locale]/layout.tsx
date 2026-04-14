import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Providers from "@/components/Providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import FacebookPixel from "@/components/FacebookPixel";
import { locales, type Locale } from "@/lib/i18n";

const metadataMap: Record<Locale, { title: string; description: string }> = {
  vi: {
    title: "VKT Software - Giải pháp số hoá và phần mềm theo yêu cầu",
    description:
      "VKT Software chuyên cung cấp dịch vụ chuyển đổi số, viết phần mềm theo yêu cầu cho doanh nghiệp SME tại Việt Nam. Chi phí hợp lý, chất lượng cao.",
  },
  en: {
    title: "VKT Software - Digital Solutions & Custom Software for Vietnamese Businesses",
    description:
      "VKT Software specializes in digital transformation and custom software development for SMEs in Vietnam. Reasonable cost, top quality.",
  },
  fr: {
    title: "VKT Software - Solutions numériques & logiciels sur mesure",
    description:
      "VKT Software accompagne les entreprises vietnamiennes dans la transformation numérique et le développement de logiciels sur mesure.",
  },
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale as Locale;
  if (!locales.includes(locale)) return {};
  const { title, description } = metadataMap[locale];
  const baseUrl = "https://vktsoftware.com";

  return {
    title,
    description,
    keywords: [
      "VKT Software",
      "phần mềm theo yêu cầu",
      "chuyển đổi số",
      "custom software",
      "digital transformation",
      "Vietnam",
      "SME",
    ],
    authors: [{ name: "VKT Software" }],
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}`,
      siteName: "VKT Software",
      locale: locale === "vi" ? "vi_VN" : locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl}/api/og`,
          width: 1200,
          height: 630,
          alt: "VKT Software - Digital Solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/api/og`],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        vi: `${baseUrl}/vi`,
        en: `${baseUrl}/en`,
        fr: `${baseUrl}/fr`,
        "x-default": `${baseUrl}/vi`,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VKT Software",
              url: "https://vktsoftware.com",
              logo: "https://vktsoftware.com/vkt-logo.svg",
              description:
                "Giải pháp số hoá và phần mềm theo yêu cầu cho doanh nghiệp Việt Nam",
              address: {
                "@type": "PostalAddress",
                streetAddress: "265/56 Ngọc Thuỵ, Bồ Đề",
                addressLocality: "Hà Nội",
                addressCountry: "VN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+84-783-198-078",
                contactType: "customer service",
                availableLanguage: ["Vietnamese", "English", "French"],
              },
              founder: {
                "@type": "Person",
                name: "Nguyễn Ngọc Thọ",
                jobTitle: "CEO & Founder",
              },
              areaServed: "VN",
              sameAs: ["https://fb.com/vktsoftware"],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "VKT Software",
              image: "https://vktsoftware.com/images/og-image.png",
              telephone: "+84-783-198-078",
              email: "contact@vktsoftware.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "265/56 Ngọc Thuỵ, Bồ Đề",
                addressLocality: "Hà Nội",
                addressCountry: "VN",
              },
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background antialiased">
        <GoogleAnalytics />
        <FacebookPixel />
        <Providers locale={locale}>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
