import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export function useSearchParamsHandler() {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setLoading(false);
  }, [searchParams]);

  const getParam = (key: string) => searchParams.get(key);

  const updateParam = (key: string, value: string | null) => {
    if (value === getParam(key)) return;
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    setLoading(true);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const debouncedUpdateParam = useDebouncedCallback(
    (key: string, value: string | null) => updateParam(key, value),
    500,
  );

  return { loading, getParam, updateParam, debouncedUpdateParam };
}
