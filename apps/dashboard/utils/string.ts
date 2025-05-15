export function getInitials(name: string): string {
  const parts = name.split(/[-\s]+/).filter(Boolean);

  if (parts.length === 0) return '';
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}
