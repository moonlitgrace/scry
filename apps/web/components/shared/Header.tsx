import LogoText from '@/assets/svg/logo-text.svg';
import { withAngleBrackets } from '@/lib/with-angle-brackets';
import { buttonVariants } from '@repo/ui/components/ui/button';
import { ModeToggle } from '@repo/ui/components/ui/mode-toggle';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-background/95 relative sticky top-0 z-1 inline-flex w-full items-center justify-between border-b px-5 py-3">
      <nav className="text-muted-foreground absolute left-1/2 hidden -translate-x-1/2 transform items-center gap-5 text-sm font-medium md:inline-flex">
        {['how-it-works', 'pricing', 'faq'].map((key) => (
          <a key={key} href={`#${key}`} className="hover:text-foreground transition-all">
            {withAngleBrackets(key.replaceAll('-', ' '))}
          </a>
        ))}
      </nav>
      <a href="#">
        <LogoText className="w-20" />
      </a>
      <nav className="inline-flex gap-2">
        <ModeToggle />
        <Link
          href="/sign-in"
          className={buttonVariants({ variant: 'outline', size: 'sm' })}
        >
          Sign in
        </Link>
      </nav>
    </header>
  );
}
