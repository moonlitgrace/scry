import { formatTimeSince } from '@/utils/datetime';
import { Badge } from '@repo/design-system/components/ui/badge';
import { Button } from '@repo/design-system/components/ui/button';
import { Ellipsis, ExternalLink, GitBranch, Globe, ImageOff } from 'lucide-react';
import Link from 'next/link';

export default function LatestDeployment({ id }: { id: string }) {
  return (
    <>
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col">
          <h5 className="text-lg font-semibold">Latest Error</h5>
          <span className="text-muted-foreground text-sm">
            Showing Error insights from the latest request
          </span>
        </div>
        <div className="inline-flex items-center gap-2">
          <Link href={`/project/${id}/logs?domain=https://example.com`}>
            <Button variant={'outline'}>View Logs</Button>
          </Link>
          <Button size={'icon'} variant={'ghost'} disabled>
            <Ellipsis />
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="text-muted-foreground flex aspect-video w-1/3 flex-col items-center justify-center gap-2 rounded-lg border">
          <ImageOff className="size-10 stroke-1" />
          <div className="flex flex-col items-center">
            <span className="text-sm">SnapShot not available!</span>
            <span className="text-sm">(coming soon)</span>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground text-sm">Source</span>
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2">
                <GitBranch className="text-muted-foreground size-4" />
                <Badge variant={'destructive'}>PROD</Badge>
              </div>
              <div className="inline-flex items-center gap-2">
                <Globe className="text-muted-foreground size-4" />
                <a
                  href="https://example.com/route?q=err"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 text-sm hover:underline"
                >
                  https://example.com/route?q=err
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground text-sm">Status</span>
              <Badge variant={'secondary'}>Resolved</Badge>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground text-sm">Triggered</span>
              <span className="text-sm">
                {formatTimeSince('2025-05-13T09:20:00.000Z')} from FireFox{' '}
                <span className="text-muted-foreground">(client)</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground text-sm">Domain</span>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-sm hover:underline"
            >
              https://example.com
              <ExternalLink className="size-3" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
