import { Input } from "@repo/ui/components/ui/input"
import OrgHeader from "./_components/OrgHeader"
import { ChevronDown, LayoutGrid, List, Search } from "lucide-react"
import { Button } from "@repo/ui/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@repo/ui/components/ui/tabs"

export default async function Org({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <>
      <OrgHeader id={id} />
      <main className="p-5">
        <div className="inline-flex items-center gap-2 w-full">
          <div className="w-full relative flex items-center">
            <Search className="absolute size-5 pointer-events-none left-2.5 text-muted-foreground" />
            <Input placeholder="Search projects..." className="pl-10" />
          </div>
          <Button variant={'outline'}>
            Sort by
            <ChevronDown className="size-5" />
          </Button>
          <Tabs defaultValue='grid'>
            <TabsList>
              <TabsTrigger value="grid"><LayoutGrid /></TabsTrigger>
              <TabsTrigger value="list"><List /></TabsTrigger>
            </TabsList>
          </Tabs>
          <Button>
            Add new...
            <ChevronDown className="size-5" />
          </Button>
        </div>
      </main>
    </>
  )
}

