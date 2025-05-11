import { Button } from "@repo/ui/components/ui/button";
import { Bell } from "lucide-react";
import UserDropdown from "./UserDropdown";

export default function NavActions() {
  return (
    <nav className="inline-flex gap-2">
      <Button size='sm' variant='outline' disabled>
        Feedback
      </Button>
      <Button size='sm' variant='ghost' disabled>
        Docs
      </Button>
      <Button size='icon-sm' variant='outline' disabled>
        <Bell />
      </Button>
      <UserDropdown />
    </nav>
  )
}

