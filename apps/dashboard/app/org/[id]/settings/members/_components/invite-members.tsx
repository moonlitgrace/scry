import { Button } from '@repo/design-system/components/ui/button';
import { Card, CardContent, CardFooter } from '@repo/design-system/components/ui/card';
import { Input } from '@repo/design-system/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/design-system/components/ui/select';
import { ExternalLink, Link, PlusCircle } from 'lucide-react';

export default function InviteMembers() {
  return (
    <Card>
      <CardContent>
        <div className="inline-flex w-full items-center justify-between">
          <span className="text-muted-foreground text-sm">
            Invite new members by email address
          </span>
          <Button variant={'outline'} disabled>
            <Link />
            Invite Link
          </Button>
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm">Email Address*</label>
              <Input type="email" placeholder="john@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm">Role*</label>
              <Select>
                <SelectTrigger className="min-w-40">
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="member">Member</SelectItem>
                  <SelectItem value="owner">Owner</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button variant={'outline'}>
            <PlusCircle />
            Add more
          </Button>
        </div>
      </CardContent>
      <CardFooter className="justify-between border-t">
        <span className="text-muted-foreground text-sm">
          This feature is available on the{' '}
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary inline-flex items-center gap-1 hover:underline"
          >
            Pro plan <ExternalLink className="size-4" />
          </a>
        </span>
        <Button disabled>Invite</Button>
      </CardFooter>
    </Card>
  );
}
