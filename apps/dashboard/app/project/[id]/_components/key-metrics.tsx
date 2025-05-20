import { Badge } from '@repo/design-system/components/ui/badge';
import { Bug, RailSymbol, ShieldUser, TriangleAlert } from 'lucide-react';

export default function KeyMetrics() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map(({ Icon, title, subTitle, value, isCritical }, idx) => (
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
              {isCritical && <Badge variant={'destructive'}>Critical!</Badge>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const metrics = [
  {
    Icon: Bug,
    title: 'Errors',
    subTitle: '(24h)',
    value: 14,
    isCritical: true,
  },
  {
    Icon: RailSymbol,
    title: 'Errors Tracked',
    value: 32,
    isCritical: false,
  },
  {
    Icon: ShieldUser,
    title: 'Users Affected',
    subTitle: '(24h)',
    value: 7,
    isCritical: true,
  },
  {
    Icon: TriangleAlert,
    title: 'Unhandled Errors',
    value: 3,
    isCritical: false,
  },
];
