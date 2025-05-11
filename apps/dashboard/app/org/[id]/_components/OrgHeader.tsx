import Header from '@/components/shared/Header';
import { Button } from '@repo/ui/components/ui/button';
import Link from 'next/link';

export default function OrgHeader({ id }: { id: string }) {
  return (
    <Header id={id}>
      <Button variant={'ghost'} size={'sm'} className="bg-muted border">
        <Link href={`/org/${id}`}>Overview</Link>
      </Button>
      <Button variant={'ghost'} size={'sm'} disabled>
        <Link href={`/org/${id}/activity`}>Activity</Link>
      </Button>
      <Button variant={'ghost'} size={'sm'}>
        <Link href={`/org/${id}/settings`}>Settings</Link>
      </Button>
    </Header>
  );
}
