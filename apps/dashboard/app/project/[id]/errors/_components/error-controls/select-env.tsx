'use client';

import { useSearchParamsHandler } from '@/hooks/use-search-params-handler';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/design-system/components/ui/select';

export default function SelectEnv() {
  const { updateParam, getParam } = useSearchParamsHandler();
  const defaultEnv = getParam('env') ?? 'all';

  return (
    <Select
      defaultValue={defaultEnv}
      onValueChange={(value) => updateParam('env', value === 'all' ? null : value)}
    >
      <SelectTrigger className="w-full sm:col-span-2 md:col-span-1">
        <SelectValue placeholder="Environment" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Environments</SelectItem>
        <SelectItem value="production">Production</SelectItem>
        <SelectItem value="development">Development</SelectItem>
      </SelectContent>
    </Select>
  );
}
