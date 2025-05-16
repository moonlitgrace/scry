import { cn } from '@repo/design-system/lib/utils';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import { geist, geist_mono } from './fonts';
import Footer from '@/components/organisms/footer';

export const metadata: Metadata = {
  title: 'Dashboard – scry',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(geist.variable, geist_mono.variable, 'font-sans antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
