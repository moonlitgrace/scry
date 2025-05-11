import { Input } from '@repo/ui/components/ui/input';
import { ChevronDown, LayoutGrid, List, Search } from 'lucide-react';
import { Button } from '@repo/ui/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@repo/ui/components/ui/tabs';
import SortBySelect from './SortBySelect';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui/components/ui/dropdown-menu"

export default function OrgControls() {
  return (
    <div className="inline-flex w-full items-center gap-2">
      <div className="relative flex w-full items-center">
        <Search className="text-muted-foreground pointer-events-none absolute left-2.5 size-5" />
        <Input placeholder="Search projects..." className="pl-10" />
      </div>
      <SortBySelect />
      <Tabs>
        <TabsList>
          <TabsTrigger value="grid">
            <LayoutGrid />
          </TabsTrigger>
          <TabsTrigger value="list">
            <List />
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Add new...
            <ChevronDown className="size-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-max'>
          <DropdownMenuItem>Project</DropdownMenuItem>
          <DropdownMenuItem disabled>Team Member</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

