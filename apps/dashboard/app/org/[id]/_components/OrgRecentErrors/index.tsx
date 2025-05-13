import { ScrollArea } from '@repo/design-system/components/ui/scroll-area';
import { Suspense } from 'react';
import RecentErrorList from './RecentErrorList';
import RecentErrorListSkeleton from './RecentErrorListSkeleton';

export default async function OrgRecentErrors() {
  return (
    <div className="flex flex-col gap-2">
      <h5 className="text-sm font-medium">Recent Errors</h5>
      <ScrollArea className="h-125 border">
        <Suspense fallback={<RecentErrorListSkeleton />}>
          <RecentErrorList />
        </Suspense>
      </ScrollArea>
    </div>
  );
}
