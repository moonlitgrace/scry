import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import './globals.css';
import { cn } from '@repo/ui/lib/utils';
import type { Metadata } from 'next';
import { firacode, firasans } from './fonts';
import { ThemeProvider } from '@/components/ThemeProvider';

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(firacode.variable, firasans.variable, 'font-mono antialiased')}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
