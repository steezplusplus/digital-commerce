import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';

import { Navbar } from 'components/layout/navbar/navbar';
import { ToastProvider } from 'providers/toast-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ez-commerce',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ToastProvider />
        <Navbar />
        <Suspense>
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
