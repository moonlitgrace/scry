import LogoText from '@/assets/svg/logo-text.svg'
import { Button } from '@repo/ui/components/ui/button'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="px-5 py-3 w-full inline-flex items-center justify-between border-b sticky top-0 bg-background/95 z-1">
      <Link href='/'>
        <LogoText className="w-20" />
      </Link>
      <nav className="inline-flex gap-2">
        <Button variant='ghost' size='sm'>Sign in</Button>
        <Button variant='outline' size='sm'>Dashboard</Button>
      </nav>
    </header>
  )
}

