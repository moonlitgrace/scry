'use client';

import {
  ToggleGroup,
  ToggleGroupItem,
} from '@repo/design-system/components/ui/toggle-group';
import { LayoutGrid, List } from 'lucide-react';
import { useState } from 'react';

export default function LayoutToggle() {
  const [value, setValue] = useState('grid');

  function handleValueChange(val: string) {
    if (val) setValue(val);
  }

  return (
    <ToggleGroup
      variant={'outline'}
      type="single"
      value={value}
      onValueChange={handleValueChange}
      className="hidden md:flex"
      disabled
    >
      <ToggleGroupItem value="grid" aria-label="Toggle grid">
        <LayoutGrid className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="list" aria-label="Toggle list">
        <List className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
