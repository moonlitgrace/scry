import { Button } from "@repo/ui/components/ui/button";
import { Ellipsis } from "lucide-react";
import Link from "next/link";

export default function OrgProjects() {
  return (
    <div className="flex flex-col gap-2 col-span-2">
      <h5 className="text-sm font-medium">Projects</h5>
      <div className="grid grid-cols-2 gap-5">
        {projects.map((project) => (
          <div key={project.id} className="border bg-card/50 hover:bg-card transition-all p-4 relative flex flex-col gap-4">
            <Link href={`/project/${project.id}`} className="absolute z-1 inset-0" />
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col">
                <span className="font-bold">{project.name}</span>
                <span className="text-xs text-muted-foreground">{new URL(project.domain).hostname}</span>
              </div>
              <Button variant={'ghost'} size={'icon-sm'} className="relative z-2">
                <Ellipsis />
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-2 text-sm">
              <div>
                <div className="font-medium">{project.stats.lastError}</div>
                <div className="text-xs text-muted-foreground">Last Error</div>
              </div>
              <div>
                <div className="font-medium">{project.stats.errors}</div>
                <div className="text-xs text-muted-foreground">Errors</div>
              </div>
              <div>
                <div className="font-medium">{project.stats.trend === "UP" ? "↑ More" : project.stats.trend === "DOWN" ? "↓ Less" : "→ Stable"}</div>
                <div className="text-xs text-muted-foreground">vs yesterday</div>
              </div>
              <div>
                <div className="font-medium">{project.stats.env}</div>
                <div className="text-xs text-muted-foreground">Env</div>
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
    stats: {
      errors: 23,
      lastError: '15m ago',
      env: 'PROD',
      trend: 'STABLE'
    }
  }
]
