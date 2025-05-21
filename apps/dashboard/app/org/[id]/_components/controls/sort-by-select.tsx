'use client';

import { useSearchParamsHandler } from '@/hooks/use-search-params-handler';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/design-system/components/ui/select';

export default function SortBySelect() {
  const { updateParam, getParam } = useSearchParamsHandler();

  return (
    <Select
      defaultValue={getParam('sort') ?? 'recent'}
      onValueChange={(val) => updateParam('sort', val)}
    >
      <SelectTrigger className="hidden w-50 sm:flex">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="recent">Sort by recent</SelectItem>
        <SelectItem value="name">Sort by name</SelectItem>
      </SelectContent>
    </Select>
  );
}
