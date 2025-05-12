import { Suspense } from 'react';
import OrgControls from './_components/OrgControls';
import OrgProjects from './_components/OrgProjects';
import OrgRecentErrors from './_components/OrgRecentErrors';
import OrgProjectsSkeleton from './_components/OrgProjects/OrgProjectsSkeleton';

export default async function Page(props: { searchParams: Promise<{ q?: string }> }) {
  const searchParams = await props.searchParams;
  const query = searchParams.q ?? '';

  return (
    <>
      <OrgControls />
      <section className="grid grid-cols-3 gap-5">
        <OrgRecentErrors />
        <Suspense key={query} fallback={<OrgProjectsSkeleton />}>
          <OrgProjects query={query} />
        </Suspense>
      </section>
    </>
  );
}
