import LogoText from '@/assets/svg/logo-text.svg'
import { withAngleBrackets } from '@/utils/with-angle-brackets'
import { Button } from '@repo/ui/components/ui/button'

export default function Header() {
  return (
    <header className="px-5 py-3 w-full inline-flex items-center justify-between border-b sticky top-0 bg-background/95 z-1">
      <div className='inline-flex items-center gap-5'>
        <a href='#'><LogoText className="w-20" /></a>
        <nav className='inline-flex items-center gap-2 text-sm text-muted-foreground font-medium'>
          <a href='#how-it-works' className='hover:text-foreground transition-all'>{withAngleBrackets('how it works')}</a>
          <a href='#pricing' className='hover:text-foreground transition-all'>{withAngleBrackets('pricing')}</a>
        </nav>
      </div>
      <nav className="inline-flex gap-2">
        <Button variant='ghost' size='sm'>Sign in</Button>
        <Button variant='outline' size='sm'>Dashboard</Button>
      </nav>
    </header>
  )
}

