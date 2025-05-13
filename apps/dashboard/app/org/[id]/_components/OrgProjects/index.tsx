import { Suspense } from 'react';
import ProjectCardList from './ProjectCardList';
import ProjectCardListSkeleton from './ProjectCardListSkeleton';

export interface Props {
  query: string;
  sort: 'recent' | 'name';
}

export default async function OrgProjects({ query, sort }: Props) {
  return (
    <div className="col-span-2 flex flex-col gap-2">
      <h5 className="text-sm font-medium">Projects</h5>
      <div className="grid grid-cols-2 gap-5">
        <Suspense key={query + sort} fallback={<ProjectCardListSkeleton />}>
          <ProjectCardList query={query} sort={sort} />
        </Suspense>
      </div>
    </div>
  );
}
