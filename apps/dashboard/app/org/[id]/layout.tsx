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
      <main className="p-5 flex flex-col gap-5 max-w-350 mx-auto">
        {children}
      </main>
    </>
  )
}

