import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/design-system/components/ui/card';
import { Button } from '@repo/design-system/components/ui/button';
import { cn } from '@repo/design-system/lib/utils';
import Link from 'next/link';

export default function DeleteOrgCard() {
  const disabled = true;

  return (
    <Card>
      <CardHeader className={cn(disabled && 'pointer-events-none opacity-50')}>
        <CardTitle>Delete Org</CardTitle>
        <CardDescription>
          Permanently remove your org and all of its contents from the Scry platform.
        </CardDescription>
      </CardHeader>
      <CardFooter className="justify-between border-t">
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground text-xs">
            This actions is not reversible – please continue with caution.
          </span>
          <span className="text-muted-foreground text-xs">
            To delete your account, visit{' '}
            <Link href={'/account'} className="text-primary font-medium hover:underline">
              Account Settings.
            </Link>
          </span>
        </div>
        <Button variant={'destructive'} disabled={disabled}>
          Delete Org
        </Button>
      </CardFooter>
    </Card>
  );
}
