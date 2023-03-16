import {isAdminAccount, isPartnerAccount} from './accounts';
import {db, maxDb, minDb} from '../db';

export let accountId: string;

export const setAccountId = (id: string) => {
  accountId = id;
};

export const getDb = () => {
  if (isAdminAccount(accountId)) {
    return maxDb;
  } else if (isPartnerAccount(accountId)) {
    return minDb;
  } else {
    return db;
  }
};
