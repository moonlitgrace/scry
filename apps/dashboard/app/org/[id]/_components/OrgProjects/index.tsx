import rawProjectsData from '@/data/mock/projects.json';
import ProjectCard from './ProjectCard';
import { IOrgProject } from '../../_types/org-project';

async function getProjects(query: string): Promise<IOrgProject[]> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(
        rawProjectsData.filter((project) =>
          project.name.toLowerCase().includes(query.toLowerCase()),
        ),
      );
    }, 1000),
  );
}

export default async function OrgProjects({ query }: { query: string }) {
  const projectsData = await getProjects(query);

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
