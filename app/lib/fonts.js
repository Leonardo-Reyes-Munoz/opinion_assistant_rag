import { Playfair_Display, Oleo_Script } from 'next/font/google';

export const playFair = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['cyrillic'],
});

export const oleoScript = Oleo_Script({
  weight: ['400', '700'],
  subsets: ['latin'],
});
