"use client";

import { I18nextProvider } from "react-i18next";
import { createI18nInstance } from "@/lib/i18n-client";
import { useMemo } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

export default function Providers({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  const i18n = useMemo(() => createI18nInstance(locale), [locale]);
  return (
    <I18nextProvider i18n={i18n}>
      <TooltipProvider>
        {children}
        <Toaster />
      </TooltipProvider>
    </I18nextProvider>
  );
}
