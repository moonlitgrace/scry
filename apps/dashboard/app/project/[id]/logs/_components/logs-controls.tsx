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
    <div className="grid grid-cols-6 gap-3">
      <InputRoot className="col-span-3">
        <InputIcon>
          <Search />
        </InputIcon>
        <Input placeholder="Search..." />
      </InputRoot>
      <Button className="justify-start" variant={'outline'} disabled>
        <Calendar className="text-muted-foreground" />
        Select Date Range
        <ChevronDown className="text-muted-foreground ml-auto" />
      </Button>
      <Select defaultValue="all">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Environment" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Environments</SelectItem>
          <SelectItem value="production">Production</SelectItem>
          <SelectItem value="development">Development</SelectItem>
        </SelectContent>
      </Select>
      <StatusDropdown />
    </div>
  );
}
