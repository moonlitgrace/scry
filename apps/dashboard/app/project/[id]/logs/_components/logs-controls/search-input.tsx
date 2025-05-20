'use client';

import { useSearchParamsHandler } from '@/hooks/use-search-params-handler';
import { Input, InputIcon, InputRoot } from '@repo/design-system/components/ui/input';
import { Loader, Search } from 'lucide-react';

export default function SearchInput() {
  const { debouncedUpdateParam, getParam, isPending } = useSearchParamsHandler();

  return (
    <InputRoot className="sm:col-span-3 md:col-span-4 lg:col-span-3">
      <InputIcon>
        {isPending ? <Loader className="animate-spin" /> : <Search />}
      </InputIcon>
      <Input
        placeholder="Search..."
        defaultValue={getParam('q') ?? ''}
        onChange={(e) => debouncedUpdateParam('q', e.target.value)}
      />
    </InputRoot>
  );
}
