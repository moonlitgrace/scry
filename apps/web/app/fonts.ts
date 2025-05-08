import { Fira_Code, Fira_Sans } from 'next/font/google';

export const firacode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-firacode',
});

export const firasans = Fira_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['900'],
  variable: '--font-firasans',
});
