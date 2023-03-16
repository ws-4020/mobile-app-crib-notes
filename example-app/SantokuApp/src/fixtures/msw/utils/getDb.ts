import {isAdminAccount, isPartnerAccount} from './accounts';
import {db, maxDb, minDb} from '../db';

export let dbUser: string;

export const setDbName = (accountId: string) => {
  dbUser = accountId;
};

export const getDb = () => {
  if (isAdminAccount(dbUser)) {
    return maxDb;
  } else if (isPartnerAccount(dbUser)) {
    return minDb;
  } else {
    return db;
  }
};
