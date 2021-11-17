import * as SecureStore from 'expo-secure-store';

import {sha256} from '../utilities/crypto';

const STORED_ITEM_KEYS = {
  ACTIVE_ACCOUNT_ID: 'activeAccountId',
} as const;

function saveActiveAccountId(accountId: string): Promise<void> {
  return SecureStore.setItemAsync(STORED_ITEM_KEYS.ACTIVE_ACCOUNT_ID, accountId, {
    keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
  });
}

async function savePassword(accountId: string, password: string): Promise<void> {
  const hash = await sha256(accountId);
  return SecureStore.setItemAsync(hash, password, {
    keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    keychainService: hash,
  });
}

function loadActiveAccountId(): Promise<string | null> {
  return SecureStore.getItemAsync(STORED_ITEM_KEYS.ACTIVE_ACCOUNT_ID);
}

async function loadPassword(accountId: string): Promise<string | null> {
  const hash = await sha256(accountId);
  return SecureStore.getItemAsync(hash, {
    keychainService: hash,
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
