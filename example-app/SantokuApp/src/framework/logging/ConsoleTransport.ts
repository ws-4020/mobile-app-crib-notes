import {LogLevel} from './Logger';
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
  log(level: LogLevel, message: string, errorCode: string): Transport {
    const log = ConsoleMethod.for(level);
    log(`[${errorCode}] ${message}`);
    return this;
  }

  trace(message: string, errorCode: string): Transport {
    this.log('trace', message, errorCode);
    return this;
  }

  debug(message: string, errorCode: string): Transport {
    this.log('debug', message, errorCode);
    return this;
  }

  info(message: string, errorCode: string): Transport {
    this.log('info', message, errorCode);
    return this;
  }

  warn(message: string, errorCode: string): Transport {
    this.log('warn', message, errorCode);
    return this;
  }

  error(message: string, errorCode: string): Transport {
    this.log('error', message, errorCode);
    return this;
  }
}

export {ConsoleTransport};
