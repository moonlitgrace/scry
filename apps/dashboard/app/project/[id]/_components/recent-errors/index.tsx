import { Input, InputIcon, InputRoot } from '@repo/design-system/components/ui/input';
import { Search } from 'lucide-react';
import StatusDropdown from './status-dropdown';

export default function RecentErrors() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-5">
        <InputRoot>
          <InputIcon>
            <Search />
          </InputIcon>
          <Input placeholder="Search..." />
        </InputRoot>
        <StatusDropdown />
      </div>
    </div>
  );
}
