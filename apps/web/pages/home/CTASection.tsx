import HomeSectionLayout from "@/layouts/HomeSectionLayout";
import { withAngleBrackets } from "@/utils/with-angle-brackets";
import { Button } from "@repo/ui/components/ui/button";

export default function CTASection() {
  return (
    <HomeSectionLayout>
      <h3 className="font-bold text-2xl md:text-4xl text-center">Ready to DEBUG smarter?</h3>
      <h2 className="text-muted-foreground text-sm md:text-base text-center">{withAngleBrackets('join developers tracking errors with scry today')}</h2>
      <div className="flex flex-col items-center gap-2 mt-5 md:mt-0">
        <Button size='lg' variant='outline'>Sign up Free</Button>
        <span className="text-muted-foreground text-xs">No Credit Card required</span>
      </div>
    </HomeSectionLayout>
  )
}

