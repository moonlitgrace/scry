import { Skeleton } from '@repo/design-system/components/ui/skeleton';

export default function ErrorListSkeleton() {
  return [...Array(5)].map((_, idx) => (
    <div key={idx} className="bg-card grid items-center gap-3 p-4.5 sm:grid-cols-6">
      <Skeleton className="col-span-full h-5 w-100 sm:col-span-3" />
      <Skeleton className="h-5 w-30" />
      <Skeleton className="h-5 w-25" />
      <Skeleton className="ml-auto h-5 w-25" />
    </div>
  ));
}
