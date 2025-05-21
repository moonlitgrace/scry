'use client';

import { getAbbr } from '@/constants/abbr';
import { useProjectContext } from '@/context/project-context';
import { formatTimeSince } from '@/utils/datetime';
import { Badge } from '@repo/design-system/components/ui/badge';
import { ExternalLink, GitBranch, Globe, ImageOff } from 'lucide-react';
import { use } from 'react';

export default function LatestError() {
  const { latestErrorPromise } = useProjectContext();
  const latestError = use(latestErrorPromise);

  return (
    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="bg-muted text-muted-foreground flex flex-col items-center justify-center gap-2 rounded-lg border p-5 md:col-span-1">
        <ImageOff className="size-10 stroke-1" />
        <div className="flex flex-col items-center">
          <span className="text-sm">SnapShot not available!</span>
          <span className="text-sm">(coming soon)</span>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:col-span-2 lg:col-span-3">
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground text-sm">Source</span>
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2">
              <GitBranch className="text-muted-foreground size-4" />
              <Badge variant={'destructive'}>{getAbbr(latestError.source.env)}</Badge>
            </div>
            <div className="inline-flex items-center gap-2">
              <Globe className="text-muted-foreground size-4" />
              <a
                href={latestError.source.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 text-sm hover:underline"
              >
                {latestError.source.href}
                <ExternalLink className="size-3" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground text-sm">Status</span>
            <Badge variant={'secondary'}>{latestError.status}</Badge>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground text-sm">Triggered</span>
            <span className="text-sm">
              {formatTimeSince(latestError.timestamp)} from {latestError.userAgent}{' '}
              <span className="text-muted-foreground">(client)</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground text-sm">Domain</span>
          <a
            href={latestError.domain}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1 text-sm hover:underline"
          >
            {latestError.domain}
            <ExternalLink className="size-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
