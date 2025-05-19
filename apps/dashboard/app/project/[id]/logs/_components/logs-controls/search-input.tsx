'use client';

import { useSearchParamsHandler } from '@/hooks/use-search-params-handler';
import { Input, InputIcon, InputRoot } from '@repo/design-system/components/ui/input';
import { Search } from 'lucide-react';

export default function SearchInput() {
  const { debouncedUpdateParam } = useSearchParamsHandler();

  return (
    <InputRoot className="sm:col-span-3 md:col-span-4 lg:col-span-3">
      <InputIcon>
        <Search />
      </InputIcon>
      <Input
        placeholder="Search..."
        onChange={(e) => debouncedUpdateParam('q', e.target.value)}
      />
    </InputRoot>
  );
}
