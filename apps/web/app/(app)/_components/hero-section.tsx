import GithubIcon from '@/components/atoms/github-icon';
import HomeSectionLayout from '@/layouts/home-section';
import { buttonVariants } from '@repo/design-system/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <>
      <div
        className="absolute inset-x-0 top-20 -z-1 h-96 mask-y-from-20% mask-y-to-90% bg-size-[auto_100rem] opacity-25 md:top-10 md:h-[50rem] dark:opacity-100"
        style={{ backgroundImage: 'url(/svg/grids.svg)' }}
      ></div>
      <HomeSectionLayout>
        <h1 className="text-center font-sans text-4xl leading-tight font-black md:text-7xl">
          Track <span className="text-muted">Hidden</span>{' '}
          <span className="text-destructive underline decoration-wavy">Errors</span>{' '}
          <br /> in your JS Apps.
        </h1>
        <h2 className="text-muted-foreground">
          Scry into your code&apos;s future—catch errors before they strike.
        </h2>
        <div className="inline-flex gap-2">
          <Link
            href="https://github.com/moonlitgrace/scryjs"
            target="_blank"
            className={buttonVariants({ variant: 'ghost' })}
          >
            <GithubIcon className="fill-foreground" />
            Github
          </Link>
          <Link href="/" className={buttonVariants()}>
            Start your project
          </Link>
        </div>
        <div className="relative flex w-full items-end">
          <div className="bg-accent mt-5 w-full rounded-t-xl px-1 pt-2 pb-0 md:pt-3">
            <Image
              src="/image/dashboard-preview.png"
              alt="Dashboard preview"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              className="rounded-t-xl"
            />
          </div>
          <div className="from-background absolute inset-x-0 h-1/2 bg-gradient-to-t to-transparent"></div>
        </div>
      </HomeSectionLayout>
    </>
  );
}
