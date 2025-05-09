import { Metadata } from 'next';
import SignUpForm from './_components/SignUpForm';

export const metadata: Metadata = {
  title: 'Sign up – scry',
};

export default function SignUp() {
  return <SignUpForm />;
}
