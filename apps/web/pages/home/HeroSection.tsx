import GithubIcon from "@/components/icons/Github";
import HomeSectionLayout from "@/layouts/HomeSectionLayout";
import { withAngleBrackets } from "@/utils/with-angle-brackets";
import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return <>
    <div className="absolute inset-x-0 h-96 md:h-[calc(var(--spacing)*150)] opacity-50 mt-20 md:mt-44 -z-1 w-full mask-y-from-50% mask-y-to-90%" style={{ backgroundImage: 'url(/svg/grids.svg)' }}></div>
    <HomeSectionLayout>
      <h1 className="text-2xl md:text-6xl font-bold text-center leading-tight">Track <span className="text-muted">Hidden</span> <span className="text-destructive underline">Errors</span> <br /> in your JS Apps.</h1>
      <h2 className="text-muted-foreground text-sm md:text-base">{withAngleBrackets('scry reveals what your console hides')}</h2>
      <div className="inline-flex gap-2">
        <Link href='https://github.com/moonlitgrace/scry' target="_blank">
          <Button variant='ghost'>
            <GithubIcon className="fill-foreground" />
            Github
          </Button>
        </Link>
        <Button variant='outline'>Start your project</Button>
      </div>
      <div className="border w-full aspect-video mt-5 md:mt-10 bg-background"></div>
    </HomeSectionLayout>
  </>
}

