import { RefreshCcw } from 'lucide-react';
import LogsControls from './_components/logs-controls';
import { Suspense } from 'react';
import LogsList from './_components/logs-list';

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{
    q?: string;
    env?: string;
    status?: string;
  }>;
}

export default async function Page({ params, searchParams }: Props) {
  const { id } = await params;
  const { q: query = '', env, status } = await searchParams;

  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold">Logs</h2>
        <div className="text-muted-foreground inline-flex items-center gap-2">
          <RefreshCcw className="size-4" />
          <span className="text-sm">Continously generated from SDK requests</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <LogsControls />
        <Suspense key={query + env + status}>
          <LogsList id={id} query={query} env={env} status={status} />
        </Suspense>
      </div>
    </>
  );
}
