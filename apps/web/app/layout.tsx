import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import './globals.css';
import { cn } from '@repo/ui/lib/utils';
import type { Metadata } from 'next';
import { Fira_Code, Fira_Sans } from 'next/font/google';

const firacode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-firacode',
});

const firasans = Fira_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['900'],
  variable: '--font-firasans',
});

export const metadata: Metadata = {
  title: 'scry – Track the unseen',
  description: 'Track and reveal hidden errors and logs in your JavaScript apps.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(firacode.variable, firasans.variable, 'dark font-mono')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
