import {DateUtil} from '../utilities/DateUtil';
import {LogFormatter, LogLevel} from './Logger';

export class SimpleLogFormatter implements LogFormatter {
  format(level: LogLevel, message: string, errorCode?: string) {
    const now = DateUtil.format(new Date());
    if (!errorCode) {
      return `[${now}] [${level}] ${message}`;
    }
    return `[${now}] [${level}] [${errorCode}] ${message}`;
  }
}
