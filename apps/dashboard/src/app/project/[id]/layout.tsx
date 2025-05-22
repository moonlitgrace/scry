import { ProjectProvider } from '@/providers/project-provider';
import { ProjectService } from '@/services/project.service';

interface Props {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}

export default async function Layout({ params, children }: Props) {
  const { id } = await params;

  const service = new ProjectService(id);
  // initialize network call but doesn't wait
  const metricsPromise = service.getMetrics();
  const latestErrorPromise = service.getLatestError();

  return (
    <ProjectProvider
      metricsPromise={metricsPromise}
      latestErrorPromise={latestErrorPromise}
    >
      {children}
    </ProjectProvider>
  );
}
