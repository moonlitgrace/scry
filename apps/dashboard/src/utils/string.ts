export function getInitials(name: string): string {
  const parts = name.split(/[-\s]+/).filter(Boolean);

  const firstPart = parts[0]?.[0] ?? '';
  const secondPart = parts[1]?.[0] ?? '';

  return (firstPart + secondPart).toUpperCase();
}
