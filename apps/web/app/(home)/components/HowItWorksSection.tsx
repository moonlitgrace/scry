import { Button } from '@repo/ui/components/ui/button';
import { PackagePlus, Cog, BugPlay, ExternalLink } from 'lucide-react';

export default function HowItWorksSection() {
  return (
    <>
      <div className="mt-5 grid w-full gap-5 md:mt-0 md:grid-cols-3">
        {steps.map(({ Icon, text, subText }, idx) => (
          <div key={idx} className='bg-card text-card-foreground shadow-sm border flex flex-col md:items-center gap-2 md:aspect-square p-5 justify-center md:text-center'>
            <div className='flex md:flex-col items-center gap-2'>
              <Icon className='md:size-10 text-muted-foreground' />
              <h5 className='font-bold'>{text}</h5>
            </div>
            <p className='text-sm text-muted-foreground'>{subText}</p>
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
    subText: 'Add the SDK in seconds with a simple npm install.'
  },
  {
    Icon: Cog,
    text: 'Initialize',
    subText: 'Configure Scry with your API key to start capturing insights.'
  },
  {
    Icon: BugPlay,
    text: 'Inspect',
    subText: 'View detailed error logs and data in your dashboard.'
  },
]
