import Link from 'next/link';
import NavActions from './NavActions';
import { Badge } from '@repo/ui/components/ui/badge';
import { Button } from '@repo/ui/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface Props {
  id: string;
}

export default function Header({ id }: Props) {
  return (
    <header className="bg-background/95 z-1 inline-flex w-full items-center justify-between px-5 pt-3 pl-14">
      <div className="inline-flex items-center gap-4">
        <span className="text-muted-foreground/50">/</span>
        <div className="inline-flex items-center gap-2">
          <Link
            href={`/org/${id}`}
            className="inline-flex items-center gap-2 text-sm font-medium"
          >
            moonlitgrace&apos;s Org
            <Badge variant="secondary">Free</Badge>
          </Link>
          <Button
            size="icon-sm"
            variant="ghost"
            className="size-[calc(var(--spacing)*5.5)]"
            disabled
          >
            <ChevronDown />
          </Button>
        </div>
      </div>
      <NavActions />
    </header>
  );
}
