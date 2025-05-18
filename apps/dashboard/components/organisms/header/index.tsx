'use client';

import Logo from '@/assets/svg/logo.svg';
import NavActions from './nav-actions';
import OrgDropdown from './org-dropdown';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { Button } from '@repo/design-system/components/ui/button';
import { cn } from '@repo/design-system/lib/utils';
import { useEffect, useState } from 'react';

interface Props {
  links: Record<
    string,
    {
      label: string;
      disabled: boolean;
    }
  >;
}

export default function Header({ links }: Props) {
  const [offsetX, setOffsetX] = useState(0);
  const { id } = useParams<{ id: string }>();
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setOffsetX(Math.min(window.scrollY, 40));
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="bg-background/95 z-1 inline-flex w-full items-center justify-between px-5 pt-3 pl-14">
        <Link href={`/org/${id}`} className="fixed top-5 left-5 z-3">
          <Logo className="w-5" />
        </Link>
        <div className="inline-flex items-center gap-4">
          <span className="text-muted-foreground/50">/</span>
          <OrgDropdown />
        </div>
        <NavActions />
      </header>
      <nav className="bg-background/95 sticky top-0 z-2 border-b px-5 py-3">
        <div
          className="inline-flex items-center gap-2"
          style={{ transform: `translateX(${offsetX}px)` }}
        >
          {Object.entries(links).map(([href, { label, disabled }], idx) => {
            const _href = `/org/${id + href}`;
            const isActive =
              href === '/' ? pathname + '/' === _href : pathname.includes(href);
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
