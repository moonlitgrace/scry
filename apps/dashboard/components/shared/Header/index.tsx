import Logo from '@/assets/svg/logo.svg';
import Link from 'next/link';
import OrgSelector from './OrgSelector';
import NavActions from './NavActions';

export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="bg-background/95 sticky top-0 z-1 flex flex-col w-full border-b px-5">
      <div className='inline-flex items-center justify-between py-3'>
        <div className="inline-flex gap-4 items-center">
          <Link href={"/"}>
            <Logo className="w-5" />
          </Link>
          <span className='text-muted-foreground/50'>/</span>
          <OrgSelector />
        </div>
        <NavActions />
      </div>
      {children && (
        <nav className='inline-flex items-center gap-2'>
          {children}
        </nav>
      )}
    </header>
  );
}


