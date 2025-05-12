import Logo from '@/assets/svg/logo.svg';
import { Button } from '@repo/design-system/components/ui/button';
import { Input } from '@repo/design-system/components/ui/input';

export default function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-2 px-5">
        <div className="flex flex-col gap-2">
          <Logo className="w-10" />
          <p className="text-muted-foreground text-xs">
            Track and reveal hidden errors and logs in your JavaScript apps.
          </p>
          <span className="text-muted-foreground mt-5 text-xs">© 2025 scry</span>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-bold">Stay updated</h5>
          <p className="text-muted-foreground text-xs">Get product tips and updates:</p>
          <div className="flex flex-col items-center gap-2 md:flex-row">
            <Input type="email" placeholder="your@email.com" disabled />
            <Button variant="outline" className="w-full md:w-auto" disabled>
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
