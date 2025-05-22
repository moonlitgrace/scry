export interface OrgProject {
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

export interface OrgRecentError {
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
