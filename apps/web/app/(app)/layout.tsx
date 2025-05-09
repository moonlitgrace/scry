import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'scry – Track the unseen',
  description: 'Track and reveal hidden errors and logs in your JavaScript apps.',
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

