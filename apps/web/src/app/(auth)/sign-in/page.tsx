import { Metadata } from 'next';
import SignInForm from './_components/sign-in-form';

export const metadata: Metadata = {
  title: 'Sign in – scry',
};

export default function SignIn() {
  return <SignInForm />;
}
