import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@repo/design-system/components/ui/alert';
import { Button } from '@repo/design-system/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/design-system/components/ui/card';
import { cn } from '@repo/design-system/lib/utils';
import { Info } from 'lucide-react';
import Link from 'next/link';

export default function DeleteOrgCard() {
  const disabled = true;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Delete Organization</CardTitle>
        <CardDescription>
          Permanently remove your organization and all of its contents from the Scry
          platform.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Alert>
          <Info className="size-5" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>You cannot delete your last Organization.</AlertDescription>
        </Alert>
      </CardContent>
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
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
