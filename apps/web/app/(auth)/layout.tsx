import Link from "next/link";
import LogoText from '@/assets/svg/logo-text.svg';

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-dvh grid sm:grid-cols-2">
      <div className="md:max-w-sm flex flex-col md:mx-auto justify-center gap-5 p-5 lg:p-0">
        <Link href='/'>
          <LogoText className="w-20" />
        </Link>
        {children}
      </div>
      <div className="hidden sm:block h-full bg-[url(/image/auth-bg.jpg)] bg-cover bg-center bg-no-repeat"></div>
    </main>
  )
}

