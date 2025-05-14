import { cn } from '@repo/design-system/lib/utils';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Fira_Code } from 'next/font/google';
import './globals.css';

const firacode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
});

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
      <body className={cn(firacode.className, 'antialiased')}>
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
