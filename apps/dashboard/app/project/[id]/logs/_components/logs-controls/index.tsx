import { Button } from '@repo/design-system/components/ui/button';
import { Calendar, ChevronDown } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/design-system/components/ui/select';
import StatusDropdown from '../../../_components/status-dropdown';
import SearchInput from './search-input';

export default function LogsControls() {
  console.log('rendered');
  return (
    <div className="grid gap-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-6">
      <SearchInput />
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
      <div className="sm:col-span-2 md:col-span-1">
        <StatusDropdown />
      </div>
    </div>
  );
}
