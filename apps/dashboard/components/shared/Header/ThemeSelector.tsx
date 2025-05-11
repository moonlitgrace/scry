'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select"
import { useTheme } from "next-themes"

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme()

  return (
    <div className='w-full px-2 text-sm inline-flex items-center justify-between'>
      <span>Theme</span>
      <Select value={theme} onValueChange={(value) => setTheme(value)}>
        <SelectTrigger size='sm'>
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent align='end'>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

