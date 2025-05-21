export interface ProjectError {
  id: string;
  project: {
    id: string;
    name: string;
  };
  errorMsg: string;
  env: string;
  status: string;
  timestamp: string;
}

export interface ProjectKeyMetrics {
  [key: string]: {
    title: string;
    subTitle?: string;
    value: number;
    isCritical: boolean;
  };
}
