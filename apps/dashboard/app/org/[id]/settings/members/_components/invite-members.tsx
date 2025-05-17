'use client';

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
import { ExternalLink, Link, PlusCircle, X } from 'lucide-react';
import { useState } from 'react';

function generateInvite() {
  return { id: Date.now(), email: '', role: '' };
}

export default function InviteMembers() {
  const [invites, setInvites] = useState([generateInvite()]);

  function addInvite() {
    setInvites((prev) => [...prev, generateInvite()]);
  }

  function removeInvite(id: number) {
    setInvites((prev) => prev.filter((i) => i.id !== id));
  }

  function updateInvite(id: number, field: string, value: string) {
    setInvites((prev) => prev.map((i) => (i.id === id ? { ...i, [field]: value } : i)));
  }

  return (
    <Card>
      <CardContent className="space-y-2 sm:space-y-0">
        <div className="inline-flex w-full justify-between gap-2">
          <span className="text-muted-foreground text-sm">
            Invite new members by email address
          </span>
          <Button variant={'outline'} disabled>
            <Link />
            Invite Link
          </Button>
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-4 gap-2">
            <label className="col-span-3 text-sm">Email Address*</label>
            <label className="col-span-1 text-sm">Role*</label>
            {invites.map((invite) => (
              <div key={invite.id} className="col-span-full grid grid-cols-4 gap-2">
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="col-span-3"
                  value={invite.email}
                  onChange={(e) => updateInvite(invite.id, 'email', e.target.value)}
                />
                <div className="col-span-1 inline-flex items-center gap-2">
                  <Select
                    value={invite.role}
                    onValueChange={(val) => updateInvite(invite.id, 'role', val)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="member">Member</SelectItem>
                      <SelectItem value="owner">Owner</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    size={'icon'}
                    variant={'outline'}
                    disabled={invites.length <= 1}
                    onClick={() => removeInvite(invite.id)}
                  >
                    <X />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <span className="flex border-b sm:hidden"></span>
          <Button variant={'outline'} onClick={addInvite}>
            <PlusCircle />
            Add more
          </Button>
        </div>
      </CardContent>
      <CardFooter className="justify-between gap-2 border-t">
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
