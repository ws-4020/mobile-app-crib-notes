import {FirebaseCrashlyticsLogger} from './FirebaseCrashlyticsLogger';
import {DEFAULT_LOGGER_OPTIONS, Logger, LoggerOptions} from './Logger';
import {SimpleConsoleLogger} from './SimpleConsoleLogger';

function createLogger(options: LoggerOptions): Logger {
  if (__DEV__) {
    return new SimpleConsoleLogger({...DEFAULT_LOGGER_OPTIONS, ...options});
  } else {
    return new FirebaseCrashlyticsLogger({...DEFAULT_LOGGER_OPTIONS, ...options});
  }
}

const log = createLogger(DEFAULT_LOGGER_OPTIONS);

export type {Logger, LoggerOptions};
export {log, createLogger};
