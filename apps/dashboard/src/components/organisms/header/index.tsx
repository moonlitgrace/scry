'use client';

import Logo from '@/assets/svgs/logo.svg';
import { Button } from '@repo/design-system/components/ui/button';
import { cn } from '@repo/design-system/lib/utils';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import NavActions from './nav-actions';
import OrgDropdown from './org-dropdown';

interface Props {
  links: Record<
    string,
    {
      root: boolean;
      label: string;
      disabled: boolean;
    }
  >;
}

export default function Header({ links }: Props) {
  const { id } = useParams<{ id: string }>();
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  // mock
  const orgId = 'twzbncvo';

  useEffect(() => {
    function handleScroll() {
      if (!navRef.current) return;
      navRef.current.style.transform = `translateX(${Math.min(window.scrollY, 40)}px)`;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="bg-background/95 z-1 inline-flex w-full items-center justify-between px-5 pt-3 pl-14">
        <Link href={`/org/${orgId}`} className="fixed top-5 left-5 z-3">
          <Logo className="w-5" />
        </Link>
        <div className="inline-flex items-center gap-4">
          <span className="text-muted-foreground/50">/</span>
          <OrgDropdown />
        </div>
        <NavActions />
      </header>
      <nav className="bg-background/95 sticky top-0 z-2 border-b px-5 py-3">
        <div ref={navRef} className="inline-flex items-center gap-2">
          {Object.entries(links).map(([href, { root, label, disabled }], idx) => {
            const _href = href.replace('[id]', id);
            const isActive = root ? pathname === _href : pathname.includes(_href);
            return (
              <div key={idx} className="relative">
                <Button
                  variant={'ghost'}
                  size={'sm'}
                  className={cn(
                    isActive
                      ? 'dark:bg-input/50 bg-accent/50 border'
                      : 'text-muted-foreground border border-transparent',
                    disabled && 'hidden sm:flex',
                  )}
                  disabled={disabled}
                >
                  <Link href={_href}>{label}</Link>
                </Button>
                {isActive && (
                  <span className="bg-primary absolute inset-x-0 -bottom-3 h-0.5"></span>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
}
