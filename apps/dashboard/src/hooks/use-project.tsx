import { ProjectContext } from '@/context/project-context';
import { useContext } from 'react';

export function useProject() {
  const service = useContext(ProjectContext);
  if (!service) throw new Error('useProject must be used within ProjectProvider');
  return service;
}
