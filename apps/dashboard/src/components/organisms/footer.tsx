import Logo from '@/assets/svgs/logo.svg';
import { buttonVariants } from '@repo/design-system/components/ui/button';
import GithubIcon from '../atoms/github-icon';
import ThemeSelector from '../molecules/theme-selector';

export default function Footer() {
  return (
    <footer className="mt-auto border-t">
      <div className="mx-auto flex max-w-350 justify-between gap-5 p-5">
        <div className="flex flex-col gap-5">
          <div className="inline-flex flex-wrap items-center gap-5">
            <a href="https://example.com">
              <Logo className="w-5" />
            </a>
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <span className="text-muted-foreground text-xs">© 2025 Scry</span>
        </div>
        <div className="hidden items-center gap-2 sm:inline-flex">
          <a
            href="https://github.com/moonlitgrace/scryjs"
            target="_blank"
            rel="noreferrer noopener"
            className={buttonVariants({ size: 'sm', variant: 'ghost' })}
          >
            <GithubIcon className="fill-foreground" />
            Github
          </a>
          <ThemeSelector />
        </div>
      </div>
    </footer>
  );
}

const links = [
  {
    href: 'https://example.com',
    label: 'Home',
  },
  {
    href: 'https://example.com',
    label: 'Docs',
  },
  {
    href: 'https://github.com/moonlitgrace/scryjs/discussions',
    label: 'Discussions',
  },
  {
    href: 'https://github.com/moonlitgrace/scryjs/issues',
    label: 'Issue Tracker',
  },
];
