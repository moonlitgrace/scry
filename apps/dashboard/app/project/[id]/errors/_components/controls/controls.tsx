import { Button } from '@repo/design-system/components/ui/button';
import { Calendar, ChevronDown } from 'lucide-react';
import StatusDropdown from '../../../_components/controls/status-dropdown';
import SearchInput from './search-input';
import SelectEnv from './select-env';

export default function Controls() {
  return (
    <div className="grid gap-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-6">
      <SearchInput />
      <Button className="justify-start" variant={'outline'} disabled>
        <Calendar className="text-muted-foreground" />
        Date Range
        <ChevronDown className="text-muted-foreground ml-auto" />
      </Button>
      <SelectEnv />
      <div className="sm:col-span-2 md:col-span-1">
        <StatusDropdown />
      </div>
    </div>
  );
}
