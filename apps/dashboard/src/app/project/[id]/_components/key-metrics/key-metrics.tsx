import { Suspense } from 'react';
import MetricsGrid from './metrics-grid/metrics-grid';
import MetricsGridSkeleton from './metrics-grid/metrics-grid-skeleton';

export default function KeyMetrics() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <Suspense fallback={<MetricsGridSkeleton />}>
        <MetricsGrid />
      </Suspense>
    </div>
  );
}
