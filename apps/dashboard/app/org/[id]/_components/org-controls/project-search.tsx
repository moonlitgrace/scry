'use client';

import { useSearchParamsHandler } from '@/hooks/use-search-params-handler';
import { Input, InputIcon, InputRoot } from '@repo/design-system/components/ui/input';
import { Spinner } from '@repo/design-system/components/ui/spinner';
import { Search } from 'lucide-react';

export default function ProjectSearch() {
  const { loading, getParam, debouncedUpdateParam } = useSearchParamsHandler();

  return (
    <>
      <InputRoot>
        <InputIcon>{loading ? <Spinner size="icon" /> : <Search />}</InputIcon>
        <Input
          placeholder="Search projects..."
          onInput={(e) => debouncedUpdateParam('q', (e.target as HTMLInputElement).value)}
          defaultValue={getParam('q') ?? ''}
        />
      </InputRoot>
    </>
  );
}
