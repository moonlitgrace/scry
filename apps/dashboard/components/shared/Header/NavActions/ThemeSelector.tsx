'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/design-system/components/ui/select';
import { useTheme } from 'next-themes';

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="inline-flex w-full items-center justify-between px-2 text-sm">
      <span>Theme</span>
      <Select value={theme} onValueChange={(value) => setTheme(value)}>
        <SelectTrigger size="sm">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent align="end">
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
