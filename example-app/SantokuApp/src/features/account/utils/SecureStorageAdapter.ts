import {sha256} from 'bases/crypto/utils/crypto';
import * as SecureStore from 'expo-secure-store';

const STORED_ITEM_KEYS = {
  ACTIVE_ACCOUNT_ID: 'activeAccountId',
  PASSWORD: 'password',
} as const;

// https://github.com/ws-4020/mobile-app-crib-notes/pull/640#issuecomment-984500781
const KEY_CHAIN_ACCESSIBILITY = SecureStore.WHEN_UNLOCKED;

/**
 * 指定されたアカウントIDを、アクティブなアカウントとしてセキュアストレージに格納します。
 * セキュアストレージに格納する際のオプションとして、以下を指定します。
 * ・keychainAccessible: {@link SecureStore.WHEN_UNLOCKED}
 *
 * @param accountId アカウントID
 * @see {@link https://docs.expo.dev/versions/latest/sdk/securestore/#constants}
 */
function saveActiveAccountId(accountId: string): Promise<void> {
  return SecureStore.setItemAsync(STORED_ITEM_KEYS.ACTIVE_ACCOUNT_ID, accountId, {
    keychainAccessible: KEY_CHAIN_ACCESSIBILITY,
  });
}

/**
 * 指定されたパスワードをセキュアストレージに格納します。
 * 指定されたアカウントIDをSHA256でハッシュ化して、その値をキーとしてセキュアストレージに格納します。
 *
 * セキュアストレージに格納する際のオプションとして、以下を指定します。
 * ・keychainAccessible: {@link SecureStore.WHEN_UNLOCKED}
 *
 * @param accountId アカウントID
 * @param password パスワード
 * @see {@link https://docs.expo.dev/versions/latest/sdk/securestore/#securestoreoptions}
 */
async function savePassword(accountId: string, password: string): Promise<void> {
  // ログインに利用するような項目は平文で保存しないでハッシュ化します。
  const hash = await sha256(accountId);
  return SecureStore.setItemAsync(`${hash}_${STORED_ITEM_KEYS.PASSWORD}`, password, {
    keychainAccessible: KEY_CHAIN_ACCESSIBILITY,
  });
}

/**
 * セキュアストレージからアクティブなアカウントのIDを取得します。
 * @returns セキュアストレージに存在する場合はアクティブなアカウントIDの文字列、存在しない場合はnull
 */
function loadActiveAccountId(): Promise<string | null> {
  return SecureStore.getItemAsync(STORED_ITEM_KEYS.ACTIVE_ACCOUNT_ID);
}

/**
 * セキュアストレージから指定されたアカウントIDに該当するパスワードを取得します。
 * @param accountId アカウントID
 * @returns セキュアストレージに存在する場合はパスワードの文字列、存在しない場合はnull
 */
async function loadPassword(accountId: string): Promise<string | null> {
  // ログインに利用するような項目は平文で保存しないでハッシュ化します。
  const hash = await sha256(accountId);
  return SecureStore.getItemAsync(`${hash}_${STORED_ITEM_KEYS.PASSWORD}`);
}

/**
 * セキュアストレージからアクティブなアカウントのIDを削除します。
 */
function deleteActiveAccountId(): Promise<void> {
  return SecureStore.deleteItemAsync(STORED_ITEM_KEYS.ACTIVE_ACCOUNT_ID);
}

/**
 * セキュアストレージから指定されたアカウントIDに該当するパスワードを削除します。
 * @param accountId アカウントID
 * @returns セキュアストレージに存在する場合はパスワードの文字列、存在しない場合はnull
 */
async function deletePassword(accountId: string): Promise<void> {
  // ログインに利用するような項目は平文で保存しないでハッシュ化します。
  const hash = await sha256(accountId);
  return SecureStore.deleteItemAsync(`${hash}_${STORED_ITEM_KEYS.PASSWORD}`);
}

export const SecureStorageAdapter = {
  saveActiveAccountId,
  savePassword,
  loadActiveAccountId,
  loadPassword,
  deleteActiveAccountId,
  deletePassword,
};