import { cn } from '@repo/ui/lib/utils';
import React from 'react';

interface Props {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function HomeSectionLayout({ children, id, className }: Props) {
  return (
    <section
      id={id}
      className={cn(className, 'flex flex-col items-center gap-2 md:gap-5 scroll-mt-20')}
    >
      {children}
    </section>
  );
}
