import { Badge } from '@repo/ui/components/ui/badge';
import { Button } from '@repo/ui/components/ui/button';
import { Ellipsis, GitBranch } from 'lucide-react';
import Link from 'next/link';
import projectsData from '@/data/mock/projects.json';

export default function OrgProjects() {
  return (
    <div className="col-span-2 flex flex-col gap-2">
      <h5 className="text-sm font-medium">Projects</h5>
      <div className="grid grid-cols-2 gap-5">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-card/50 hover:bg-card relative flex flex-col gap-4 border p-4 transition-[background]"
          >
            <Link href={`/project/${project.id}`} className="absolute inset-0 z-1" />
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col">
                <span className="font-bold">{project.name}</span>
                <span className="text-muted-foreground text-xs">
                  {new URL(project.domain).host}
                </span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Badge variant={project.status === 'Active' ? 'default' : 'destructive'}>
                  {project.status}
                </Badge>
                <Button
                  variant={'ghost'}
                  size={'icon-sm'}
                  className="relative z-2"
                  disabled
                >
                  <Ellipsis />
                </Button>
              </div>
            </div>
            <div className="text-muted-foreground flex flex-col gap-1 text-xs font-medium">
              <span className="line-clamp-1">{project.latestError.errorMsg}</span>
              <div className="inline-flex items-center gap-2">
                <span>{project.latestError.timestamp}</span>
                <span>on</span>
                <GitBranch className="size-4" />
                <span className="text-foreground">{project.latestError.env}</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="flex flex-col items-start gap-1">
                <div className="font-medium">{project.stats.errors}</div>
                <div className="text-muted-foreground text-xs">Errors</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="font-medium">{project.stats.lastError}</div>
                <div className="text-muted-foreground text-xs">Last Error</div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="font-medium">
                  {project.stats.errorTrend === 'UP'
                    ? '↑ More'
                    : project.stats.errorTrend === 'DOWN'
                      ? '↓ Less'
                      : '→ Stable'}
                </div>
                <div className="text-muted-foreground text-xs">vs yesterday</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
