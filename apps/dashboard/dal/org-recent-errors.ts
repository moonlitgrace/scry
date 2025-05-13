import { IOrgRecentError } from '@/app/org/[id]/_types/org-recent-errors';
import recentErrorsData from '@/data/mock/recent_errors.json';

export function getOrgRecentErrors(): Promise<IOrgRecentError[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(recentErrorsData);
    }, 1000);
  });
}
