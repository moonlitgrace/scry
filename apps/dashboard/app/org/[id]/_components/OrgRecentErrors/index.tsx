import { ScrollArea } from '@repo/design-system/components/ui/scroll-area';
import { Suspense } from 'react';
import RecentErrorList from './RecentErrorList';
import RecentErrorListSkeleton from './RecentErrorListSkeleton';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@repo/design-system/components/ui/collapsible';
import { ChevronRight } from 'lucide-react';

export default async function OrgRecentErrors() {
  return (
    <Collapsible defaultOpen className="flex flex-col items-start gap-2">
      <h5 className="hidden text-sm font-medium lg:inline-block">Recent Errors</h5>
      <CollapsibleTrigger className="inline-flex items-center gap-2 lg:hidden [&[data-state=open]>svg]:rotate-90">
        <ChevronRight className="text-muted-foreground size-4 transition-transform" />
        <h5 className="text-sm font-medium">Recent Errors</h5>
      </CollapsibleTrigger>
      <CollapsibleContent className="w-full">
        <ScrollArea className="max-h-125 border">
          <Suspense fallback={<RecentErrorListSkeleton />}>
            <RecentErrorList />
          </Suspense>
        </ScrollArea>
      </CollapsibleContent>
    </Collapsible>
  );
}
