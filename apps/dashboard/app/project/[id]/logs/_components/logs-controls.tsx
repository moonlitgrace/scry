import { Button } from '@repo/design-system/components/ui/button';
import { Input, InputIcon, InputRoot } from '@repo/design-system/components/ui/input';
import { Calendar, ChevronDown, Search } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/design-system/components/ui/select';
import StatusDropdown from '../../_components/status-dropdown';

export default function LogsControls() {
  return (
    <div className="grid gap-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-6">
      <InputRoot className="sm:col-span-3 md:col-span-4 lg:col-span-3">
        <InputIcon>
          <Search />
        </InputIcon>
        <Input placeholder="Search..." />
      </InputRoot>
      <Button className="justify-start" variant={'outline'} disabled>
        <Calendar className="text-muted-foreground" />
        Date Range
        <ChevronDown className="text-muted-foreground ml-auto" />
      </Button>
      <Select defaultValue="all">
        <SelectTrigger className="w-full sm:col-span-2 md:col-span-1">
          <SelectValue placeholder="Environment" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Environments</SelectItem>
          <SelectItem value="production">Production</SelectItem>
          <SelectItem value="development">Development</SelectItem>
        </SelectContent>
      </Select>
      <StatusDropdown className="sm:col-span-2 md:col-span-1" />
    </div>
  );
}
