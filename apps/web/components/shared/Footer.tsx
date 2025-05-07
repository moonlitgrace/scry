import Logo from '@/assets/svg/logo.svg';
import { Button } from '@repo/ui/components/ui/button';
import { Input } from '@repo/ui/components/ui/input';

export default function Footer() {
  return (
    <footer className="border-t px-5 py-10">
      <div className="max-w-3xl mx-auto grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <Logo className="w-10" />
          <p className="text-muted-foreground text-xs">Track and reveal hidden errors and logs in your JavaScript apps.</p>
          <span className="text-muted-foreground text-xs mt-5">© 2025 scry</span>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className='font-bold'>Stay updated</h5>
          <p className="text-muted-foreground text-xs">Get product tips and updates:</p>
          <div className='inline-flex items-center gap-2'>
            <Input type='email' placeholder='your@email.com' disabled />
            <Button variant='outline' disabled>Subscribe</Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

