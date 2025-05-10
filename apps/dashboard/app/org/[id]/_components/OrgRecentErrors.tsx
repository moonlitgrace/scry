import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import { ScrollArea } from "@repo/ui/components/ui/scroll-area";
import { Ellipsis } from "lucide-react";
import Link from "next/link";

export default function OrgRecentErrors() {
  return (
    <div className="flex flex-col gap-2">
      <h5 className="text-sm font-medium">Recent Errors</h5>
      <ScrollArea className="border h-125 bg-card/50">
        {Array(10).fill(0).map((_, idx) => (
          <div key={idx} className="relative flex items-center gap-2 p-4 justify-between hover:bg-card border-b">
            <Link href={`/project/czopdjniulxiuyttjunv`} className="absolute z-1 inset-0" />
            <div className="flex flex-col gap-1">
              <div className="inline-flex items-center gap-2">
                <span className="text-sm font-medium">Quibble</span>
                <span className="text-xs text-muted-foreground line-clamp-1">TypeError: undefined is not a function</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Badge variant={'default'}>PROD</Badge>
                <Badge variant={'outline'}>Resolved</Badge>
                <span className="text-xs text-muted-foreground">15m ago</span>
              </div>
            </div>
            <Button variant={'ghost'} size={'icon-sm'} className="relative z-2">
              <Ellipsis />
            </Button>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}

