import {Account} from 'generated/backend/model';
import {getAccountsMe} from 'service';

import {InitialDataError} from './initialDataError';

type TermsAgreement = {
  hasAgreedValidTermsOfService: boolean;
  agreedTermsOfServiceVersion: string;
};

export type InitialData = {
  account?: Account;
  terms?: TermsAgreement;
};

const loadInitialAccountDataAsync = async (): Promise<InitialData> => {
  try {
    const account = (await getAccountsMe()).data;
    const terms = await getAccountMeTerms();
    return {
      account,
      terms,
    };
  } catch (e) {
    throw new InitialDataError('Failed to load initial account data.', e);
  }
};

// OpenAPI generatorで生成されたコードを導入するまでの一時的なMock
// TODO: 後で、ローカルストレージから取得するように変更する
const getAccountMeTerms = async () => {
  return await new Promise<TermsAgreement>(resolve =>
    setTimeout(
      () =>
        resolve({
          hasAgreedValidTermsOfService: false,
          agreedTermsOfServiceVersion: '1.0.0',
        }),
      100,
    ),
  );
};

export {loadInitialAccountDataAsync};
