import { RefreshCcw } from 'lucide-react';
import ErrorControls from './_components/error-controls';
import { Suspense } from 'react';
import ErrorList from './_components/error-list';
import ErrorListSkeleton from './_components/error-list-skeleton';

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
        <h2 className="text-3xl font-bold">Errors</h2>
        <div className="text-muted-foreground inline-flex items-center gap-2">
          <RefreshCcw className="size-4" />
          <span className="text-sm">Continously generated from SDK requests</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <ErrorControls />
        <div className="divide-y rounded-lg border">
          <Suspense key={query + env + status} fallback={<ErrorListSkeleton />}>
            <ErrorList id={id} query={query} env={env} status={status} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
