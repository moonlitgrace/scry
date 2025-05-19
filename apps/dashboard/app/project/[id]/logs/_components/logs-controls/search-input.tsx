'use client';

import { Input, InputIcon, InputRoot } from '@repo/design-system/components/ui/input';
import { Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set('q', query);
    } else {
      params.delete('q');
    }

    router.replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <InputRoot className="sm:col-span-3 md:col-span-4 lg:col-span-3">
      <InputIcon>
        <Search />
      </InputIcon>
      <Input placeholder="Search..." onChange={(e) => handleSearch(e.target.value)} />
    </InputRoot>
  );
}
