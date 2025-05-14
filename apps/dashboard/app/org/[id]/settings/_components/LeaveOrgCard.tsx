import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/design-system/components/ui/card';
import { Button } from '@repo/design-system/components/ui/button';
import { cn } from '@repo/design-system/lib/utils';

export default function LeaveOrgCard() {
  const disabled = true;

  return (
    <Card>
      <CardHeader className={cn(disabled && 'pointer-events-none opacity-50')}>
        <CardTitle>Leave Org</CardTitle>
        <CardDescription>
          Revoke your access to the Org. Any resources you&apos;ve added to the Org will
          remain.
        </CardDescription>
      </CardHeader>
      <CardFooter className="justify-between border-t">
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground text-xs">Owners count: 1</span>
          <span className="text-muted-foreground text-xs">
            To leave this Org, ensure at least one more Member has the Owner role.
          </span>
        </div>
        <Button variant={'outline'} disabled={disabled}>
          Leave
        </Button>
      </CardFooter>
    </Card>
  );
}
