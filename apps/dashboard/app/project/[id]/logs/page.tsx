import { RefreshCcw } from 'lucide-react';
import LogsControls from './_components/logs-controls';

export default function Page() {
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
      </div>
    </>
  );
}
