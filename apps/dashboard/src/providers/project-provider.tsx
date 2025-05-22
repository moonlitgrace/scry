'use client';

import { ProjectContext, ProjectContextValue } from '@/context/project-context';

export function ProjectProvider({
  children,
  metricsPromise,
  latestErrorPromise,
}: ProjectContextValue & {
  children: React.ReactNode;
}) {
  return (
    <ProjectContext.Provider value={{ metricsPromise, latestErrorPromise }}>
      {children}
    </ProjectContext.Provider>
  );
}
