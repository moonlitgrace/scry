import Link from "next/link";
import LogoText from '@/assets/svg/logo-text.svg';

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-dvh grid md:grid-cols-2">
      <div className="max-w-sm flex flex-col mx-auto justify-center gap-5">
        <Link href='/'>
          <LogoText className="w-20" />
        </Link>
        {children}
      </div>
      <div className="h-full bg-[url(/image/auth-bg-4.jpg)] bg-cover bg-center bg-no-repeat"></div>
    </main>
  )
}

