import rawProjectsData from '@/data/mock/projects.json';
import ProjectCard from './ProjectCard';
import { IOrgProject } from '../../_types/org-project';

async function getProjects(
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

interface Props {
  query: string;
  sort: 'recent' | 'name';
}

export default async function OrgProjects({ query, sort }: Props) {
  const projectsData = await getProjects(query, sort);

  return (
    <div className="col-span-2 flex flex-col gap-2">
      <h5 className="text-sm font-medium">Projects</h5>
      <div className="grid grid-cols-2 gap-5">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
