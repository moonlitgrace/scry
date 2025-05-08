import { Button } from "@repo/ui/components/ui/button";

export default function CTASection() {
  return (
    <div className="flex flex-col items-center gap-2 mt-5 md:mt-0">
      <Button size='lg' variant='outline'>Sign up Free</Button>
      <span className="text-muted-foreground text-xs">No Credit Card required</span>
    </div>
  )
}

