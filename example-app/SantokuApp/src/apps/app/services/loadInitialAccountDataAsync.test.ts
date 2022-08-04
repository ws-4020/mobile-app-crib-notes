import {getAccountsMeTerms} from 'features/account/utils/auth/getAccountsMeTerms';
import {getAccountsMe} from 'features/backend/apis/account/account';
import {getTerms} from 'features/terms/utils/getTerms';

import {InitialDataError} from '../errors/initialDataError';
import {loadInitialAccountDataAsync} from './loadInitialAccountDataAsync';

const axiosGetOkResponse = {status: 200, statusText: 'OK', config: {}, request: {}, headers: {}};

jest.mock('features/backend/apis/account/account');
jest.mock('features/account/utils/auth/getAccountsMeTerms');
jest.mock('features/terms/utils/getTerms');

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
          hasAgreed: true,
          agreedVersion: '1.0.0',
        },
        ...axiosGetOkResponse,
      }),
    );
    (getTerms as jest.Mock).mockReturnValue(
      Promise.resolve({
        data: {
          version: '1.0.0',
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
        termsAgreementStatus: {
          hasAgreed: true,
          agreedVersion: '1.0.0',
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
          hasAgreed: false,
          agreedVersion: '1.0.0',
        },
        ...axiosGetOkResponse,
      }),
    );
    (getTerms as jest.Mock).mockReturnValue(
      Promise.resolve({
        data: {
          version: '1.0.1',
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
        termsAgreementStatus: {
          hasAgreed: false,
          agreedVersion: '1.0.0',
        },
        termsOfService: {
          version: '1.0.1',
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
