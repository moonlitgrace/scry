import GithubIcon from "@/components/icons/Github";
import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return <>
    <div className="absolute inset-x-0 h-[calc(var(--spacing)*150)] opacity-50 mt-44 -z-10 w-full mask-y-from-50% mask-y-to-90%" style={{ backgroundImage: 'url(/svg/grids.svg)' }}></div>
    <main className="flex flex-col gap-10 max-w-3xl mx-auto mt-10">
      <section className="flex flex-col items-center gap-2 flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-center leading-tight">Track <span className="text-muted">Hidden</span> <span className="text-destructive underline">Errors</span> in your JS Apps.</h1>
        <h2 className="text-foreground/50">{'<'}scry reveals what your console hides{'>'}</h2>
        <div className="inline-flex gap-2">
          <Link href='https://github.com/moonlitgrace/scry' target="_blank">
            <Button variant='ghost'>
              <GithubIcon className="fill-foreground" />
              Github
            </Button>
          </Link>
          <Button variant='outline'>Start your project</Button>
        </div>
        <div className="border rounded-md w-full aspect-video mt-10 bg-background"></div>
      </section>
      <section></section>
    </main>
  </>
}

