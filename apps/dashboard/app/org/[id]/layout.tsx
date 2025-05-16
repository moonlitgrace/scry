import OrgHeader from './_components/org-header';

interface Props {
  children: React.ReactNode;
}

export default async function Layout({ children }: Props) {
  return (
    <>
      <OrgHeader />
      <main className="mx-auto flex min-h-dvh max-w-350 flex-col gap-5 p-5">
        {children}
      </main>
    </>
  );
}
