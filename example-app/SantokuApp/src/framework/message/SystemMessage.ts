import {SystemErrorCode} from '../../generated/BundledSystemMessages';

/**
 * システムメッセージをロードします。
 */
interface SystemMessagesLoader<T extends Record<SystemErrorCode, string>> {
  load(): T;
}

let cache: Record<string, string> | undefined;

/**
 * システムメッセージをロードします。
 * @param loader システムメッセージをロードするクラス
 */
function loadSystemMessages(loader: SystemMessagesLoader<Record<SystemErrorCode, string>>) {
  cache = loader.load();
}

/**
 * システムメッセージを取得します。
 * {@link loadSystemMessages}を呼び出してして、システムメッセージをロード後に使用してください。
 * @param key システムメッセージのキー
 * @param options システムメッセージのオプション
 */
function systemMessage(key: SystemErrorCode, ...options: string[]): string {
  if (!cache) {
    throw new Error('System messages was not cached.');
  }
  return cache[key];
}

export type {SystemMessagesLoader};
export {systemMessage as m, loadSystemMessages};
