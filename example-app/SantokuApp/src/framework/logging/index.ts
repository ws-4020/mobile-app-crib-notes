import {FirebaseCrashlyticsTransport} from './FirebaseCrashlyticsTransport';
import {DEFAULT_LOGGER_OPTIONS, Logger, LoggerOptions} from './Logger';

function createLogger(options: LoggerOptions): Logger {
  return new Logger(options);
}

const log = __DEV__
  ? createLogger(DEFAULT_LOGGER_OPTIONS)
  : createLogger({...DEFAULT_LOGGER_OPTIONS, transport: new FirebaseCrashlyticsTransport()});

export type {Logger, LoggerOptions};
export {log, createLogger};
