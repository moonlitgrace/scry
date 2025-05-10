import OrgHeader from "./_components/OrgHeader";

interface Props {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}

export default async function OrgLayout({ children, params }: Props) {
  const { id } = await params;

  return (
    <>
      <OrgHeader id={id} />
      <main className="p-5">
        {children}
      </main>
    </>
  )
}

