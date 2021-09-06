import {LogLevel} from './Logger';
import {Transport} from './Transport';

/**
 * ログレベルに応じた{@link console}メソッドを定義です。
 */
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

/**
 * {@link console}に出力するトランスポートです。
 */
class ConsoleTransport implements Transport {
  /**
   * ログレベルに応じたconsoleメソッドを取得してログ出力します。
   * @param level ログレベル
   * @param message 出力するメッセージ
   * @param errorCode エラーコード
   * @returns トランスポートインスタンス
   */
  log(level: LogLevel, message: string, errorCode: string): Transport {
    const log = ConsoleMethod.for(level);
    log(`[${level}] [${errorCode}] ${message}`);
    return this;
  }

  /**
   * {@link console.trace}にログを出力します。
   * @param message 出力するメッセージ
   * @param errorCode エラーコード
   * @returns トランスポートインスタンス
   */
  trace(message: string, errorCode: string): Transport {
    this.log('trace', message, errorCode);
    return this;
  }

  /**
   * {@link console.debug}にログを出力します。
   * @param message 出力するメッセージ
   * @param errorCode エラーコード
   * @returns トランスポートインスタンス
   */
  debug(message: string, errorCode: string): Transport {
    this.log('debug', message, errorCode);
    return this;
  }

  /**
   * {@link console.info}にログを出力します。
   * @param message 出力するメッセージ
   * @param errorCode エラーコード
   * @returns トランスポートインスタンス
   */
  info(message: string, errorCode: string): Transport {
    this.log('info', message, errorCode);
    return this;
  }

  /**
   * {@link console.warn}にログを出力します。
   * @param message 出力するメッセージ
   * @param errorCode エラーコード
   * @returns トランスポートインスタンス
   */
  warn(message: string, errorCode: string): Transport {
    this.log('warn', message, errorCode);
    return this;
  }

  /**
   * {@link console.error}にログを出力します。
   * @param message 出力するメッセージ
   * @param errorCode エラーコード
   * @returns トランスポートインスタンス
   */
  error(message: string, errorCode: string): Transport {
    this.log('error', message, errorCode);
    return this;
  }
}

export {ConsoleTransport};
