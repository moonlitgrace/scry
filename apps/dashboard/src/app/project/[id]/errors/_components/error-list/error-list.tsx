import { formatTimeSince } from '@/lib/datetime';
import { type ProjectErrorsFilters, ProjectService } from '@/services/project.service';
import { Badge } from '@repo/design-system/components/ui/badge';
import { Button } from '@repo/design-system/components/ui/button';
import { Ellipsis, SpellCheck2 } from 'lucide-react';
import Link from 'next/link';

interface Props extends ProjectErrorsFilters {
  id: string;
}

export default async function ErrorList({ id, query, env, status }: Props) {
  const service = new ProjectService(id);
  const errors = await service.getErrors({ query, env, status });

  return errors.map((error) => (
    <div
      key={error.id}
      className="bg-card hover:bg-accent/40 relative grid items-center gap-3 p-3 transition-colors sm:grid-cols-6"
    >
      <Link
        href={`/project/${error.project.id}/err/${error.id}`}
        className="absolute inset-0 z-1"
      />
      <div className="col-span-full inline-flex items-center gap-2 sm:col-span-3">
        <SpellCheck2 className="text-muted-foreground size-5 shrink-0" />
        <code className="line-clamp-2 text-sm break-all">{error.errorMsg}</code>
      </div>
      <div className="inline-flex items-center gap-2">
        <span className="text-muted-foreground text-sm sm:hidden md:flex">Status:</span>
        <Badge variant={'outline'} className="capitalize">
          {error.status}
        </Badge>
      </div>
      <Badge
        variant={error.env === 'production' ? 'destructive' : 'default'}
        className="capitalize"
      >
        {error.env}
      </Badge>
      <div className="flex items-center justify-between gap-2 sm:justify-normal">
        <span className="text-muted-foreground text-sm sm:ml-auto">
          {formatTimeSince(error.timestamp)}
        </span>
        <Button variant={'ghost'} size={'icon-sm'} disabled>
          <Ellipsis />
        </Button>
      </div>
    </div>
  ));
}
