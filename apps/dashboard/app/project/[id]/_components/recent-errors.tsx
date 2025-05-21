import { getAbbr } from '@/constants/abbr';
import { formatTimeSince } from '@/utils/datetime';
import { Badge } from '@repo/design-system/components/ui/badge';
import { Button } from '@repo/design-system/components/ui/button';
import { Input, InputIcon, InputRoot } from '@repo/design-system/components/ui/input';
import { Ellipsis, Search, SpellCheck2 } from 'lucide-react';
import Link from 'next/link';
import StatusDropdown from './controls/status-dropdown';

export default function RecentErrors({ id }: { id: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col">
        <h5 className="text-lg font-semibold">Recent Errors</h5>
        <span className="text-muted-foreground text-sm">
          Showing Recent few errors, see{' '}
          <Link
            href={`/project/${id}/errors`}
            className="text-primary font-medium hover:underline"
          >
            Errors
          </Link>{' '}
          for more.
        </span>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <InputRoot>
          <InputIcon>
            <Search />
          </InputIcon>
          <Input placeholder="Search..." />
        </InputRoot>
        <div className="sm:w-50">
          <StatusDropdown />
        </div>
      </div>
      <div className="divide-y rounded-lg border">
        {recentErrors.map((error) => (
          <div
            key={error.id}
            className="bg-card hover:bg-accent/40 relative flex items-center justify-between gap-2 p-3 transition-colors"
          >
            <Link
              href={`/project/${error.project.id}/errors/${error.id}`}
              className="absolute inset-0 z-1"
            />
            <div className="inline-flex items-center gap-2">
              <SpellCheck2 className="text-muted-foreground size-5 shrink-0" />
              <code className="line-clamp-1 text-sm font-medium break-all transition-colors">
                {error.errorMsg}
              </code>
            </div>
            <div className="text-muted-foreground flex items-center gap-3">
              <Badge variant={error.env === 'production' ? 'destructive' : 'default'}>
                {getAbbr(error.env)}
              </Badge>
              <Badge variant={'outline'} className="hidden sm:flex">
                {error.status}
              </Badge>
              <span className="hidden text-sm whitespace-nowrap md:flex">
                {formatTimeSince(error.timestamp)}
              </span>
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
    env: 'development',
    status: 'Resolved',
    timestamp: '2025-05-13T09:20:00.000Z',
  },
  {
    id: 'xdmrkqva',
    project: { id: 'twzbncvo' },
    errorMsg: 'UnhandledPromiseRejectionWarning: Database connection timeout',
    env: 'production',
    status: 'Pending',
    timestamp: '2025-05-13T06:00:00.000Z',
  },
];
