'use client';

import { ProjectMetrics } from '@/types/project';
import { createContext, useContext } from 'react';

interface ProjectContextValue {
  metricsPromise: Promise<ProjectMetrics>;
}

export const ProjectContext = createContext<ProjectContextValue | null>(null);

export const ProjectContextProvider = ({
  children,
  metricsPromise,
}: ProjectContextValue & {
  children: React.ReactNode;
}) => {
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
