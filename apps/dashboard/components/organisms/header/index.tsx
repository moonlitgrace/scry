import NavActions from './nav-actions';
import OrgDropdown from './org-dropdown';

export default function Header() {
  return (
    <header className="bg-background/95 z-1 inline-flex w-full items-center justify-between px-5 pt-3 pl-14">
      <div className="inline-flex items-center gap-4">
        <span className="text-muted-foreground/50">/</span>
        <OrgDropdown />
      </div>
      <NavActions />
    </header>
  );
}
