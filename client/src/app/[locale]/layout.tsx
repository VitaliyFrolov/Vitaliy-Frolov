import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Header } from "@/shared/ui/Header/index";
import { Footer } from "@/shared/ui/Footer/ui/Footer";
import '../../styles/index.scss';

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'ru'}];
}

export const metadata = {
  title: "Vitaliy Frolov",
  description: "Hi, I'm Vitaliy, this is my website with web development work."
}

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode,
  params: any
}) {
  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale} className="app">
      <body className="body">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="app-content">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
};
