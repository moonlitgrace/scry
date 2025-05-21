import { Skeleton } from '@repo/design-system/components/ui/skeleton';

export default function MetricsGridSkeleton() {
  return [...Array(4)].map((_, idx) => (
    <div key={idx} className="bg-card flex items-center gap-4 rounded-lg border p-4">
      <Skeleton className="size-13 shrink-0" />
      <div className="flex w-full flex-col gap-2">
        <Skeleton className="h-5 w-20" />
        <div className="inline-flex items-center justify-between">
          <Skeleton className="h-5 w-10" />
          <Skeleton className="h-5 w-10" />
        </div>
      </div>
    </div>
  ));
}
