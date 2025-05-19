'use client';

import { Check, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@repo/design-system/components/ui/dropdown-menu';
import { Button } from '@repo/design-system/components/ui/button';
import { useEffect, useState } from 'react';
import { cn } from '@repo/design-system/lib/utils';
import { Badge } from '@repo/design-system/components/ui/badge';
import { useSearchParamsHandler } from '@/hooks/use-search-params-handler';

interface IStatusItem {
  checked: boolean;
  label: string;
  color: string;
}

type StatusKey = 'pending' | 'resolved';
type StatusState = Record<StatusKey, IStatusItem>;

const initialStatus: StatusState = {
  pending: { checked: true, label: 'Pending', color: 'bg-destructive' },
  resolved: { checked: true, label: 'Resolved', color: 'bg-primary' },
};

export default function StatusDropdown() {
  const { getParam, updateParam } = useSearchParamsHandler();
  const [status, setStatus] = useState(() => {
    const paramValue = getParam('status');
    if (!paramValue) return initialStatus;

    const activeStatus = paramValue.split('&');
    return Object.fromEntries(
      Object.entries(initialStatus).map(([key, value]) => [
        key,
        { ...value, checked: activeStatus.includes(key) },
      ]),
    );
  });

  useEffect(() => {
    const checkedKeys = Object.entries(status)
      .filter(([, { checked }]) => checked)
      .map(([key]) => key);

    updateParam(
      'status',
      checkedKeys.length === 0 || checkedKeys.length === Object.keys(status).length
        ? null
        : checkedKeys.join('&'),
    );
  }, [status, updateParam]);

  function toggleStatus(key: StatusKey) {
    setStatus((prev) => ({
      ...prev,
      [key]: { ...prev[key], checked: !prev[key].checked },
    }));
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full" asChild>
        <Button variant={'outline'}>
          <div className="inline-flex items-center">
            {Object.values(status).map(({ checked, color }, idx) => (
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
            {Object.values(status).filter((s) => s.checked).length}/
            {Object.keys(status).length}
          </Badge>
          <ChevronDown className="text-muted-foreground ml-auto" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dropdown-content-width-full">
        {Object.entries(status).map(([key, { checked, label, color }]) => (
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
