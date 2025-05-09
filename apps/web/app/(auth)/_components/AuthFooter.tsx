import GoogleIcon from "@/components/icons/Google";
import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";

export default function AuthFooter({ type }: { type: 'sign-in' | 'sing-up' }) {
  const text = type === 'sing-up'
    ? "Don't have an account? Sign up"
    : "Already have an account? Sign in"

  return (
    <>
      <Button type="button" variant='outline'>
        <GoogleIcon className="fill-muted-foreground" />
        Continue with Google
      </Button>
      <Link href={`/${type}`} className="text-xs text-muted-foreground hover:underline">{text}</Link>
    </>
  )
}

