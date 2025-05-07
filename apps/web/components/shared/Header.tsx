import LogoText from '@/assets/svg/logo-text.svg'
import { withAngleBrackets } from '@/utils/with-angle-brackets'
import { Button } from '@repo/ui/components/ui/button'

export default function Header() {
  return (
    <header className="relative px-5 py-3 w-full inline-flex items-center justify-between border-b sticky top-0 bg-background/95 z-1">
      <nav className='absolute left-1/2 transform -translate-x-1/2 hidden md:inline-flex items-center gap-5 text-sm text-muted-foreground font-medium'>
        <a href='#how-it-works' className='hover:text-foreground transition-all'>{withAngleBrackets('how it works')}</a>
        <a href='#pricing' className='hover:text-foreground transition-all'>{withAngleBrackets('pricing')}</a>
        <a href='#faq' className='hover:text-foreground transition-all'>{withAngleBrackets('faq')}</a>
      </nav>
      <a href='#'><LogoText className="w-20" /></a>
      <nav className="inline-flex gap-2">
        <Button variant='ghost' size='sm'>Sign in</Button>
        <Button variant='outline' size='sm'>Dashboard</Button>
      </nav>
    </header>
  )
}

