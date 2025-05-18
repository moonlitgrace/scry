import { Input, InputIcon, InputRoot } from '@repo/design-system/components/ui/input';
import { Ellipsis, Search, SpellCheck2 } from 'lucide-react';
import StatusDropdown from './status-dropdown';
import { Button } from '@repo/design-system/components/ui/button';
import { formatTimeSince } from '@/utils/datetime';
import { Badge } from '@repo/design-system/components/ui/badge';
import Link from 'next/link';

export default function RecentErrors() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col">
        <h5 className="text-lg font-semibold">Recent Errors</h5>
        <span className="text-muted-foreground text-sm">
          Showing Recent few errors, see /logs for more.
        </span>
      </div>
      <div className="flex gap-5">
        <InputRoot>
          <InputIcon>
            <Search />
          </InputIcon>
          <Input placeholder="Search..." />
        </InputRoot>
        <StatusDropdown />
      </div>
      <div className="bg-card divide-y rounded-lg border">
        {recentErrors.map((error) => (
          <div
            key={error.id}
            className="hover:bg-accent/40 relative flex items-center justify-between gap-2 p-3 transition-colors"
          >
            <Link
              href={`/project/${error.project.id}/err/${error.id}`}
              className="absolute inset-0 z-1"
            />
            <div className="inline-flex items-center gap-2">
              <SpellCheck2 className="text-muted-foreground size-5" />
              <code className="text-sm font-medium transition-colors">
                {error.errorMsg}
              </code>
            </div>
            <div className="text-muted-foreground flex items-center gap-3">
              <Badge variant={error.env === 'PROD' ? 'destructive' : 'default'}>
                {error.env}
              </Badge>
              <Badge variant={'outline'}>{error.status}</Badge>
              <span className="text-sm">{formatTimeSince(error.timestamp)}</span>
              <Button variant={'ghost'} size={'icon-sm'} disabled>
                <Ellipsis />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const recentErrors = [
  {
    id: 'ljrtxwem',
    project: { id: 'twzbncvo' },
    errorMsg: 'TypeError: Cannot convert undefined to object',
    env: 'DEV',
    status: 'Resolved',
    timestamp: '2025-05-13T09:20:00.000Z',
  },
  {
    id: 'xdmrkqva',
    project: { id: 'twzbncvo' },
    errorMsg: 'UnhandledPromiseRejectionWarning: Database connection timeout',
    env: 'PROD',
    status: 'Pending',
    timestamp: '2025-05-13T06:00:00.000Z',
  },
];
