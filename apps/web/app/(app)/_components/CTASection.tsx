import { Button } from '@repo/ui/components/ui/button';

export default function CTASection() {
  return (
    <div className="mt-5 flex flex-col items-center gap-2 md:mt-0">
      <Button size="lg">Sign up Free</Button>
      <span className="text-muted-foreground text-xs">No Credit Card required</span>
    </div>
  );
}
