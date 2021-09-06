import {FirebaseCrashlyticsTransport} from './FirebaseCrashlyticsTransport';
import {Logger, createLogger, DEFAULT_LOGGER_OPTIONS, LoggerOptions} from './Logger';

const log = __DEV__
  ? createLogger(DEFAULT_LOGGER_OPTIONS)
  : createLogger({...DEFAULT_LOGGER_OPTIONS, transport: new FirebaseCrashlyticsTransport()});

export type {Logger, LoggerOptions};
export {log, createLogger};
