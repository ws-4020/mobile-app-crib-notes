export const format2Iso8601 = (d: Date): string => {
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const date = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');
  return `${d.getFullYear()}-${month}-${date}T${hours}:${minutes}:${seconds}Z`;
};
