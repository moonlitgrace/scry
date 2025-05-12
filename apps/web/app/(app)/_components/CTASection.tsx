import { buttonVariants } from '@repo/design-system/components/ui/button';
import Link from 'next/link';

export default function CTASection() {
  return (
    <div className="mt-5 flex flex-col items-center gap-2 md:mt-0">
      <Link href="/sign-up" className={buttonVariants({ size: 'lg' })}>
        Sign up Free
      </Link>
      <span className="text-muted-foreground text-xs">No Credit Card required</span>
    </div>
  );
}
