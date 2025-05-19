'use client';

import { useSearchParamsHandler } from '@/hooks/use-search-params-handler';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/design-system/components/ui/select';

const DEFAULT_ENV_VALUE = 'all';

export default function SelectEnv() {
  const { updateParam } = useSearchParamsHandler();

  return (
    <Select
      defaultValue={DEFAULT_ENV_VALUE}
      onValueChange={(value) =>
        updateParam('env', value === DEFAULT_ENV_VALUE ? null : value)
      }
    >
      <SelectTrigger className="w-full sm:col-span-2 md:col-span-1">
        <SelectValue placeholder="Environment" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={DEFAULT_ENV_VALUE}>All Environments</SelectItem>
        <SelectItem value="production">Production</SelectItem>
        <SelectItem value="development">Development</SelectItem>
      </SelectContent>
    </Select>
  );
}
