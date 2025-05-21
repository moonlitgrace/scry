import Metrics from './metrics';

export default function KeyMetrics({ id }: { id: string }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <Metrics id={id} />
    </div>
  );
}
