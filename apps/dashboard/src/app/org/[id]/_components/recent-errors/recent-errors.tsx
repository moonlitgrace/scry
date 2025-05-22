import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@repo/design-system/components/ui/collapsible';
import { ScrollArea } from '@repo/design-system/components/ui/scroll-area';
import { ChevronRight } from 'lucide-react';
import { Suspense } from 'react';
import RecentErrorList from './recent-error-list/recent-error-list';
import RecentErrorListSkeleton from './recent-error-list/recent-error-list-skeleton';

export default async function RecentErrors({ id }: { id: string }) {
  return (
    <Collapsible defaultOpen className="sticky top-20 flex flex-col items-start gap-2">
      <h5 className="hidden text-sm font-medium lg:inline-block">Recent Errors</h5>
      <CollapsibleTrigger className="inline-flex items-center gap-2 lg:hidden [&_[data-state=open]>svg]:rotate-90">
        <ChevronRight className="text-muted-foreground size-4 transition-transform" />
        <h5 className="text-sm font-medium">Recent Errors</h5>
      </CollapsibleTrigger>
      <CollapsibleContent className="w-full">
        <ScrollArea className="h-full max-h-125 rounded-lg [&_[data-slot=scroll-area-viewport]]:max-h-125 [&_[data-slot=scroll-area-viewport]]:border">
          <Suspense fallback={<RecentErrorListSkeleton />}>
            <RecentErrorList id={id} />
          </Suspense>
        </ScrollArea>
      </CollapsibleContent>
    </Collapsible>
  );
}
