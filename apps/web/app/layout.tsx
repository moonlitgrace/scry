import { ThemeProvider } from '@/components/molecules/theme-provider';
import { cn } from '@repo/design-system/lib/utils';
import { geist, geist_mono } from './fonts';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn(geist.variable, geist_mono.variable, 'font-sans antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
