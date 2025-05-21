import { ProjectContextProvider } from '@/context/project-context';
import { ProjectService } from '@/services/project.service';

interface Props {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}

export default async function Layout({ params, children }: Props) {
  const { id } = await params;

  const service = new ProjectService(id);
  const metricsPromise = service.getMetrics();

  return (
    <ProjectContextProvider metricsPromise={metricsPromise}>
      {children}
    </ProjectContextProvider>
  );
}
