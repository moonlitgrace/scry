import * as React from 'react';
import { cn } from '@repo/design-system/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const spinnerVariants = cva('animate-spin text-muted-foreground/30', {
  variants: {
    size: {
      default: 'size-4',
      sm: 'size-3',
      lg: 'size-6',
      icon: 'size-5',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface SpinnerProps
  extends React.HTMLAttributes<SVGElement>,
    VariantProps<typeof spinnerVariants> {}

function Spinner({ className, size, ...props }: SpinnerProps) {
  return (
    <svg
      data-slot="spinner"
      className={cn(spinnerVariants({ size, className }))}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        className="text-foreground opacity-75"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M12 2a10 10 0 0 1 10 10"
      />
    </svg>
  );
}

export { Spinner };
