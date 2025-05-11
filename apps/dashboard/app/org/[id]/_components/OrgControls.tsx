import { Input } from '@repo/ui/components/ui/input';
import { ChevronDown, LayoutGrid, List, Search } from 'lucide-react';
import { Button } from '@repo/ui/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@repo/ui/components/ui/tabs';

export default function OrgControls() {
  return (
    <div className="inline-flex w-full items-center gap-2">
      <div className="relative flex w-full items-center">
        <Search className="text-muted-foreground pointer-events-none absolute left-2.5 size-5" />
        <Input placeholder="Search projects..." className="pl-10" />
      </div>
      <Button variant={'outline'}>
        Sort by
        <ChevronDown className="size-5" />
      </Button>
      <Tabs defaultValue="grid">
        <TabsList>
          <TabsTrigger value="grid">
            <LayoutGrid />
          </TabsTrigger>
          <TabsTrigger value="list">
            <List />
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Button>
        Add new...
        <ChevronDown className="size-5" />
      </Button>
    </div>
  );
}
