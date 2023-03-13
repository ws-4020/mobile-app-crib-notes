import {diffInDays} from './diffInDays';
import {diffInHours} from './diffInHours';
import {diffInMinutes} from './diffInMinutes';

type Options = {
  daysSuffix?: string;
  hoursSuffix?: string;
  minutesSuffix?: string;
};
export function formatDiffInDateTime(dateLeft: Date, dateRight: Date, options?: Options) {
  const diffDays = diffInDays(dateLeft, dateRight);
  if (diffDays < 1) {
    const diffHours = diffInHours(dateLeft, dateRight);
    if (diffHours < 1) {
      const diffMinutes = diffInMinutes(dateLeft, dateRight);
      return `${diffMinutes}${options?.minutesSuffix ?? ''}`;
    }
    return `${diffHours}${options?.hoursSuffix ?? ''}`;
  }
  return `${diffDays}${options?.daysSuffix ?? ''}`;
}
