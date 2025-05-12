import GithubIcon from '@/components/icons/Github';
import HomeSectionLayout from '@/layouts/HomeSectionLayout';
import { withAngleBrackets } from '@/lib/with-angle-brackets';
import { Button, buttonVariants } from '@repo/design-system/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <>
      <div
        className="absolute inset-x-0 top-20 -z-1 h-96 mask-y-from-20% mask-y-to-90% bg-size-[auto_100rem] opacity-25 md:top-10 md:h-[50rem] dark:opacity-100"
        style={{ backgroundImage: 'url(/svg/grids.svg)' }}
      ></div>
      <HomeSectionLayout>
        <h1 className="text-center font-sans text-5xl leading-tight font-bold md:text-7xl">
          Track <span className="text-muted">Hidden</span>{' '}
          <span className="text-destructive underline decoration-wavy">Errors</span>{' '}
          <br /> in your JS Apps.
        </h1>
        <h2 className="text-muted-foreground text-sm">
          {withAngleBrackets('scry reveals what your console hides')}
        </h2>
        <div className="inline-flex gap-2">
          <Link href="https://github.com/moonlitgrace/scry" target="_blank">
            <Button variant="ghost">
              <GithubIcon className="fill-foreground" />
              Github
            </Button>
          </Link>
          <Link href="/" className={buttonVariants()}>
            Start your project
          </Link>
        </div>
        <div className="bg-background mt-5 aspect-video w-full border md:mt-10">
          <div className="inline-flex h-5 w-full items-center gap-1 border-b px-2"></div>
        </div>
      </HomeSectionLayout>
    </>
  );
}
