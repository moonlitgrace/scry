import { Avatar, AvatarFallback } from '@repo/design-system/components/ui/avatar';
import { Badge } from '@repo/design-system/components/ui/badge';
import { Button } from '@repo/design-system/components/ui/button';
import { Ellipsis } from 'lucide-react';

export default function MemberList() {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-medium">moonlitgrace</span>
          <span className="text-muted-foreground line-clamp-1 text-xs break-all">
            moonlitgrace.gaia@gmail.com
          </span>
        </div>
      </div>
      <div className="inline-flex items-center gap-2">
        <Badge>Owner</Badge>
        <Button size={'icon-sm'} variant={'ghost'} disabled>
          <Ellipsis />
        </Button>
      </div>
    </div>
  );
}
