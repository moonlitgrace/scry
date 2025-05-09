import { Button } from '@repo/ui/components/ui/button';
import Link from 'next/link';

export default function CTASection() {
  return (
    <div className="mt-5 flex flex-col items-center gap-2 md:mt-0">
      <Button size="lg" asChild>
        <Link href='/sign-up'>Sign up Free</Link>
      </Button>
      <span className="text-muted-foreground text-xs">No Credit Card required</span>
    </div>
  );
}
