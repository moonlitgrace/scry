import { Avatar, AvatarFallback } from "@repo/ui/components/ui/avatar"
import { Button } from "@repo/ui/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/components/ui/dropdown-menu"
import { CirclePlus, LogOut } from "lucide-react"
import Link from "next/link"
import ThemeSelector from "./ThemeSelector"

export default function UserDropdown() {
  return (
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
        <DropdownMenuGroup>
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
          <ThemeSelector />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className='cursor-pointer items-center justify-between'>
            <span>Log out</span>
            <LogOut />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
