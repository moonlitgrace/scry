import { ChevronDown } from 'lucide-react';
import { Button } from '@repo/design-system/components/ui/button';
import SortBySelect from './SortBySelect';
import LayoutToggle from './LayoutToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@repo/design-system/components/ui/dropdown-menu';
import ProjectsSearch from './ProjectsSearch';

export default function OrgControls() {
  return (
    <div className="inline-flex w-full items-center gap-2">
      <ProjectsSearch />
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
