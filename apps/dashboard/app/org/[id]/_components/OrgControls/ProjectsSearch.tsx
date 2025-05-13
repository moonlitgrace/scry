'use client';

import InputWithIcon from '@/components/ui-variants/InputWithIcon';
import { Input, InputIcon, InputRoot } from '@repo/design-system/components/ui/input';
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

  return (
    <>
      <InputRoot>
        <InputIcon>
          {loading ? <Loader className="animate-spin" /> : <Search />}
        </InputIcon>
        <Input
          placeholder="Search projects..."
          onInput={handleSearch}
          defaultValue={searchParams.get('q')?.toString()}
        />
      </InputRoot>
    </>
  );
}
