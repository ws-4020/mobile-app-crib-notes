import {ConsoleTransport} from './ConsoleTransport';
import {Transport} from './Transport';

class Logger {
  private level: number;
  private transport: Transport;

  constructor(options: LoggerOptions) {
    this.level = LogLevelSet[options.level ?? DEFAULT_LOGGER_OPTIONS.level];
    this.transport = options.transport ?? DEFAULT_LOGGER_OPTIONS.transport;
  }
  private isLevelEnabled(level: LogLevel): boolean {
    return this.level <= LogLevelSet[level];
  }

  setLevel(level: LogLevel): Logger {
    this.level = LogLevelSet[level];
    return this;
  }

  trace(message: string | LogMessageSupplier, errorCode: string): Logger {
    if (this.isLevelEnabled('trace')) {
      this.transport.trace(message, errorCode);
    }
    return this;
  }

  debug(message: string | LogMessageSupplier, errorCode: string): Logger {
    if (this.isLevelEnabled('debug')) {
      this.transport.debug(message, errorCode);
    }
    return this;
  }

  info(message: string | LogMessageSupplier, errorCode: string): Logger {
    if (this.isLevelEnabled('info')) {
      this.transport.info(message, errorCode);
    }
    return this;
  }

  warn(message: string | LogMessageSupplier, errorCode: string): Logger {
    if (this.isLevelEnabled('warn')) {
      this.transport.warn(message, errorCode);
    }
    return this;
  }

  error(message: string | LogMessageSupplier, errorCode: string): Logger {
    if (this.isLevelEnabled('error')) {
      this.transport.error(message, errorCode);
    }
    return this;
  }
}

const LogLevelSet = {
  trace: -1,
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};
type LogLevel = keyof typeof LogLevelSet;

interface LogMessageSupplier {
  (): string;
}

type LoggerOptions = {
  level?: LogLevel;
  transport?: Transport;
};

type StrictLoggerOptions = {
  level: LogLevel;
  transport: Transport;
};

const DEFAULT_LOGGER_OPTIONS: StrictLoggerOptions = {
  level: 'info',
  transport: new ConsoleTransport(),
};

export type {LogLevel, LoggerOptions, StrictLoggerOptions, LogMessageSupplier};
export {Logger, LogLevelSet, DEFAULT_LOGGER_OPTIONS};
