import { Ellipsis, RefreshCcw, SpellCheck2 } from 'lucide-react';
import LogsControls from './_components/logs-controls';
import { Badge } from '@repo/design-system/components/ui/badge';
import { formatTimeSince } from '@/utils/datetime';
import { Button } from '@repo/design-system/components/ui/button';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold">Logs</h2>
        <div className="text-muted-foreground inline-flex items-center gap-2">
          <RefreshCcw className="size-4" />
          <span className="text-sm">Continously generated from SDK requests</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <LogsControls />
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
                  Status
                </span>
                <Badge variant={'outline'}>{log.status}</Badge>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="text-muted-foreground text-sm sm:hidden md:flex">
                  Env.
                </span>
                <Badge variant={log.env === 'PROD' ? 'destructive' : 'default'}>
                  {log.env}
                </Badge>
              </div>
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
      </div>
    </>
  );
}

const logs = [
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
