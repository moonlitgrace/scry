import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import { Ellipsis, GitBranch } from "lucide-react";
import Link from "next/link";

export default function OrgProjects() {
  return (
    <div className="flex flex-col gap-2 col-span-2">
      <h5 className="text-sm font-medium">Projects</h5>
      <div className="grid grid-cols-2 gap-5">
        {projects.map((project) => (
          <div key={project.id} className="border bg-card/50 hover:bg-card transition-[background] p-4 relative flex flex-col gap-4">
            <Link href={`/project/${project.id}`} className="absolute z-1 inset-0" />
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col">
                <span className="font-bold">{project.name}</span>
                <span className="text-xs text-muted-foreground">{new URL(project.domain).host}</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Badge variant={project.status === 'Active' ? 'default' : 'destructive'}>{project.status}</Badge>
                <Button variant={'ghost'} size={'icon-sm'} className="relative z-2" disabled>
                  <Ellipsis />
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-xs font-medium text-muted-foreground">
              <span className="line-clamp-1">{project.latestError.errorMsg}</span>
              <div className="inline-flex items-center gap-2">
                <span>{project.latestError.timestamp}</span>
                <span>on</span>
                <GitBranch className="size-4" />
                <span className="text-foreground">{project.latestError.env}</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="flex flex-col gap-1 items-start">
                <div className="font-medium">{project.stats.errors}</div>
                <div className="text-xs text-muted-foreground">Errors</div>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <div className="font-medium">{project.stats.lastError}</div>
                <div className="text-xs text-muted-foreground">Last Error</div>
              </div>
              <div className="flex flex-col gap-1 items-end">
                <div className="font-medium">{project.stats.errorTrend === "UP" ? "↑ More" : project.stats.errorTrend === "DOWN" ? "↓ Less" : "→ Stable"}</div>
                <div className="text-xs text-muted-foreground">vs yesterday</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const projects = [
  {
    id: 'bhwvpfgs',
    name: 'Quibble',
    domain: 'https://quibble.moonlitgrace.space',
    status: 'Active',
    stats: {
      errors: 23,
      lastError: '15m ago',
      errorTrend: 'STABLE',
    },
    latestError: {
      errorMsg: 'TypeError: undefined is not a function',
      env: 'PROD',
      timestamp: '15m ago'
    }
  },
  {
    id: 'djpwqztx',
    name: 'Scry-web',
    domain: 'http://localhost:3000',
    status: 'Paused',
    stats: {
      errors: 18,
      lastError: '1h ago',
      errorTrend: 'DOWN',
    },
    latestError: {
      errorMsg: 'NetworkError: Failed fetch',
      env: 'DEV',
      timestamp: '1h ago'
    }
  },
]
