import { getProjects } from '@/dal/projects';
import ProjectCard from './ProjectCard';

interface Props {
  query: string;
  sort: 'recent' | 'name';
}

export default async function OrgProjects({ query, sort }: Props) {
  const projects = await getProjects(query, sort);

  return (
    <div className="col-span-2 flex flex-col gap-2">
      <h5 className="text-sm font-medium">Projects</h5>
      <div className="grid grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
