import { Input, InputIcon, InputRoot } from '@repo/design-system/components/ui/input';
import { Search } from 'lucide-react';

export default function SettingsBar() {
  return (
    <div className="flex flex-col gap-5">
      <InputRoot>
        <InputIcon>
          <Search />
        </InputIcon>
        <Input placeholder="Search..." />
      </InputRoot>
    </div>
  );
}
