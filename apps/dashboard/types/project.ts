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

export interface ProjectMetrics {
  [key: string]: {
    title: string;
    subTitle?: string;
    value: number;
    isCritical: boolean;
  };
}

export interface ProjectLatestError {
  source: {
    env: string;
    href: string;
  };
  status: string;
  timestamp: string;
  userAgent: string;
  domain: string;
}
