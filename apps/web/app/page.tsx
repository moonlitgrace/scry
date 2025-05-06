import Link from "next/link";
import LogoText from '@/assets/svg/logo-text.svg'

export default function Home() {
  return (
    <header>
      <Link href='/'>
        <LogoText className="w-10" />
      </Link>
    </header>
  );
}
