import {ConsoleTransport} from './ConsoleTransport';
import {Transport} from './Transport';

/**
 * ロガーです。
 * ログレベルや、出力先をオプションで指定できます。
 */
class Logger {
  private level: number;
  private transport: Transport;

  /**
   * ロガーのコンストラクタです。
   * @param options ロガーオプション
   */
  constructor(options: LoggerOptions) {
    this.level = LogLevelSet[options.level ?? DEFAULT_LOGGER_OPTIONS.level];
    this.transport = options.transport ?? DEFAULT_LOGGER_OPTIONS.transport;
  }

  /**
   * 指定されたログレベルが、ログ出力適用対象かを判定します。
   * @param level ログレベル
   */
  private isLevelEnabled(level: LogLevel): boolean {
    return this.level <= LogLevelSet[level];
  }

  /**
   * ログレベルを設定します。
   * @param level ログレベル
   * @returns ロガーインスタンス
   */
  setLevel(level: LogLevel): Logger {
    this.level = LogLevelSet[level];
    return this;
  }

  /**
   * traceレベルのログを出力します。
   * @param message ログメッセージ
   * @param errorCode エラーコード
   * @returns ロガーインスタンス
   */
  trace(message: string | LogMessageSupplier, errorCode: string): Logger {
    if (this.isLevelEnabled('trace')) {
      this.transport.trace(resolveMessage(message), errorCode);
    }
    return this;
  }

  /**
   * debugレベルのログを出力します。
   * @param message ログメッセージ
   * @param errorCode エラーコード
   * @returns ロガーインスタンス
   */
  debug(message: string | LogMessageSupplier, errorCode: string): Logger {
    if (this.isLevelEnabled('debug')) {
      this.transport.debug(resolveMessage(message), errorCode);
    }
    return this;
  }

  /**
   * infoレベルのログを出力します。
   * @param message ログメッセージ
   * @param errorCode エラーコード
   * @returns ロガーインスタンス
   */
  info(message: string | LogMessageSupplier, errorCode: string): Logger {
    if (this.isLevelEnabled('info')) {
      this.transport.info(resolveMessage(message), errorCode);
    }
    return this;
  }

  /**
   * warnレベルのログを出力します。
   * @param message ログメッセージ
   * @param errorCode エラーコード
   * @returns ロガーインスタンス
   */
  warn(message: string | LogMessageSupplier, errorCode: string): Logger {
    if (this.isLevelEnabled('warn')) {
      this.transport.warn(resolveMessage(message), errorCode);
    }
    return this;
  }

  /**
   * errorレベルのログを出力します。
   * @param message ログメッセージ
   * @param errorCode エラーコード
   * @returns ロガーインスタンス
   */
  error(message: string | LogMessageSupplier, errorCode: string): Logger {
    if (this.isLevelEnabled('error')) {
      this.transport.error(resolveMessage(message), errorCode);
    }
    return this;
  }
}

/**
 * 指定された型に応じてメッセージを取得します。
 * @param message ログメッセージ
 * @returns メッセージ
 */
const resolveMessage = (message: string | LogMessageSupplier) => {
  if (typeof message === 'string') {
    return message;
  }
  return message();
};

/**
 * ログレベルのセットです。
 */
const LogLevelSet = {
  trace: -1,
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};
type LogLevel = keyof typeof LogLevelSet;

/**
 * ログに出力するメッセージを取得するためのインターフェースです。
 */
interface LogMessageSupplier {
  (): string;
}

/**
 * ロガーに設定できるオプションです。
 */
type LoggerOptions = {
  level?: LogLevel;
  transport?: Transport;
};

/**
 * ロガーに設定できるオプションを全て必須項目にしたタイプ定義です。
 * ロガーのデフォルトオプションに使用します。
 * @see {DEFAULT_LOGGER_OPTIONS}
 */
type StrictLoggerOptions = {
  level: LogLevel;
  transport: Transport;
};

/**
 * ロガーのデフォルトオプションです。
 */
const DEFAULT_LOGGER_OPTIONS: StrictLoggerOptions = {
  level: 'info',
  transport: new ConsoleTransport(),
};

export type {LogLevel, LoggerOptions, StrictLoggerOptions, LogMessageSupplier};
export {Logger, LogLevelSet, DEFAULT_LOGGER_OPTIONS};
