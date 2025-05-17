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

function generateEmptyInvite() {
  return { id: Date.now(), email: '', role: '' };
}

export default function InviteMembers() {
  const [invites, setInvites] = useState([generateEmptyInvite()]);

  function addInvite() {
    setInvites((prev) => [...prev, generateEmptyInvite()]);
  }

  function removeInvite(id: number) {
    setInvites((prev) => prev.filter((invite) => invite.id !== id));
  }

  function updateInvite(id: number, field: 'email' | 'role', value: string) {
    setInvites((prev) =>
      prev.map((invite) => (invite.id === id ? { ...invite, [field]: value } : invite)),
    );
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
          <div className="grid gap-2 sm:grid-cols-2">
            <label className="text-sm">Email Address*</label>
            <label className="hidden text-sm sm:block">Role*</label>
            {invites.map((invite) => (
              <div key={invite.id} className="col-span-full grid gap-2 sm:grid-cols-2">
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={invite.email}
                  onChange={(e) => updateInvite(invite.id, 'email', e.target.value)}
                />
                <div className="inline-flex items-center gap-2">
                  <Select
                    value={invite.role}
                    onValueChange={(val) => updateInvite(invite.id, 'role', val)}
                  >
                    <SelectTrigger className="w-full max-w-40">
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
                <span className="col-span-full border-b sm:hidden"></span>
              </div>
            ))}
          </div>
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
