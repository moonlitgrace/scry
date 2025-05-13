'use client';

import { Input } from '@repo/design-system/components/ui/input';
import { cn } from '@repo/design-system/lib/utils';
import { Loader, Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function ProjectsSearch() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = useDebouncedCallback((e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;

    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('q', value);
    } else {
      params.delete('q');
    }

    setLoading(true);
    router.replace(`${pathname}?${params.toString()}`);
  }, 500);

  useEffect(() => {
    setLoading(false);
  }, [searchParams]);

  const InputIcon = loading ? Loader : Search;

  return (
    <div className="relative flex w-full items-center">
      <InputIcon
        className={cn(
          loading && 'animate-spin',
          'text-muted-foreground pointer-events-none absolute left-2.5 size-5',
        )}
      />
      <Input
        placeholder="Search projects..."
        className="pl-10 text-sm"
        onInput={handleSearch}
        defaultValue={searchParams.get('q')?.toString()}
      />
    </div>
  );
}
