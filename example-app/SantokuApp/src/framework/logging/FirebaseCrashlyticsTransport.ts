import crashlytics from '@react-native-firebase/crashlytics';

import {LogLevel} from './Logger';
import {Transport} from './Transport';

/**
 * Firebase Crashlyticsに出力するトランスポートです。
 */
class FirebaseCrashlyticsTransport implements Transport {
  /**
   * Firebase Crashlyticsにログ出力します。
   * @param level ログレベル
   * @param message 出力するメッセージ
   * @param errorCode エラーコード
   * @returns トランスポートインスタンス
   * @see {@link https://rnfirebase.io/crashlytics/usage#usage}
   * @see {@link FirebaseCrashlyticsTypes.Module.recordError}
   */
  log(level: LogLevel, message: string, errorCode: string): Transport {
    crashlytics().recordError(new Error(`[${level}] [${errorCode}] ${message}`), errorCode);
    return this;
  }

  /**
   * Firebase Crashlyticsにtraceログを出力します。
   * @param message 出力するメッセージ
   * @param errorCode エラーコード
   * @returns トランスポートインスタンス
   */
  trace(message: string, errorCode: string): Transport {
    this.log('trace', message, errorCode);
    return this;
  }

  /**
   * Firebase Crashlyticsにdebugログを出力します。
   * @param message 出力するメッセージ
   * @param errorCode エラーコード
   * @returns トランスポートインスタンス
   */
  debug(message: string, errorCode: string): Transport {
    this.log('debug', message, errorCode);
    return this;
  }

  /**
   * Firebase Crashlyticsにinfoログを出力します。
   * @param message 出力するメッセージ
   * @param errorCode エラーコード
   * @returns トランスポートインスタンス
   */
  info(message: string, errorCode: string): Transport {
    this.log('info', message, errorCode);
    return this;
  }

  /**
   * Firebase Crashlyticsにwarnログを出力します。
   * @param message 出力するメッセージ
   * @param errorCode エラーコード
   * @returns トランスポートインスタンス
   */
  warn(message: string, errorCode: string): Transport {
    this.log('warn', message, errorCode);
    return this;
  }

  /**
   * Firebase Crashlyticsにerrorログを出力します。
   * @param message 出力するメッセージ
   * @param errorCode エラーコード
   * @returns トランスポートインスタンス
   */
  error(message: string, errorCode: string): Transport {
    this.log('error', message, errorCode);
    return this;
  }
}

export {FirebaseCrashlyticsTransport};
