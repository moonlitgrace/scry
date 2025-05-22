'use client';

import { useSearchParamsHandler } from '@/hooks/use-search-params-handler';
import { Badge } from '@repo/design-system/components/ui/badge';
import { Button } from '@repo/design-system/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@repo/design-system/components/ui/dropdown-menu';
import { cn } from '@repo/design-system/lib/utils';
import { Check, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

interface IStatusItem {
  checked: boolean;
  label: string;
  color: string;
}

type StatusKey = 'pending' | 'resolved';
type StatusState = Record<StatusKey, IStatusItem>;

const initialStatuses: StatusState = {
  pending: { checked: true, label: 'Pending', color: 'bg-destructive' },
  resolved: { checked: true, label: 'Resolved', color: 'bg-primary' },
};

export default function StatusDropdown() {
  const { getParam, updateParam } = useSearchParamsHandler();
  const [statuses, setStatuses] = useState(() => {
    const paramValue = getParam('status');
    if (!paramValue) return initialStatuses;

    const activeStatuses = paramValue.split('&');
    return Object.fromEntries(
      Object.entries(initialStatuses).map(([key, value]) => [
        key,
        { ...value, checked: activeStatuses.includes(key) },
      ]),
    );
  });

  useEffect(() => {
    const checkedKeys = Object.entries(statuses)
      .filter(([, { checked }]) => checked)
      .map(([key]) => key);

    updateParam(
      'status',
      checkedKeys.length === 0 || checkedKeys.length === Object.keys(statuses).length
        ? null
        : checkedKeys.join('&'),
    );
  }, [statuses, updateParam]);

  function toggleStatus(key: StatusKey) {
    setStatuses((prev) => ({
      ...prev,
      [key]: { ...prev[key], checked: !prev[key].checked },
    }));
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full" asChild>
        <Button variant={'outline'}>
          <div className="inline-flex items-center">
            {Object.values(statuses).map(({ checked, color }, idx) => (
              <div
                key={idx}
                className={cn(
                  checked ? color : 'bg-background',
                  'size-3 transform rounded-full border',
                )}
                style={{ transform: `translateX(-${idx * 5}px)` }}
              ></div>
            ))}
          </div>
          Status
          <Badge variant={'secondary'}>
            {Object.values(statuses).filter((s) => s.checked).length}/
            {Object.keys(statuses).length}
          </Badge>
          <ChevronDown className="text-muted-foreground ml-auto" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dropdown-content-width-full">
        {Object.entries(statuses).map(([key, { checked, label, color }]) => (
          <DropdownMenuItem key={key} onClick={() => toggleStatus(key as StatusKey)}>
            <div className={cn(color, 'size-3 rounded-full border')}></div>
            {label}
            {checked && <Check className="ml-auto" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
