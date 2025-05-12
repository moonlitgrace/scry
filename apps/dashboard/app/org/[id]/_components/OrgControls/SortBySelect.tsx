'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/design-system/components/ui/select';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function SortBySelect() {
  const [value, setValue] = useState('recent');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleValueChange(val: string) {
    setValue(val);

    const params = new URLSearchParams(searchParams);
    params.set('sort', val);
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <Select value={value} onValueChange={handleValueChange}>
      <SelectTrigger className="w-70">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="recent">Sort by recent</SelectItem>
        <SelectItem value="name">Sort by name</SelectItem>
      </SelectContent>
    </Select>
  );
}
