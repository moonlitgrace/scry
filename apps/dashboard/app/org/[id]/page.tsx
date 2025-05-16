import OrgControls from './_components/org-controls';
import OrgProjects from './_components/org-projects';
import OrgRecentErrors from './_components/org-recent-errors';

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
      <section className="grid gap-5 lg:flex-1 lg:grid-cols-3">
        <div className="flex-1">
          <OrgRecentErrors />
        </div>
        <OrgProjects query={query} sort={sort} />
      </section>
    </>
  );
}
