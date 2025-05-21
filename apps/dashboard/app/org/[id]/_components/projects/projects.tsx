import { Suspense } from 'react';
import ProjectListSkeleton from './project-list/project-list-skeleton';
import ProjectList from './project-list/project-list';

export interface Props {
  id: string;
  query: string;
  sort: 'recent' | 'name';
}

export default async function Projects({ id, query, sort }: Props) {
  return (
    <div className="flex flex-col gap-2 lg:col-span-2">
      <h5 className="text-sm font-medium">Projects</h5>
      <div className="grid flex-1 gap-5 sm:grid-cols-2">
        <Suspense key={query + sort} fallback={<ProjectListSkeleton />}>
          <ProjectList id={id} query={query} sort={sort} />
        </Suspense>
      </div>
    </div>
  );
}
