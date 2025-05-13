import OrgControls from './_components/OrgControls';
import OrgProjects from './_components/OrgProjects';
import OrgRecentErrors from './_components/OrgRecentErrors';

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
      <section className="grid gap-5 lg:grid-cols-3">
        <OrgRecentErrors />
        <OrgProjects query={query} sort={sort} />
      </section>
    </>
  );
}
