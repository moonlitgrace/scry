import Header from "@/components/shared/Header"
import { Button } from "@repo/ui/components/ui/button"
import Link from "next/link"

export default function OrgHeader({ id }: { id: string }) {
  return (
    <Header>
      <Button variant={'ghost'} size={'sm'} className="bg-muted border-b border-muted-foreground" asChild>
        <Link href={`/org/${id}`}>Overview</Link>
      </Button>
      <Button variant={'ghost'} size={'sm'} asChild className="pointer-events-none opacity-50">
        <Link href={`/org/${id}/activity`}>Activity</Link>
      </Button>
      <Button variant={'ghost'} size={'sm'} asChild>
        <Link href={`/org/${id}/settings`}>Settings</Link>
      </Button>
    </Header>
  )
}

