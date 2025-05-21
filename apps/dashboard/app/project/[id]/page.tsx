import { Badge } from '@repo/design-system/components/ui/badge';
import { Button } from '@repo/design-system/components/ui/button';
import { Globe } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import KeyMetrics from './_components/key-metrics/key-metrics';
import LatestErrorInsights from './_components/latest-error-insights';
import RecentErrors from './_components/recent-errors';

export const metadata: Metadata = {
  title: 'scryjs-dashboard - Overview – scry',
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <>
      <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
        <div className="inline-flex items-center gap-2">
          <h2 className="text-3xl font-bold">scryjs-dashboard</h2>
          <Badge>Active</Badge>
        </div>
        <div className="inline-flex items-center gap-3">
          <Link href={`/project/${id}/settings/domains`}>
            <Button variant={'outline'}>Domains</Button>
          </Link>
          <a href="https://example.com" target="_blank" rel="noreferrer noopener">
            <Button>
              View Site <Globe />
            </Button>
          </a>
        </div>
      </div>
      <KeyMetrics id={id} />
      <LatestErrorInsights id={id} />
      <RecentErrors id={id} />
    </>
  );
}
