const abbreviations = {
  production: 'PROD',
  development: 'DEVELOP',
} as const;

export function getAbbr(key: string) {
  return abbreviations[key as keyof typeof abbreviations];
}
