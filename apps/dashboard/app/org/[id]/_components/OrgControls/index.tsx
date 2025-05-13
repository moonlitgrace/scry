import { ChevronDown, Plus } from 'lucide-react';
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
          <Button className="w-9 sm:w-auto">
            <span className="hidden sm:inline-block">Add new...</span>
            <ChevronDown className="hidden size-5 sm:flex" />
            <Plus className="size-5 sm:hidden" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-34">
          <DropdownMenuItem>Project</DropdownMenuItem>
          <DropdownMenuItem disabled>Team Member</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
