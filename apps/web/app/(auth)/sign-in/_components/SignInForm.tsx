'use client'

import { SubmitHandler, useForm } from "react-hook-form";
import { AuthFormData, AuthSchema } from "../../_schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthForm from "../../_components/AuthForm";
import { Input } from "@repo/ui/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@repo/ui/components/ui/form";

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
        {formFields.map((field, idx) => (
          <FormField
            key={idx}
            control={form.control}
            name={field.name}
            render={({ field: renderField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input type={field.type} placeholder={field.placeholder} {...renderField} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        ))}
      </AuthForm>
    </Form>
  )
}

const formFields = [
  {
    name: 'email' as const,
    type: 'email',
    label: 'Email*',
    placeholder: 'Enter your email'
  },
  {
    name: 'password' as const,
    type: 'password',
    label: 'Password*',
    placeholder: 'Enter your password'
  },
]
