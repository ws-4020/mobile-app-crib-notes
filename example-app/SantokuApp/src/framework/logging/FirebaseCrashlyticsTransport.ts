import crashlytics from '@react-native-firebase/crashlytics';

import {LogLevel, LogMessageSupplier} from './Logger';
import {Transport} from './Transport';

class FirebaseCrashlyticsTransport implements Transport {
  log(level: LogLevel, message: string | LogMessageSupplier, errorCode: string): Transport {
    if (typeof message === 'string') {
      crashlytics().recordError(new Error(message), errorCode);
    } else {
      crashlytics().recordError(new Error(message()), errorCode);
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

export {FirebaseCrashlyticsTransport};
