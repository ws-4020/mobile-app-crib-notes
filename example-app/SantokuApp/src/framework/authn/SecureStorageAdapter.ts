import * as SecureStore from 'expo-secure-store';

const STORED_ITEM_KEYS = {
  ACTIVE_ACCOUNT_ID: 'activeAccountId',
  PASSWORD: 'password',
} as const;

function saveActiveAccountId(accountId: string): Promise<void> {
  return SecureStore.setItemAsync(STORED_ITEM_KEYS.ACTIVE_ACCOUNT_ID, accountId, {
    keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
  });
}

function savePassword(accountId: string, password: string): Promise<void> {
  return SecureStore.setItemAsync(STORED_ITEM_KEYS.PASSWORD, password, {
    keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    keychainService: accountId,
  });
}

function loadActiveAccountId(): Promise<string | null> {
  return SecureStore.getItemAsync(STORED_ITEM_KEYS.ACTIVE_ACCOUNT_ID);
}

function loadPassword(accountId: string): Promise<string | null> {
  return SecureStore.getItemAsync(STORED_ITEM_KEYS.PASSWORD, {
    keychainService: accountId,
  });
}

function deleteActiveAccountId(): Promise<void> {
  return SecureStore.deleteItemAsync(STORED_ITEM_KEYS.ACTIVE_ACCOUNT_ID);
}

export const SecureStorageAdapter = {
  saveActiveAccountId,
  savePassword,
  loadActiveAccountId,
  loadPassword,
  deleteActiveAccountId,
};
