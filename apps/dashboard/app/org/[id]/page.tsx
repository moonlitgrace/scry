import { Suspense } from 'react';
import OrgControls from './_components/OrgControls';
import OrgProjects from './_components/OrgProjects';
import OrgRecentErrors from './_components/OrgRecentErrors';
import OrgProjectsSkeleton from './_components/OrgProjects/OrgProjectsSkeleton';

interface Props {
  searchParams: Promise<{
    q?: string;
    sort?: 'recent' | 'name';
  }>;
}

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const query = searchParams.q ?? '';
  const sort = searchParams.sort ?? 'recent';

  return (
    <>
      <OrgControls />
      <section className="grid grid-cols-3 gap-5">
        <OrgRecentErrors />
        <Suspense key={query + sort} fallback={<OrgProjectsSkeleton />}>
          <OrgProjects query={query} sort={sort} />
        </Suspense>
      </section>
    </>
  );
}
