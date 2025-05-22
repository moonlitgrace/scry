import { ProjectLatestError, ProjectMetrics } from '@/types/project';
import { createContext } from 'react';

export interface ProjectContextValue {
  metricsPromise: Promise<ProjectMetrics>;
  latestErrorPromise: Promise<ProjectLatestError>;
}

export const ProjectContext = createContext<ProjectContextValue | null>(null);
