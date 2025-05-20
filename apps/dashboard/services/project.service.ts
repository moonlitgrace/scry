import recentErrors from '@/data/mock/recent_errors.json';
import { ProjectError } from '@/types/project';
import { waitFor } from '@/utils/promise';

export interface ProjectErrorsFilters {
  query?: string;
  env?: string;
  status?: string;
}

export class ProjectService {
  constructor(private readonly projectId: string) {}

  async getErrors(filters: ProjectErrorsFilters = {}): Promise<ProjectError[]> {
    // simulate API request
    await waitFor(1000);

    const { query = '', env = 'all', status = 'resolved&pending' } = filters;

    const normalizedQuery = query.toLowerCase();
    const statuses = status.split('&');

    // TODO: call external API
    return recentErrors
      .filter((error) => error.project.id === this.projectId)
      .filter((error) => error.errorMsg.toLowerCase().includes(normalizedQuery))
      .filter((error) => (env === 'all' ? error : error.env === env))
      .filter((error) => statuses.includes(error.status));
  }
}
