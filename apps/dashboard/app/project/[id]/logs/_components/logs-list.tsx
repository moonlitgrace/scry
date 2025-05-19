import {
  getProjectRecentLogs,
  type IProjectRecentLogsProps as Props,
} from '@/services/project.service';
import { formatTimeSince } from '@/utils/datetime';
import { Badge } from '@repo/design-system/components/ui/badge';
import { Button } from '@repo/design-system/components/ui/button';
import { Ellipsis, SpellCheck2 } from 'lucide-react';
import Link from 'next/link';

export default async function LogsList({ id, query, env, status }: Props) {
  const logs = await getProjectRecentLogs({ id, query, env, status });

  return (
    <div className="divide-y rounded-lg border">
      {logs.map((log) => (
        <div
          key={log.id}
          className="bg-card hover:bg-accent/40 relative grid items-center gap-3 p-3 transition-colors sm:grid-cols-6"
        >
          <Link
            href={`/project/${log.project.id}/err/${log.id}`}
            className="absolute inset-0 z-1"
          />
          <div className="col-span-full inline-flex items-center gap-2 sm:col-span-3">
            <SpellCheck2 className="text-muted-foreground size-5 shrink-0" />
            <code className="line-clamp-2 text-sm break-all">{log.errorMsg}</code>
          </div>
          <div className="inline-flex items-center gap-2">
            <span className="text-muted-foreground text-sm sm:hidden md:flex">
              Status:
            </span>
            <Badge variant={'outline'} className="capitalize">
              {log.status}
            </Badge>
          </div>
          <Badge
            variant={log.env === 'production' ? 'destructive' : 'default'}
            className="capitalize"
          >
            {log.env}
          </Badge>
          <div className="flex items-center justify-between gap-2 sm:justify-normal">
            <span className="text-muted-foreground text-sm sm:ml-auto">
              {formatTimeSince(log.timestamp)}
            </span>
            <Button variant={'ghost'} size={'icon-sm'} disabled>
              <Ellipsis />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
