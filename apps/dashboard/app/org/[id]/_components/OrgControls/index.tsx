import { Input } from '@repo/design-system/components/ui/input';
import { ChevronDown, Search } from 'lucide-react';
import { Button } from '@repo/design-system/components/ui/button';
import SortBySelect from './SortBySelect';
import LayoutToggle from './LayoutToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@repo/design-system/components/ui/dropdown-menu';

export default function OrgControls() {
  return (
    <div className="inline-flex w-full items-center gap-2">
      <div className="relative flex w-full items-center">
        <Search className="text-muted-foreground pointer-events-none absolute left-2.5 size-5" />
        <Input placeholder="Search projects..." className="pl-10" />
      </div>
      <SortBySelect />
      <LayoutToggle />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Add new...
            <ChevronDown className="size-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-max">
          <DropdownMenuItem>Project</DropdownMenuItem>
          <DropdownMenuItem disabled>Team Member</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
