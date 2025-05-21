import LogoText from '@/assets/svg/logo-text.svg';
import Link from 'next/link';

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="grid min-h-dvh sm:grid-cols-2">
      <div className="flex flex-col justify-center gap-5 p-5 md:mx-auto md:max-w-sm lg:p-0">
        <Link href="/">
          <LogoText className="w-20" />
        </Link>
        {children}
      </div>
      <div className="hidden h-full bg-[url(/image/auth-bg.jpg)] bg-cover bg-center bg-no-repeat sm:block"></div>
    </main>
  );
}
