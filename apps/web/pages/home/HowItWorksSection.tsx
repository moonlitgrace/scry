import { withAngleBrackets } from "@/utils/with-angle-brackets";
import { Button } from "@repo/ui/components/ui/button";
import { CodeBlock } from '@repo/ui/components/ui/code-block'
import { cn } from "@repo/ui/lib/utils";
import { BundledLanguage } from "shiki";

export default function HowItWorksSection() {
  return <section className="flex flex-col items-center gap-5">
    <h3 className="font-bold text-4xl">How it works</h3>
    <h2 className="text-foreground/50">{withAngleBrackets('in 3 simple steps')}</h2>
    <div className="grid grid-cols-2 gap-2 w-full">
      {steps.map((step, idx) => (
        <div key={idx} className={cn(idx === 1 && 'row-span-2', "flex flex-col gap-2")}>
          <h5 className="font-bold">{idx + 1}. {step.label}</h5>
          <div className="text-sm">
            {step.code && <CodeBlock lang={step.lang ?? 'shell'}>{step.code}</CodeBlock>}
            {step.text && <span className="text-foreground/50">{step.text}</span>}
          </div>
        </div>
      ))}
    </div>
    <Button variant='outline'>Get started</Button>
  </section>
}

const steps: Array<{
  label: string;
  text?: string;
  lang?: BundledLanguage;
  code?: string;
}> = [
    {
      label: 'Install the SDK',
      lang: 'shell',
      code: `npm i @scry/sdk`
    },
    {
      label: 'Initialize in your app',
      lang: 'js',
      code: `import { initScry } from '@scry/sdk';

initScry({
  apiKey: 'YOUR_API_KEY',
  debug: true
});
`
    },
    {
      label: 'See errors in your dashboard',
      text: 'Errors appear automatically in your Scry dashboard'
    }
  ]
