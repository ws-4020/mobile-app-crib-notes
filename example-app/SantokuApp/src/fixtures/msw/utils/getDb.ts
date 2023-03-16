import {isAdminAccount, isPartnerAccount} from './accounts';
import {db, maxDb, minDb} from '../db';

let accountId: string;

export const setDbAccount = (accId: string) => {
  accountId = accId;
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
