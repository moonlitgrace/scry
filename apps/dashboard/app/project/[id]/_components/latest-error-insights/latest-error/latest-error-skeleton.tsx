import { Skeleton } from '@repo/design-system/components/ui/skeleton';

export default function LatestErrorSkeleton() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Skeleton className="h-33 sm:h-auto md:col-span-1" />
      <div className="flex flex-col gap-5 md:col-span-2 lg:col-span-3">
        <div className="flex flex-col gap-2">
          <span className="text-muted-foreground text-sm">Source</span>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-5 w-60" />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex w-20 flex-col gap-1">
            <span className="text-muted-foreground text-sm">Status</span>
            <Skeleton className="h-5 w-15" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground text-sm">Triggered</span>
            <Skeleton className="h-5 w-40" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground text-sm">Domain</span>
          <Skeleton className="h-5 w-40" />
        </div>
      </div>
    </div>
  );
}
