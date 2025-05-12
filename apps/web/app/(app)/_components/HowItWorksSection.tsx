import { Button } from '@repo/design-system/components/ui/button';
import { PackagePlus, Cog, BugPlay, ExternalLink } from 'lucide-react';

export default function HowItWorksSection() {
  return (
    <>
      <div className="mt-5 grid w-full gap-5 md:mt-0 md:grid-cols-3">
        {steps.map(({ Icon, text, subText }, idx) => (
          <div
            key={idx}
            className="bg-card text-card-foreground flex flex-col justify-center gap-2 border p-5 shadow-sm md:aspect-square md:items-center md:text-center"
          >
            <div className="flex items-center gap-2 md:flex-col">
              <Icon className="text-muted-foreground md:size-10" />
              <h5 className="font-bold">{text}</h5>
            </div>
            <p className="text-muted-foreground text-sm">{subText}</p>
          </div>
        ))}
      </div>
      <Button className="mt-5 md:mt-0">
        Learn more <ExternalLink />
      </Button>
    </>
  );
}

const steps = [
  {
    Icon: PackagePlus,
    text: 'Install',
    subText: 'Add the SDK in seconds with a simple npm install.',
  },
  {
    Icon: Cog,
    text: 'Initialize',
    subText: 'Configure Scry with your API key to start capturing insights.',
  },
  {
    Icon: BugPlay,
    text: 'Inspect',
    subText: 'View detailed error logs and data in your dashboard.',
  },
];
