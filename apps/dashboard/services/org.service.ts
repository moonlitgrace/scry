import { IOrgRecentError } from '@/app/org/[id]/_types/org-recent-errors';
import { IOrgProject } from '@/app/org/[id]/_types/org-project';
import rawProjectsData from '@/data/mock/projects.json';
import recentErrorsData from '@/data/mock/recent_errors.json';

export function getOrgRecentErrors(): Promise<IOrgRecentError[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(recentErrorsData);
    }, 1000);
  });
}

export async function getOrgProjects(
  query: string,
  sort: 'recent' | 'name',
): Promise<IOrgProject[]> {
  return new Promise((resolve) =>
    setTimeout(() => {
      let resData: IOrgProject[] = [];
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

      resolve(resData);
    }, 1000),
  );
}
