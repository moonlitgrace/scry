import { Suspense } from 'react';
import ProjectCardList from './project-card-list';
import ProjectCardListSkeleton from './project-card-list-skeleton';

export interface Props {
  id: string;
  query: string;
  sort: 'recent' | 'name';
}

export default async function OrgProjects({ id, query, sort }: Props) {
  return (
    <div className="flex flex-col gap-2 lg:col-span-2">
      <h5 className="text-sm font-medium">Projects</h5>
      <div className="grid flex-1 gap-5 sm:grid-cols-2">
        <Suspense key={query + sort} fallback={<ProjectCardListSkeleton />}>
          <ProjectCardList id={id} query={query} sort={sort} />
        </Suspense>
      </div>
    </div>
  );
}
