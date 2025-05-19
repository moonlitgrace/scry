export interface IOrgProject {
  id: string;
  name: string;
  domain: string;
  status: string;
  stats: {
    errors: number;
    lastError: string;
    errorTrend: string;
  };
  latestError: {
    errorMsg: string;
    env: string;
    timestamp: string;
  };
}

export interface IOrgRecentError {
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
