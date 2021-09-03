import {LogLevel} from './Logger';

interface Transport {
  log: LogMethod;
  error: LeveledLogMethod;
  warn: LeveledLogMethod;
  info: LeveledLogMethod;
  debug: LeveledLogMethod;
  trace: LeveledLogMethod;
}

interface LogMethod {
  (level: LogLevel, message: string, errorCode: string): Transport;
}

interface LeveledLogMethod {
  (message: string, errorCode: string): Transport;
}

export type {Transport};
