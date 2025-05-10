import Logo from '@/assets/svg/logo.svg';
import { Avatar, AvatarFallback } from '@repo/ui/components/ui/avatar';
import { Badge } from '@repo/ui/components/ui/badge';
import { Button } from '@repo/ui/components/ui/button';
import { ChevronDown, CirclePlus, LogOut } from 'lucide-react'
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/components/ui/dropdown-menu"
import { ModeToggle } from '@repo/ui/components/ui/mode-toggle';

export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="bg-background/95 sticky top-0 z-1 flex flex-col w-full border-b px-5">
      <div className='inline-flex items-center justify-between py-3'>
        <div className="inline-flex gap-4 items-center">
          <Link href={"/"}>
            <Logo className="w-5" />
          </Link>
          <span className='text-muted-foreground/50'>/</span>
          <div className='inline-flex items-center gap-2'>
            <Link href={'/'} className='text-sm font-medium inline-flex items-center gap-2'>
              moonlitgrace's Org
              <Badge variant="secondary">Free</Badge>
            </Link>
            <Button size='icon-sm' variant='ghost' className='size-[calc(var(--spacing)*5.5)]' disabled>
              <ChevronDown />
            </Button>
          </div>
        </div>
        <nav className="inline-flex gap-2">
          <Button size='sm' variant='outline' disabled>
            Feedback
          </Button>
          <Button size='sm' variant='ghost' disabled>
            Docs
          </Button>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size='icon-sm' variant='outline'>
                <Avatar className='rounded-none'>
                  <AvatarFallback className='bg-transparent'>M</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel className='text-sm flex flex-col'>
                <span>moonlitgrace</span>
                <span className='text-xs text-muted-foreground'>moonlitgrace.gaia@gmail.com</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={'/'} className='flex-1'>Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/account'} className='flex-1'>Account</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer items-center justify-between' disabled>
                <span>Create Org</span>
                <CirclePlus />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='cursor-pointer items-center justify-between'>
                <span>Log out</span>
                <LogOut />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
      {children && (
        <nav className='inline-flex items-center gap-2'>
          {children}
        </nav>
      )}
    </header>
  );
}

