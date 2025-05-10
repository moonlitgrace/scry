import OrgHeader from "./_components/OrgHeader"

export default async function Org({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <>
      <OrgHeader id={id} />
      <main className="p-5">Org ID: {id}</main>
    </>
  )
}

