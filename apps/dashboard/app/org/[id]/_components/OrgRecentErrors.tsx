import { Badge } from '@repo/design-system/components/ui/badge';
import { Button } from '@repo/design-system/components/ui/button';
import { ScrollArea } from '@repo/design-system/components/ui/scroll-area';
import { Ellipsis } from 'lucide-react';
import Link from 'next/link';
import { formatTimeSince } from '@/lib/utils/datetime';
import { getOrgRecentErrors } from '@/dal/org-recent-errors';

export default async function OrgRecentErrors() {
  const orgRecentErrors = await getOrgRecentErrors();

  return (
    <div className="flex flex-col gap-2">
      <h5 className="text-sm font-medium">Recent Errors</h5>
      <ScrollArea className="h-125 border">
        {orgRecentErrors.map((error) => (
          <div
            key={error.id}
            className="bg-card/50 hover:bg-card relative flex items-center justify-between gap-2 border-b p-4 transition-[background]"
          >
            <Link
              href={`/project/${error.project.id}/err/${error.id}`}
              className="absolute inset-0 z-1"
            />
            <div className="flex flex-col gap-1">
              <div className="inline-flex items-center gap-2">
                <span className="text-sm font-medium whitespace-nowrap">
                  {error.project.name}
                </span>
                <span className="text-muted-foreground line-clamp-1 text-xs break-all">
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
      </ScrollArea>
    </div>
  );
}
