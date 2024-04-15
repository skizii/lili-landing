import { Suspense } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { NextIntlClientProvider, useMessages } from 'next-intl';

import "../globals.css";

import YandexMetrika from "../lib/yandex-metrika";
import YMetricaHead from "../lib/YMetricaHead";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin', 'cyrillic-ext'],
  weight: ['400', '500', '600', '800'],
  variable: '--font-plus-jakarta-sans'
});

export const metadata = {
  title: "Lili: Expense & Money Tracker",
  description: "Explore and analyze your budget with a very intuitive interface",
  icons: {
    icon: 'icons/icon.svg',
    apple: 'icons/apple-icon.png',
    other: {
      rel: 'icon',
      url: 'icons/favicon.ico',
    }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang="en">
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