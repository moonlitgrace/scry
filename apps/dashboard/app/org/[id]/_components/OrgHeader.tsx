'use client';

import Header from '@/components/shared/Header';
import { Button } from '@repo/ui/components/ui/button';
import Link from 'next/link';
import Logo from '@/assets/svg/logo.svg';
import { useEffect, useState } from 'react';

export default function OrgHeader({ id }: { id: string }) {
  const [offsetX, setOffsetX] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setOffsetX(Math.min(window.scrollY, 40))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Header id={id} />
      <Link href={`/org/${id}`} className='fixed top-5 left-5 z-3'>
        <Logo className="w-5" />
      </Link>
      <nav className='px-5 border-b sticky top-0 bg-background/95 z-2 pt-3'>
        <div
          className='inline-flex items-center gap-2'
          style={{ 'transform': `translateX(${offsetX}px)` }}
        >
          <Button variant={'ghost'} size={'sm'} className="bg-muted border">
            <Link href={`/org/${id}`}>Overview</Link>
          </Button>
          <Button variant={'ghost'} size={'sm'} disabled>
            <Link href={`/org/${id}/activity`}>Activity</Link>
          </Button>
          <Button variant={'ghost'} size={'sm'}>
            <Link href={`/org/${id}/settings`}>Settings</Link>
          </Button>
        </div>
      </nav>
    </>
  );
}
