import {getAccountsMe, getAccountsMeTerms} from 'service/backend/accountService';
import {getTerms} from 'service/backend/termService';

import {loadInitialAccountDataAsync} from './initialData';
import {InitialDataError} from './initialDataError';

const axiosGetOkResponse = {status: 200, statusText: 'OK', config: {}, request: {}, headers: {}};

jest.mock('service/backend/accountService');
jest.mock('service/backend/termService');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('loadInitialAccountDataAsync', () => {
  it('利用規約が同意済みの場合', async () => {
    (getAccountsMe as jest.Mock).mockReturnValue(
      Promise.resolve({data: {accountId: '123456789', deviceTokens: []}, ...axiosGetOkResponse}),
    );
    (getAccountsMeTerms as jest.Mock).mockReturnValue(
      Promise.resolve({
        data: {
          hasAgreedValidTermsOfService: true,
          agreedTermsOfServiceVersion: '1.0.0',
        },
        ...axiosGetOkResponse,
      }),
    );
    (getTerms as jest.Mock).mockReturnValue(
      Promise.resolve({
        data: {
          latestTermsOfServiceVersion: '1.0.0',
          url: 'http://localhost',
        },
        ...axiosGetOkResponse,
      }),
    );
    await expect(loadInitialAccountDataAsync()).resolves.toEqual({
      account: {
        accountId: '123456789',
        deviceTokens: [],
      },
      terms: {
        termsOfServiceAgreementStatus: {
          hasAgreedValidTermsOfService: true,
          agreedTermsOfServiceVersion: '1.0.0',
        },
        termsOfService: undefined,
      },
    });
  });

  it('利用規約が未同意の場合', async () => {
    (getAccountsMe as jest.Mock).mockReturnValue(
      Promise.resolve({data: {accountId: '123456789', deviceTokens: []}, ...axiosGetOkResponse}),
    );
    (getAccountsMeTerms as jest.Mock).mockReturnValue(
      Promise.resolve({
        data: {
          hasAgreedValidTermsOfService: false,
          agreedTermsOfServiceVersion: '1.0.0',
        },
        ...axiosGetOkResponse,
      }),
    );
    (getTerms as jest.Mock).mockReturnValue(
      Promise.resolve({
        data: {
          latestTermsOfServiceVersion: '1.0.1',
          url: 'http://localhost',
        },
        ...axiosGetOkResponse,
      }),
    );
    await expect(loadInitialAccountDataAsync()).resolves.toEqual({
      account: {
        accountId: '123456789',
        deviceTokens: [],
      },
      terms: {
        termsOfServiceAgreementStatus: {
          hasAgreedValidTermsOfService: false,
          agreedTermsOfServiceVersion: '1.0.0',
        },
        termsOfService: {
          latestTermsOfServiceVersion: '1.0.1',
          url: 'http://localhost',
        },
      },
    });
  });
  it('初期データ取得中にエラーが発生した場合', async () => {
    (getAccountsMe as jest.Mock).mockImplementation(() => {
      throw new Error('Failed to request.');
    });
    await expect(loadInitialAccountDataAsync()).rejects.toThrowError(
      new InitialDataError('Failed to load initial account data.'),
    );
  });
});
