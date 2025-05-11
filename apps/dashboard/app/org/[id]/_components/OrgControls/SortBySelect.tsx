'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/ui/components/ui/select';
import { useState } from 'react';

export default function SortBySelect() {
  const [value, setValue] = useState('recent');

  return (
    <Select value={value} onValueChange={(val) => setValue(val)}>
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
