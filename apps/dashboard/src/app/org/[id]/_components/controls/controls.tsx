import { Button } from '@repo/design-system/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@repo/design-system/components/ui/dropdown-menu';
import { ChevronDown, Plus } from 'lucide-react';
import LayoutToggle from './layout-toggle';
import ProjectsSearch from './project-search';
import SortBySelect from './sort-by-select';

export default function Controls() {
  return (
    <div className="inline-flex w-full items-center gap-5">
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
