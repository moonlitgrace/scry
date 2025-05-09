import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { Metadata } from "next";
import AuthHeader from "../_components/AuthHeader";
import AuthFooter from "../_components/AuthFooter";

export const metadata: Metadata = {
  title: 'Sign in – scry'
};

export default function SignIn() {
  return (
    <form className="flex flex-col gap-2">
      <AuthHeader text="Welcome back!" />
      <div className="flex flex-col gap-2 mt-5">
        <Label htmlFor="email">Email*</Label>
        <Input type="email" id="email" name="email" placeholder="Enter your email" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Password*</Label>
        <Input type="password" id="password" name="password" placeholder="Enter your password" />
      </div>
      <Button type="button">Sign In</Button>
      <div className="inline-flex items-center gap-2">
        <span className="w-full border-b my-5"></span>
        <span className="text-xs text-muted-foreground">OR</span>
        <span className="w-full border-b my-5"></span>
      </div>
      <AuthFooter type="sign-in" />
    </form>
  )
}

