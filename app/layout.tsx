import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';

import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { RootProvider } from '@/providers/root-provider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const { META_NAME, META_DESCRIPTION } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: META_NAME!,
    template: `%s | ${META_NAME}`,
  },
  description: META_DESCRIPTION,
  openGraph: {
    title: META_NAME,
    siteName: META_NAME,
    description: META_DESCRIPTION,
    url: baseUrl,
    images: [
      {
        url: './logo.jpg',
        width: 800,
        height: 600,
        alt: 'Image of neon light tubes',
      },
      {
        url: './logo.jpg',
        width: 1800,
        height: 1600,
        alt: 'Image of neon light tubes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <RootProvider>
          <Navbar />
          <main className="min-h-[calc(100vh-80px)]">{children}</main>
          <Suspense>
            <Footer />
          </Suspense>
        </RootProvider>
        <Analytics />
      </body>
    </html>
  );
}
