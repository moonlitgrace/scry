'use client';

import { ProjectService } from '@/services/project.service';
import { createContext, useContext } from 'react';

interface ProjectContextValue {
  metricsPromise: ReturnType<ProjectService['getMetrics']>;
}

export const ProjectContext = createContext<ProjectContextValue | null>(null);

export const ProjectContextProvider = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const service = new ProjectService(id);
  const metricsPromise = service.getMetrics();

  return (
    <ProjectContext.Provider value={{ metricsPromise }}>
      {children}
    </ProjectContext.Provider>
  );
};

export function useProjectContext() {
  const service = useContext(ProjectContext);
  if (!service) throw new Error('useProjectService must be used within its Provider');
  return service;
}
