'use client';

import Header from '@/components/shared/Header';
import { Button } from '@repo/design-system/components/ui/button';
import Link from 'next/link';
import Logo from '@/assets/svg/logo.svg';
import { useEffect, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';

export default function OrgHeader() {
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
      <Header />
      <Link href={`/org/${id}`} className="fixed top-5 left-5 z-3">
        <Logo className="w-5" />
      </Link>
      <nav className="bg-background/95 sticky top-0 z-2 border-b px-5 pt-3">
        <div
          className="inline-flex items-center gap-2"
          style={{ transform: `translateX(${offsetX}px)` }}
        >
          {Object.entries(links).map(([href, { label, disabled }], idx) => {
            const newHref = `/org/${id + href}`;
            const isActive =
              href === '/' ? pathname + '/' === newHref : pathname === newHref;
            return (
              <Button
                key={idx}
                variant={'ghost'}
                size={'sm'}
                className={
                  isActive
                    ? 'bg-muted border'
                    : 'text-muted-foreground border border-transparent'
                }
                disabled={disabled}
              >
                <Link href={newHref}>{label}</Link>
              </Button>
            );
          })}
        </div>
      </nav>
    </>
  );
}

const links = {
  '/': {
    label: 'Overview',
    disabled: false,
  },
  '/activity': {
    label: 'Activity',
    disabled: true,
  },
  '/settings': {
    label: 'Settings',
    disabled: false,
  },
};
