'use client';

import { Button } from '@repo/design-system/components/ui/button';
import { Input, InputIcon, InputRoot } from '@repo/design-system/components/ui/input';
import { cn } from '@repo/design-system/lib/utils';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SettingsBar() {
  const [newLinks, setNewLinks] = useState(links);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const normalizedSearchQuery = searchQuery.toLowerCase();

    const _newLinks = Object.fromEntries(
      Object.entries(links).filter(([, { label }]) =>
        label.toLowerCase().includes(normalizedSearchQuery),
      ),
    );

    setNewLinks(_newLinks as typeof newLinks);
  }, [searchQuery]);

  return (
    <div className="flex flex-col gap-5">
      <InputRoot>
        <InputIcon>
          <Search />
        </InputIcon>
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </InputRoot>
      <div className="flex flex-wrap gap-2 md:flex-col">
        {Object.keys(newLinks).length ? (
          <>
            {Object.entries(newLinks).map(([href, { label, disabled }], idx) => {
              const newHref = pathname + href;
              const isActive =
                href === '/' ? pathname + '/' === newHref : pathname === newHref;
              return (
                <Button
                  key={idx}
                  variant={'ghost'}
                  className={cn(
                    'justify-start px-2 sm:px-4',
                    !isActive && 'text-muted-foreground',
                    disabled && 'hidden sm:flex',
                  )}
                  disabled={disabled}
                >
                  <Link href={newHref} className="flex-1 text-start">
                    {label}
                  </Link>
                </Button>
              );
            })}
          </>
        ) : (
          <span className="text-muted-foreground border px-4 py-2 text-xs">
            No settings matching {`"${searchQuery}"`}
          </span>
        )}
      </div>
    </div>
  );
}

const links = {
  '/': {
    label: 'General',
    disabled: false,
  },
  '/billing': {
    label: 'Billing',
    disabled: true,
  },
  '/members': {
    label: 'Members',
    disabled: false,
  },
  '/notifications': {
    label: 'Notifications',
    disabled: false,
  },
};
