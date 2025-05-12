'use client';

import { Input } from '@repo/design-system/components/ui/input';
import { Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function ProjectsSearch() {
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

    router.replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className="relative flex w-full items-center">
      <Search className="text-muted-foreground pointer-events-none absolute left-2.5 size-5" />
      <Input
        placeholder="Search projects..."
        className="pl-10"
        onInput={handleSearch}
        defaultValue={searchParams.get('q')?.toString()}
      />
    </div>
  );
}
