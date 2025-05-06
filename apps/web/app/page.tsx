import Link from "next/link";
import LogoText from '@/assets/svg/logo-text.svg'
import { Button } from "@repo/ui/components/ui/button";

export default function Home() {
  return (
    <header className="px-5 py-4 w-full inline-flex items-center justify-between">
      <Link href='/'>
        <LogoText className="w-20" />
      </Link>
      <nav className="inline-flex gap-2">
        <Button variant='ghost' size='sm'>Sign in</Button>
        <Button variant='secondary' size='sm'>Dashboard</Button>
      </nav>
    </header>
  );
}
