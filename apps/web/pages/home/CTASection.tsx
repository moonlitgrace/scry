import HomeSectionLayout from "@/layouts/HomeSectionLayout";
import { withAngleBrackets } from "@/utils/with-angle-brackets";
import { Button } from "@repo/ui/components/ui/button";

export default function CTASection() {
  return (
    <HomeSectionLayout>
      <h3 className="font-bold text-4xl">Ready to DEBUG smarter?</h3>
      <h2 className="text-muted-foreground">{withAngleBrackets('join developers tracking errors with scry today')}</h2>
      <div className="flex flex-col items-center gap-2">
        <Button size='lg'>Sign up Free</Button>
        <span className="text-muted-foreground text-xs">No Credit Card required</span>
      </div>
    </HomeSectionLayout>
  )
}

