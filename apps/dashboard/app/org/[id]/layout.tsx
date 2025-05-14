import OrgHeader from './_components/OrgHeader';

interface Props {
  children: React.ReactNode;
}

export default async function Layout({ children }: Props) {
  return (
    <>
      <OrgHeader />
      <main className="mx-auto flex max-w-350 flex-col gap-5 p-5">{children}</main>
    </>
  );
}
