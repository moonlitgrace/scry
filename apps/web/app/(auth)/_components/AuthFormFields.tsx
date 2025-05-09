import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@repo/ui/components/ui/form";
import { Control } from "react-hook-form";
import { AuthFormData } from "../_schemas/auth";
import { Input } from "@repo/ui/components/ui/input";

export interface AuthFormField {
  name: 'email' | 'password';
  type: string;
  label: string;
  placeholder: string;
}

interface Props {
  fields: AuthFormField[];
  control: Control<AuthFormData>
}

export default function AuthFormFields({ fields, control }: Props) {
  return fields.map((field, idx) => (
    <FormField
      key={idx}
      control={control}
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
  ))
}

