import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export function useSearchParamsHandler() {
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const getParam = (key: string) => searchParams.get(key);

  const updateParam = (key: string, value: string | null) => {
    if (value === getParam(key)) return;
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    });
  };

  const debouncedUpdateParam = useDebouncedCallback(
    (key: string, value: string | null) => updateParam(key, value),
    500,
  );

  return { isPending, getParam, updateParam, debouncedUpdateParam };
}
