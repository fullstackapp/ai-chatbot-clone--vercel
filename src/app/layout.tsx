import type { Metadata } from 'next';

import { fontIbmPlex, fontInter, fontMono } from '@/lib/fonts';
import { cn } from '@/lib/utils';

import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js Chatbot',
  description: 'Next.js chatbot using the AI SDK.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'font-inter antialiased',
          fontInter.variable,
          fontIbmPlex.variable,
          fontMono.variable
        )}>
        {children}
      </body>
    </html>
  );
}
