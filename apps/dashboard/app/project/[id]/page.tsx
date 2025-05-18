import { Button } from '@repo/design-system/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import LatestErrorInsights from './_components/latest-error-insights';
import { Badge } from '@repo/design-system/components/ui/badge';
import KeyMetrics from './_components/key-metrics';
import RecentErrors from './_components/recent-errors';

export const metadata: Metadata = {
  title: 'scryjs-dashboard - Overview – scry',
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <>
      <div className="flex items-center justify-between gap-2">
        <div className="inline-flex items-center gap-2">
          <h2 className="text-3xl font-bold">scryjs-dashboard</h2>
          <Badge>Active</Badge>
        </div>
        <div className="inline-flex items-center gap-2">
          <Link href={`/project/${id}/settings/domains`}>
            <Button variant={'outline'}>Domains</Button>
          </Link>
          <a href="https://example.com" target="_blank" rel="noreferrer noopener">
            <Button>
              View Site <ExternalLink />
            </Button>
          </a>
        </div>
      </div>
      <KeyMetrics />
      <div className="space-y-5 rounded-lg border p-5">
        <LatestErrorInsights id={id} />
      </div>
      <RecentErrors />
    </>
  );
}
