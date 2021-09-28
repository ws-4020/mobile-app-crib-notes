import {SystemMessageKey} from '../../generated/BundledSystemMessages';

/**
 * システムメッセージをロードします。
 */
interface SystemMessagesLoader<T extends Record<SystemMessageKey, string>> {
  load(): Promise<T>;
}

let cache: Record<string, string> | undefined;

/**
 * システムメッセージをロードします。
 * @param loader システムメッセージをロードするクラス
 */
async function loadSystemMessages(loader: SystemMessagesLoader<Record<SystemMessageKey, string>>) {
  cache = await loader.load();
}

/**
 * システムメッセージを取得します。
 * {@link loadSystemMessages}を呼び出してして、システムメッセージをロード後に使用してください。
 * @param key システムメッセージのキー
 * @param options システムメッセージのオプション
 */
function systemMessage(key: SystemMessageKey, ...options: string[]): string {
  if (!cache) {
    throw new Error('System messages was not cached.');
  }
  return cache[key];
}

export type {SystemMessagesLoader};
export {systemMessage as m, loadSystemMessages};
