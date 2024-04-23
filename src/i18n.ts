import {notFound} from 'next/navigation';
import { getRequestConfig, unstable_setRequestLocale } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'ru'];

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});

export function setRequestLocale(locale: string): void {
  if (locales.includes(locale)) {
    unstable_setRequestLocale(locale);
  } else {
    console.error(`Unsupported locale: ${locale}`);
  }
};