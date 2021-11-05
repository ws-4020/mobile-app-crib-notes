/**
 * ローカル認証（生体認証）を行うインターフェースです。
 * ユーザが有効にしているか？どの認証方法が実行可能かなどを取得し、ローカル認証を実行します。
 */
export interface LocalAuthentication {
  /**
   * 生体認証を有効にしているかどうかを取得します。
   */
  isEnrolled(): Promise<boolean>;

  /**
   * 指紋認証が有効かどうかを取得します。
   */
  isFingerPrintSupported(): Promise<boolean>;

  /**
   * 顔認証が有効かどうかを取得します。
   */
  isFacialSupported(): Promise<boolean>;

  /**
   * 虹彩認証が有効かどうかを取得します。
   */
  isIrisSupported(): Promise<boolean>;

  /**
   * 有効な生体認証を実行します。
   * @param option {@link LocalAuthenticationOption}
   */
  authenticate(option: LocalAuthenticationOption): Promise<LocalAuthenticationResult>;
}

/**
 * 認証オプションです。
 */
export class LocalAuthenticationOption {
  /**
   * 認証を促す際に表示されるメッセージです。
   */
  promptMessage?: string;

  /**
   * キャンセルボタンのラベルです。
   */
  cancelLabel?: string;

  /**
   * 認証ができないときにPINなどの代替認証を無効にするかどうかを指定します。
   */
  disableFallback?: boolean;

  /**
   * 代替手段をナビゲートするラベルです。
   */
  fallbackLabel?: string;
}

/**
 * 認証結果を表します。
 */
export class LocalAuthenticationResult {
  /**
   * 成功かどうか。
   */
  success: boolean = false;

  /**
   * 失敗時のエラーコードです。
   */
  error?: string;

  constructor(success: boolean, error?: string) {
    this.success = success;
    this.error = error;
  }
}
