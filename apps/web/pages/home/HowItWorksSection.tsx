import { withAngleBrackets } from "@/utils/with-angle-brackets";
import { CodeBlock } from '@repo/ui/components/ui/code-block'

export default function HowItWorksSection() {
  return <section className="flex flex-col items-center gap-5">
    <h3 className="font-bold text-4xl">How it works</h3>
    <h2 className="text-foreground/50">{withAngleBrackets('in 3 simple steps')}</h2>
    <div className="grid grid-cols-3 gap-2 w-full">
      <div className="border aspect-square p-5 flex flex-col gap-2">
        <h5 className="font-bold">1. Install the SDK</h5>
        <CodeBlock lang="shell">npm i @scry/sdk</CodeBlock>
      </div>
      <div className="border aspect-square"></div>
      <div className="border aspect-square"></div>
    </div>
  </section>
}

