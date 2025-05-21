import { ProjectService } from '@/services/project.service';
import { Badge } from '@repo/design-system/components/ui/badge';
import { AlertTriangle, Bug, RailSymbol, ShieldUser } from 'lucide-react';

const metricsIcons = {
  errors: Bug,
  users_affected: ShieldUser,
  errors_tracked: RailSymbol,
  errors_unhandled: AlertTriangle,
};

export default async function Metrics({ id }: { id: string }) {
  const service = new ProjectService(id);
  const metrics = await service.getMetrics();

  return Object.entries(metrics).map(
    ([key, { title, subTitle, value, isCritical }], idx) => {
      const Icon = metricsIcons[key as keyof typeof metricsIcons];
      return (
        <div key={idx} className="bg-card flex items-center gap-4 rounded-lg border p-4">
          <div className="bg-muted rounded-lg border p-2">
            <Icon className="text-muted-foreground size-8 stroke-1" />
          </div>
          <div className="flex w-full flex-col">
            <div className="text-muted-foreground text-sm">
              {title} {subTitle && <span className="opacity-75">{subTitle}</span>}
            </div>
            <div className="inline-flex items-center justify-between">
              <div className="text-foreground text-2xl font-bold">{value}+</div>
              {isCritical && <Badge variant={'destructive'}>Critical</Badge>}
            </div>
          </div>
        </div>
      );
    },
  );
}
