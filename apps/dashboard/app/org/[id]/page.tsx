import { Input } from "@repo/ui/components/ui/input"
import { ChevronDown, LayoutGrid, List, Search } from "lucide-react"
import { Button } from "@repo/ui/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@repo/ui/components/ui/tabs"

export default async function Org() {
  return (
    <>
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
    </>
  )
}

