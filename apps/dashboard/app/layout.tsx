import type { Metadata } from 'next';
import './globals.css';
import { Fira_Code } from 'next/font/google';
import { cn } from '@repo/ui/lib/utils';

export const firacode = Fira_Code({
  subsets: ['latin'],
  display: 'swap'
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
    <html lang="en">
      <body className={cn(firacode.className, "antialiased dark")}>{children}</body>
    </html>
  );
}
