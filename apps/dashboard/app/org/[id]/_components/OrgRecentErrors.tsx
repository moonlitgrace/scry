import { Badge } from '@repo/ui/components/ui/badge';
import { Button } from '@repo/ui/components/ui/button';
import { ScrollArea } from '@repo/ui/components/ui/scroll-area';
import { Ellipsis } from 'lucide-react';
import Link from 'next/link';

export default function OrgRecentErrors() {
  return (
    <div className="flex flex-col gap-2">
      <h5 className="text-sm font-medium">Recent Errors</h5>
      <ScrollArea className="h-125 border">
        {recentErrors.map((error) => (
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
                <span className="text-muted-foreground text-xs">{error.timestamp}</span>
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

const recentErrors = [
  {
    id: 'qxtmkyrj',
    project: { id: 'bhwvpfgs', name: 'Quibble' },
    errorMsg: 'TypeError: undefined is not a function',
    env: 'PROD',
    status: 'Resolved',
    timestamp: '15m ago',
  },
  {
    id: 'kymvrdqn',
    project: { id: 'djpwqztx', name: 'scry-web' },
    errorMsg: 'NetworkError: Failed fetch',
    env: 'DEV',
    status: 'Pending',
    timestamp: '1h ago',
  },
  {
    id: 'mzjlfbqv',
    project: { id: 'bhwvpfgs', name: 'Quibble' },
    errorMsg: 'ReferenceError: profileId is not defined',
    env: 'DEV',
    status: 'Resolved',
    timestamp: '3h ago',
  },
  {
    id: 'zcvplnrt',
    project: { id: 'djpwqztx', name: 'scry-web' },
    errorMsg: 'SyntaxError: Unexpected token < in JSON at position 0',
    env: 'PROD',
    status: 'Resolved',
    timestamp: '3d ago',
  },
  {
    id: 'xrhqgkew',
    project: { id: 'bhwvpfgs', name: 'Quibble' },
    errorMsg: 'Error: Cannot read properties of null (reading "username")',
    env: 'DEV',
    status: 'Resolved',
    timestamp: '6h ago',
  },
];
