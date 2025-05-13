import { IOrgProject } from '@/app/org/[id]/_types/org-project';
import rawProjectsData from '@/data/mock/projects.json';

export async function getProjects(
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
