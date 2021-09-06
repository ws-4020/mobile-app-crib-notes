import crashlytics from '@react-native-firebase/crashlytics';

import {LogLevel} from './Logger';
import {Transport} from './Transport';

class FirebaseCrashlyticsTransport implements Transport {
  log(level: LogLevel, message: string, errorCode: string): Transport {
    crashlytics().recordError(new Error(`[${level}] ${message}`), errorCode);
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

export {FirebaseCrashlyticsTransport};
