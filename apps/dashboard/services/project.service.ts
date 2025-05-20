import recentlogs from '@/data/mock/recent_errors.json';
import { ProjectLog } from '@/types/project';

export interface ProjectLogsFilters {
  query?: string;
  env?: string;
  status?: string;
}

export interface ProjectLogsOptions extends ProjectLogsFilters {
  id: string;
}

export class ProjectLogService {
  constructor(private readonly projectId: string) {}

  async getLogs(filters: ProjectLogsFilters = {}): Promise<ProjectLog[]> {
    const { query = '', env = 'all', status = 'resolved&pending' } = filters;

    const normalizedQuery = query.toLowerCase();
    const statuses = status.split('&');

    return recentlogs
      .filter((log) => log.project.id === this.projectId)
      .filter((log) => log.errorMsg.toLowerCase().includes(normalizedQuery))
      .filter((log) => (env === 'all' ? log : log.env === env))
      .filter((log) => statuses.includes(log.status));
  }
}
