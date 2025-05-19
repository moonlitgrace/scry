import recentlogs from '@/data/mock/recent_errors.json';
import { IProjectRecentLog } from '@/types/project';

export interface IProjectRecentLogsProps {
  id: string;
  query?: string;
  env?: string;
  status?: string;
}

export const getProjectRecentLogs = ({
  id,
  query = '',
  env = 'all',
  status = 'resolved&pending',
}: IProjectRecentLogsProps): Promise<IProjectRecentLog[]> => {
  return new Promise((resolve) => {
    const projectLogs = recentlogs.filter((log) => log.project.id === id);
    const normalizedQuery = query.toLowerCase();
    const filteredLogs = projectLogs
      .filter((log) => log.errorMsg.toLowerCase().includes(normalizedQuery))
      .filter((log) => (env === 'all' ? log : log.env === env))
      .filter((log) => status.includes(log.status));

    resolve(filteredLogs);
  });
};
