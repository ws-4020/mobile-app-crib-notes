import {diffInDays} from './diffInDays';
import {diffInHours} from './diffInHours';
import {diffInMinutes} from './diffInMinutes';
import {diffInYears} from './diffInYears';

type Options = {
  daysSuffix?: string;
  hoursSuffix?: string;
  minutesSuffix?: string;
  yearsSuffix?: string;
};
export function formatDiffInDateTime(dateLeft: Date, dateRight: Date, options?: Options) {
  const diffYears = diffInYears(dateLeft, dateRight);
  if (diffYears > 0) {
    const diffYears = diffInYears(dateLeft, dateRight);
    return `${diffYears}${options?.yearsSuffix ?? ''}`;
  }
  const diffDays = diffInDays(dateLeft, dateRight);
  if (diffDays > 0) {
    return `${diffDays}${options?.daysSuffix ?? ''}`;
  }
  const diffHours = diffInHours(dateLeft, dateRight);
  if (diffHours < 1) {
    const diffMinutes = diffInMinutes(dateLeft, dateRight);
    return `${diffMinutes}${options?.minutesSuffix ?? ''}`;
  }
  return `${diffHours}${options?.hoursSuffix ?? ''}`;
}
