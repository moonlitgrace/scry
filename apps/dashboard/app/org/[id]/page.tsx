import Controls from './_components/controls/controls';
import Projects from './_components/projects/projects';
import RecentErrors from './_components/recent-errors/recent-errors';

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{
    q?: string;
    sort?: 'recent' | 'name';
  }>;
}

export default async function Page(props: Props) {
  const { id } = await props.params;
  const searchParams = await props.searchParams;
  const query = searchParams.q ?? '';
  const sort = searchParams.sort ?? 'recent';

  return (
    <>
      <Controls />
      <section className="grid gap-5 lg:flex-1 lg:grid-cols-3">
        <div className="flex-1">
          <RecentErrors id={id} />
        </div>
        <Projects id={id} query={query} sort={sort} />
      </section>
    </>
  );
}
