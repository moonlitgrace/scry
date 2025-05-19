'use client';

import { Check, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@repo/design-system/components/ui/dropdown-menu';
import { Button } from '@repo/design-system/components/ui/button';
import { useState } from 'react';
import { cn } from '@repo/design-system/lib/utils';

interface Props {
  className?: string;
}

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

export default function StatusDropdown({ className }: Props) {
  const [status, setStatus] = useState(initialStatus);

  function toggleStatus(key: StatusKey) {
    setStatus((prev) => ({
      ...prev,
      [key]: { ...prev[key], checked: !prev[key].checked },
    }));
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn(className)} asChild>
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
          <ChevronDown className="text-muted-foreground ml-auto" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
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
