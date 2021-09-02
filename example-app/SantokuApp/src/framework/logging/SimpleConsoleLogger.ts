import {Logger, LogLevel, LogLevelSet, LogMessageSupplier, StrictLoggerOptions} from './Logger';

const ConsoleMethod = Object.freeze({
  trace: () => console.trace,
  debug: () => console.debug,
  info: () => console.info,
  warn: () => console.warn,
  error: () => console.error,

  for(level: LogLevel) {
    return this[level]();
  },
});

class SimpleConsoleLogger implements Logger {
  private level: number;

  constructor(options: StrictLoggerOptions) {
    this.level = LogLevelSet[options.level];
  }

  private isLevelEnabled(level: LogLevel): boolean {
    return this.level <= LogLevelSet[level];
  }

  setLevel(level: LogLevel): Logger {
    this.level = LogLevelSet[level];
    return this;
  }

  log(level: LogLevel, message: string | LogMessageSupplier): Logger {
    const log = ConsoleMethod.for(level);
    if (this.isLevelEnabled(level)) {
      if (typeof message === 'string') {
        log(message);
      } else {
        log(message());
      }
    }
    return this;
  }

  trace(message: string | LogMessageSupplier): Logger {
    this.log('trace', message);
    return this;
  }

  debug(message: string | LogMessageSupplier): Logger {
    this.log('debug', message);
    return this;
  }

  info(message: string | LogMessageSupplier): Logger {
    this.log('info', message);
    return this;
  }

  warn(message: string | LogMessageSupplier): Logger {
    this.log('warn', message);
    return this;
  }

  error(message: string | LogMessageSupplier): Logger {
    this.log('error', message);
    return this;
  }
}

export {SimpleConsoleLogger};
