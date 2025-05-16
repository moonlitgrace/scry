import { getOrgRecentErrors } from '@/services/org.service';
import { formatTimeSince } from '@/utils/datetime';
import { Badge } from '@repo/design-system/components/ui/badge';
import { Button } from '@repo/design-system/components/ui/button';
import { cn } from '@repo/design-system/lib/utils';
import { Ellipsis, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default async function RecentErrorList() {
  const orgRecentErrors = await getOrgRecentErrors();

  if (orgRecentErrors.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 py-5">
        <span className="text-sm font-medium">No Recent Errors!</span>
        <span className="text-muted-foreground text-sm">
          Configure Scry SDK to start capturing.
        </span>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <Button variant={'link'}>
            View setup guide
            <ExternalLink />
          </Button>
        </a>
      </div>
    );
  }

  return (
    <>
      {orgRecentErrors.map((error, idx) => (
        <div
          key={error.id}
          className={cn(
            idx !== orgRecentErrors.length - 1 && 'border-b',
            'bg-card group relative flex h-20 items-center justify-between gap-2 p-4 transition-[background]',
          )}
        >
          <Link
            href={`/project/${error.project.id}/err/${error.id}`}
            className="absolute inset-0 z-1"
          />
          <div className="bg-primary absolute left-0 h-11 w-2 -translate-x-2 transform rounded-r-md transition-transform group-hover:translate-x-0"></div>
          <div className="flex h-full transform flex-col justify-between transition-transform group-hover:translate-x-2">
            <div className="inline-flex items-center gap-2">
              <span className="text-sm font-medium whitespace-nowrap">
                {error.project.name}
              </span>
              <span className="text-muted-foreground line-clamp-1 font-mono text-xs break-all">
                {error.errorMsg}
              </span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Badge variant={error.env === 'PROD' ? 'destructive' : 'default'}>
                {error.env}
              </Badge>
              <Badge variant={'outline'}>{error.status}</Badge>
              <span className="text-muted-foreground text-xs">
                {formatTimeSince(error.timestamp)}
              </span>
            </div>
          </div>
          <Button variant={'ghost'} size={'icon-sm'} className="relative z-2" disabled>
            <Ellipsis />
          </Button>
        </div>
      ))}
    </>
  );
}
