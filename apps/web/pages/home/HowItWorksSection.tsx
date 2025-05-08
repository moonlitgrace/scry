import { Button } from '@repo/ui/components/ui/button';
import { CodeBlock } from '@repo/ui/components/ui/code-block';
import { cn } from '@repo/ui/lib/utils';
import { BundledLanguage } from 'shiki';

export default function HowItWorksSection() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-5 w-full mt-5 md:mt-0">
        {steps.map((step, idx) => (
          <div key={idx} className={cn(idx === 1 && 'row-span-2', 'flex flex-col gap-2')}>
            <h5 className="text-sm md:text-base font-bold">
              <span className="text-destructive">{idx + 1}.</span> {step.label}
            </h5>
            <div className="text-xs md:text-sm">
              {step.code && (
                <CodeBlock lang={step.lang ?? 'shell'}>{step.code}</CodeBlock>
              )}
              {step.text && <span className="text-muted-foreground">{step.text}</span>}
            </div>
          </div>
        ))}
      </div>
      <Button className="mt-5 md:mt-0">Get started</Button>
    </>
  );
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
      code: `npm i @scry/sdk`,
    },
    {
      label: 'Initialize in your app',
      lang: 'js',
      code: `import { initScry } from '@scry/sdk';

initScry({
  apiKey: 'YOUR_API_KEY',
  debug: true
});
`,
    },
    {
      label: 'See errors in your dashboard',
      text: 'Errors appear automatically in your Scry dashboard',
    },
  ];
