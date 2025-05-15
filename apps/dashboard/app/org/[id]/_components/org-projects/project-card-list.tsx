import { Avatar, AvatarFallback } from '@repo/design-system/components/ui/avatar';
import { Badge } from '@repo/design-system/components/ui/badge';
import { Button } from '@repo/design-system/components/ui/button';
import { Ellipsis, GitBranch } from 'lucide-react';
import Link from 'next/link';
import { Props } from '.';
import { formatTimeSince } from '@/utils/datetime';
import { getInitials } from '@/utils/string';
import { getOrgProjects } from '@/services/org.service';

export default async function ProjectCardList({ query, sort }: Props) {
  const projects = await getOrgProjects(query, sort);

  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-card hover:bg-accent/40 relative flex h-45 flex-col justify-between rounded-lg border p-5 transition-[background]"
        >
          <Link href={`/project/${project.id}`} className="absolute inset-0 z-1" />
          <div className="flex items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2">
              <Avatar className="size-10 rounded-md">
                <AvatarFallback className="rounded-md">
                  {getInitials(project.name)}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{project.name}</span>
                <span className="text-muted-foreground line-clamp-1 text-sm break-all">
                  {new URL(project.domain).host}
                </span>
              </div>
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
          <div className="text-muted-foreground flex flex-col text-sm">
            <span className="line-clamp-1 font-mono text-xs font-medium">
              {project.latestError.errorMsg}
            </span>
            <div className="inline-flex items-center gap-2">
              <span>{formatTimeSince(project.latestError.timestamp)}</span>
              <span>on</span>
              <GitBranch className="size-4" />
              <span className="text-foreground text-xs font-medium">
                {project.latestError.env}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-sm">
            <div className="flex flex-col items-start">
              <div className="font-medium">{project.stats.errors}</div>
              <div className="text-muted-foreground">Errors</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium">
                {formatTimeSince(project.stats.lastError)}
              </div>
              <div className="text-muted-foreground">Last Error</div>
            </div>
            <div className="flex flex-col items-end">
              <div className="font-medium">
                {project.stats.errorTrend === 'UP'
                  ? '↑ More'
                  : project.stats.errorTrend === 'DOWN'
                    ? '↓ Less'
                    : '→ Stable'}
              </div>
              <div className="text-muted-foreground">vs yesterday</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
