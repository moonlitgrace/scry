import Footer from '@/components/organisms/footer';
import { cn } from '@repo/design-system/lib/utils';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { geist, geist_mono } from './fonts';
import './globals.css';

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
