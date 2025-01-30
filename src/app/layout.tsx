import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js Chatbot',
  description: 'Next.js chatbot using the AI SDK.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Next.js Chatbot',
    description: 'Next.js chatbot using the AI SDK.',
    url: '/',
    type: 'website',
    images: '/chatbot.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
