import rawProjectsData from '@/data/mock/projects.json';
import recentErrorsData from '@/data/mock/recent_errors.json';
import { OrgProject, OrgRecentError } from '@/types/org';
import { waitFor } from '@/utils/promise';

interface OrgGetProjects {
  query: string;
  sort: 'recent' | 'name';
}

export class OrgService {
  constructor(private readonly orgId: string) {}

  async getProjects({ query, sort }: OrgGetProjects): Promise<OrgProject[]> {
    // simulate API request
    await waitFor(1000);

    let resData: OrgProject[] = [];
    const normalizedQuery = query.toLowerCase();

    const filteredData = rawProjectsData.filter((project) =>
      project.name.toLowerCase().includes(normalizedQuery),
    );

    if (sort === 'recent') {
      resData = filteredData.sort(
        (a, b) =>
          new Date(b.latestError.timestamp).getTime() -
          new Date(a.latestError.timestamp).getTime(),
      );
    } else if (sort === 'name') {
      resData = filteredData.sort((a, b) => a.name.localeCompare(b.name));
    }

    return resData;
  }

  async getRecentErrors(): Promise<OrgRecentError[]> {
    // simulate API request
    await waitFor(1000);

    return recentErrorsData;
  }
}
