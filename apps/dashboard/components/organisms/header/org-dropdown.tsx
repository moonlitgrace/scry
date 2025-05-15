'use client';

import { Badge } from '@repo/design-system/components/ui/badge';
import { Button } from '@repo/design-system/components/ui/button';
import { ChevronsUpDown } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function OrgDropdown() {
  const params = useParams<{ id: string }>();

  return (
    <div className="inline-flex items-center gap-2">
      <Link
        href={`/org/${params.id}`}
        className="inline-flex items-center gap-2 text-sm font-medium"
      >
        moonlitgrace&apos;s Org
        <Badge variant="secondary" className="hidden sm:flex">
          Free
        </Badge>
      </Link>
      <Button size="icon-sm" variant="ghost" className="size-5.5" disabled>
        <ChevronsUpDown />
      </Button>
    </div>
  );
}
