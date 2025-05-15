import { Skeleton } from '@repo/design-system/components/ui/skeleton';

export default function RecentErrorListSkeleton() {
  return (
    <>
      {[...Array(8)].map((_, idx) => (
        <div
          key={idx}
          className="bg-card flex h-20 items-center justify-between gap-5 border-b p-4"
        >
          <div className="flex h-full flex-1 flex-col justify-between">
            <Skeleton className="h-5 w-full" />
            <div className="inline-flex items-center gap-2">
              <Skeleton className="h-5 w-12" />
              <Skeleton className="h-5 w-18" />
              <Skeleton className="h-5 w-12" />
            </div>
          </div>
          <Skeleton className="size-5" />
        </div>
      ))}
    </>
  );
}
