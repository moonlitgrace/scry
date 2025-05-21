import { Skeleton } from '@repo/design-system/components/ui/skeleton';

export default function ProjectListSkeleton() {
  return (
    <>
      {[...Array(2)].map((_, idx) => (
        <div
          key={idx}
          className="bg-card flex h-45 flex-col justify-between rounded-lg border p-4"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-3 w-40" />
            </div>
            <div className="inline-flex items-center gap-4">
              <Skeleton className="h-5 w-14" />
              <Skeleton className="size-5" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-3 w-30" />
          </div>
          <div className="grid grid-cols-3">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-8" />
              <Skeleton className="h-3 w-15" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <Skeleton className="h-4 w-8" />
              <Skeleton className="h-3 w-15" />
            </div>
            <div className="flex flex-col items-end gap-2">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-3 w-15" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
