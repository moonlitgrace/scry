import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import './globals.css';
import { cn } from '@repo/ui/lib/utils';
import type { Metadata } from 'next';
import { firacode, firasans } from './fonts';

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
      <body
        className={cn(firacode.variable, firasans.variable, 'dark font-mono antialiased')}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
