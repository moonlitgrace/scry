'use client'

import { SubmitHandler, useForm } from "react-hook-form";
import { AuthFormData, AuthSchema } from "../../_schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthForm from "../../_components/AuthForm";
import { Form } from "@repo/ui/components/ui/form";
import AuthFormFields, { AuthFormField } from "../../_components/AuthFormFields";

export default function SignInForm() {
  const form = useForm<AuthFormData>({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<AuthFormData> = (data) => {
    console.log(data);
  }

  return (
    <Form {...form}>
      <AuthForm type="sign-in" onSubmit={form.handleSubmit(onSubmit)}>
        <AuthFormFields fields={formFields} control={form.control} />
      </AuthForm>
    </Form>
  )
}

const formFields: AuthFormField[] = [
  {
    name: 'email',
    type: 'email',
    label: 'Email*',
    placeholder: 'Enter your email'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password*',
    placeholder: 'Enter your password'
  },
]
