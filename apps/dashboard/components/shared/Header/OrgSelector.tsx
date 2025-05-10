import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function OrgSelector() {
  return (
    <div className='inline-flex items-center gap-2'>
      <Link href={'/'} className='text-sm font-medium inline-flex items-center gap-2'>
        moonlitgrace's Org
        <Badge variant="secondary">Free</Badge>
      </Link>
      <Button size='icon-sm' variant='ghost' className='size-[calc(var(--spacing)*5.5)]' disabled>
        <ChevronDown />
      </Button>
    </div>
  )
}

