import GoogleIcon from "@/components/icons/Google";
import { Button } from "@repo/ui/components/ui/button";
import { cn } from "@repo/ui/lib/utils";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  type: 'sign-in' | 'sign-up';
  className?: string;
}

export default function AuthForm({ children, type, className }: Props) {
  const text = type === 'sign-in' ? 'Welcome back!' : 'Get started!';
  const href: typeof type = type === 'sign-in' ? 'sign-up' : 'sign-in';
  const href_text = type === 'sign-in'
    ? "Don't have an account? Sign up"
    : "Already have an account? Sign in"

  return (
    <form className={cn(className, "flex flex-col gap-2")}>
      <h4 className="font-sans text-4xl md:text-5xl">{text}</h4>
      <p className="text-xs md:text-sm text-muted-foreground">Scry helps you track and reveal hidden errors and logs in your JavaScript apps.</p>
      {children}
      <Button type="button" variant='outline'>
        <GoogleIcon className="fill-muted-foreground" />
        Continue with Google
      </Button>
      <Link href={`/${href}`} className="text-xs text-muted-foreground hover:underline">{href_text}</Link>
    </form>
  )
}

