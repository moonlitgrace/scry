'use client';

import { ProjectLatestError, ProjectMetrics } from '@/types/project';
import { createContext, useContext } from 'react';

interface ProjectContextValue {
  metricsPromise: Promise<ProjectMetrics>;
  latestErrorPromise: Promise<ProjectLatestError>;
}

export const ProjectContext = createContext<ProjectContextValue | null>(null);

export const ProjectContextProvider = ({
  children,
  metricsPromise,
  latestErrorPromise,
}: ProjectContextValue & {
  children: React.ReactNode;
}) => {
  return (
    <ProjectContext.Provider value={{ metricsPromise, latestErrorPromise }}>
      {children}
    </ProjectContext.Provider>
  );
};

export function useProjectContext() {
  const service = useContext(ProjectContext);
  if (!service) throw new Error('useProjectService must be used within its Provider');
  return service;
}
