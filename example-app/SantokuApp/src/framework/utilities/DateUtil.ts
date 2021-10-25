import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
dayjs.extend(timezone);

export class DateUtil {
  static YYYYMMDDTHHmmssSSS: string = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
  static DEFAULT_FORMAT: string = DateUtil.YYYYMMDDTHHmmssSSS;

  static format(date: Date, format: string = DateUtil.DEFAULT_FORMAT, tz?: string): string {
    return dayjs(date).tz(tz).format(format);
  }
}
