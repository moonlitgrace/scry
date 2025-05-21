import { Button } from '@repo/design-system/components/ui/button';
import { Ellipsis } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';
import LatestError from './latest-error/latest-error';

export default function LatestErrorInsights({ id }: { id: string }) {
  return (
    <div className="bg-card space-y-5 rounded-lg border p-5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col">
          <h5 className="text-lg font-semibold">Latest Error</h5>
          <span className="text-muted-foreground text-sm">
            Showing Error insights from the latest request
          </span>
        </div>
        <div className="inline-flex items-center gap-2">
          <Link href={`/project/${id}/errors?domain=https://example.com`}>
            <Button variant={'outline'}>View Errors</Button>
          </Link>
          <Button size={'icon'} variant={'ghost'} disabled>
            <Ellipsis />
          </Button>
        </div>
      </div>
      <Suspense fallback={'loading...'}>
        <LatestError id={id} />
      </Suspense>
    </div>
  );
}
