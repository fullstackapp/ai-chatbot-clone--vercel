import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js Chatbot',
  description: 'Next.js chatbot using the AI SDK.',
  metadataBase: new URL('https://ai-chatbot-clone-v1.vercel.app'),
  openGraph: {
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
