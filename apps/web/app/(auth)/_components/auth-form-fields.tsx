import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@repo/design-system/components/ui/form';
import { Control, FieldValues, Path } from 'react-hook-form';
import { Input } from '@repo/design-system/components/ui/input';

export interface AuthFormField<T extends FieldValues> {
  name: Path<T>;
  type: string;
  label: string;
  placeholder: string;
}

interface Props<T extends FieldValues> {
  fields: AuthFormField<T>[];
  control: Control<T>;
}

export default function AuthFormFields<T extends FieldValues>({
  fields,
  control,
}: Props<T>) {
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
  ));
}
