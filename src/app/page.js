import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

const locales = ['en', 'pt', 'es'];
const defaultLocale = 'en';

function getLocaleFromHeaders() {
  const headersList = headers();
  const acceptLang = headersList.get('accept-language') || '';
  for (const locale of locales) {
    if (acceptLang.includes(locale)) return locale;
  }
  return defaultLocale;
}

export default function RootPage() {
  const locale = getLocaleFromHeaders();
  redirect(`/${locale}`);
}
