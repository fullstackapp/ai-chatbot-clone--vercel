import {
  IBM_Plex_Sans as FontIbmPlex,
  Inter as FontInter,
  JetBrains_Mono as FontMono,
} from 'next/font/google';

export const fontInter = FontInter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const fontIbmPlex = FontIbmPlex({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex',
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
});
