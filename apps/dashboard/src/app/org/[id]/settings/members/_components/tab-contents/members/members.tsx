import { Button } from '@repo/design-system/components/ui/button';
import { Checkbox } from '@repo/design-system/components/ui/checkbox';
import { Input, InputIcon, InputRoot } from '@repo/design-system/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/design-system/components/ui/select';
import { ArrowDownNarrowWide, Ellipsis, Search } from 'lucide-react';
import MemberList from './member-list';

export default function Members() {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        <InputRoot className="col-span-2 sm:col-span-3">
          <InputIcon>
            <Search />
          </InputIcon>
          <Input placeholder="Filter..." />
        </InputRoot>
        <Select defaultValue="all">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Team Roles</SelectItem>
            <SelectItem value="member">Member</SelectItem>
            <SelectItem value="owner">Owner</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="date">
          <SelectTrigger className="w-full">
            <ArrowDownNarrowWide />
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Date</SelectItem>
            <SelectItem value="name-a-z">Name (A-Z)</SelectItem>
            <SelectItem value="name-z-a">Name (Z-A)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col rounded-lg border">
        <div className="inline-flex w-full items-center justify-between border-b px-3 py-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="select-all" checked />
            <label
              htmlFor="select-all"
              className="text-muted-foreground text-sm select-none"
            >
              Select all (1)
            </label>
          </div>
          <Button size={'icon-sm'} variant={'ghost'} disabled>
            <Ellipsis />
          </Button>
        </div>
        <div className="bg-card flex flex-col gap-5 p-3">
          <MemberList />
        </div>
      </div>
    </div>
  );
}
