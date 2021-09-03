import {LogLevel, LogMessageSupplier} from './Logger';
import {Transport} from './Transport';

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

class ConsoleTransport implements Transport {
  log(level: LogLevel, message: string | LogMessageSupplier, errorCode: string): Transport {
    const log = ConsoleMethod.for(level);
    if (typeof message === 'string') {
      log(`[${errorCode}] ${message}`);
    } else {
      log(`[${errorCode}] ${message()}`);
    }
    return this;
  }

  trace(message: string | LogMessageSupplier, errorCode: string): Transport {
    this.log('trace', message, errorCode);
    return this;
  }

  debug(message: string | LogMessageSupplier, errorCode: string): Transport {
    this.log('debug', message, errorCode);
    return this;
  }

  info(message: string | LogMessageSupplier, errorCode: string): Transport {
    this.log('info', message, errorCode);
    return this;
  }

  warn(message: string | LogMessageSupplier, errorCode: string): Transport {
    this.log('warn', message, errorCode);
    return this;
  }

  error(message: string | LogMessageSupplier, errorCode: string): Transport {
    this.log('error', message, errorCode);
    return this;
  }
}

export {ConsoleTransport};
