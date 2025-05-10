import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import { ScrollArea } from "@repo/ui/components/ui/scroll-area";
import { Ellipsis } from "lucide-react";
import Link from "next/link";

export default function OrgRecentErrors() {
  return (
    <div className="flex flex-col gap-2">
      <h5 className="text-sm font-medium">Recent Errors</h5>
      <ScrollArea className="border h-125">
        {recentErrors.map((error) => (
          <div key={error.id} className="relative flex items-center gap-2 p-4 justify-between bg-card/50 hover:bg-card border-b">
            <Link href={`/project/${error.project.id}/err/${error.id}`} className="absolute z-1 inset-0" />
            <div className="flex flex-col gap-1">
              <div className="inline-flex items-center gap-2">
                <span className="text-sm font-medium">{error.project.name}</span>
                <span className="text-xs text-muted-foreground line-clamp-1 break-all">{error.errorMsg}</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Badge variant={'default'}>{error.environment}</Badge>
                <Badge variant={'outline'}>{error.status}</Badge>
                <span className="text-xs text-muted-foreground">{error.timestamp}</span>
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

const recentErrors = [
  {
    id: 'qxtmkyrj',
    project: {
      id: 'bhwvpfgs',
      name: 'Quibble'
    },
    errorMsg: 'TypeError: undefined is not a function',
    environment: 'PROD',
    status: 'Resolved',
    timestamp: '15m ago'
  },
  {
    id: 'kymvrdqn',
    project: {
      id: 'djpwqztx',
      name: 'Scry-web'
    },
    errorMsg: 'NetworkError: Failed fetch',
    environment: 'DEV',
    status: 'Pending',
    timestamp: '1h ago'
  }
]
