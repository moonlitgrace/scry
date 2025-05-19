import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export function useSearchParamsHandler() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const updateParam = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  const debouncedUpdateParam = useDebouncedCallback(
    (key: string, value: string | null) => updateParam(key, value),
    500,
  );

  return { updateParam, debouncedUpdateParam };
}
