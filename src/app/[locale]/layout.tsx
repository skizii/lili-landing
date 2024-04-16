import { Suspense } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { NextIntlClientProvider, useMessages } from 'next-intl';
import {getTranslations} from 'next-intl/server';
import {locales} from '@/i18n';

import "../globals.css";

import YandexMetrika from "../lib/yandex-metrika";
import YMetricaHead from "../lib/YMetricaHead";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin', 'cyrillic-ext'],
  weight: ['400', '500', '600', '800'],
  variable: '--font-plus-jakarta-sans'
});

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
};

type Props = {
  children: React.ReactNode;
  params: {locale: string};
};

export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title'),
    description: t('description'),
    icons: {
      icon: 'icons/icon.svg',
      apple: 'icons/apple-icon.png',
      other: {
        rel: 'icon',
        url: 'icons/favicon.ico',
      }
    }
  };
}

export default function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale}>
        <head>
          <YMetricaHead/>
        </head>
        <Suspense>
          <YandexMetrika/>
        </Suspense>
        <body className={`${plus_jakarta_sans.variable} bg-main bg-bottom bg-net-pattern bg-no-repeat bg-repeat-x text-white`}>{children}</body>
      </html>
    </NextIntlClientProvider>
  );
}