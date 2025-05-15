import { Button } from '@repo/design-system/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/design-system/components/ui/card';
import Link from 'next/link';

export default function LeaveOrgCard() {
  const disabled = true;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Leave Organization</CardTitle>
        <CardDescription>
          Revoke your access to the organization. Any resources you&apos;ve added to the
          organization will remain.
        </CardDescription>
      </CardHeader>
      <CardFooter className="justify-between border-t">
        <div className="text-muted-foreground flex flex-col text-sm">
          <span>
            To leave this organization, ensure at least one more Member has the Owner
            role.
          </span>
          <span>
            To add members, visit{' '}
            <Link
              href={'./settings/members'}
              className="text-primary font-medium hover:underline"
            >
              Members
            </Link>
          </span>
        </div>
        <Button variant={'outline'} disabled={disabled}>
          Leave
        </Button>
      </CardFooter>
    </Card>
  );
}
