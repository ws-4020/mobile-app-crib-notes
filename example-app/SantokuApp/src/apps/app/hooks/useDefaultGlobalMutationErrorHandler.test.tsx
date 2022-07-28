import {renderHook} from '@testing-library/react-native';
import {WithAccountContext} from 'apps/app/providers/WithAccountContext';
import {AxiosError} from 'axios';
import {setErrorSender} from 'bases/error/sendErrorLog';
import {WithSnackbar} from 'bases/ui/contexts/WithSnackbar';
import {useSnackbar} from 'bases/ui/contexts/useSnackbar';
import React from 'react';
import {Mutation} from 'react-query';

import {loadBundledMessagesAsync} from '../utils/loadBundledMessagesAsync';
import {useDefaultGlobalMutationErrorHandler} from './useDefaultGlobalMutationErrorHandler';

setErrorSender(jest.fn());

jest.mock('bases/ui/contexts/WithSnackbar');
jest.mock('bases/ui/contexts/useSnackbar');
jest.mock('bases/logging/utils');

const Wrapper: React.FC = ({children}) => {
  const accountData = {account: {accountId: '123456789', deviceTokens: []}};
  return <WithAccountContext accountData={accountData}>{children}</WithAccountContext>;
};

describe('useDefaultGlobalMutationErrorHandler', () => {
  const mockSnackbarShow = jest.fn();
  const axiosError = new AxiosError(
    'error',
    '',
    {},
    {},
    {
      status: 500,
      statusText: 'Internal Server Error',
      data: {message: 'message', code: 'errorCode'},
      headers: {},
      config: {},
    },
  );

  beforeAll(() => {
    (useSnackbar as jest.Mock).mockImplementation(() => ({
      show: mockSnackbarShow,
    }));
    (WithSnackbar as jest.Mock).mockReturnValue(<></>);
  });

  beforeEach(() => {
    mockSnackbarShow.mockClear();
    (useSnackbar as jest.Mock).mockClear();
    (WithSnackbar as jest.Mock).mockClear();
  });

  test('500 Internal Server Errorの場合に予期せぬエラーのスナックバーを表示', async () => {
    const mutation = {} as unknown as Mutation<unknown, unknown, unknown, unknown>;
    await loadBundledMessagesAsync();
    const {result: errorHandler} = renderHook(() => useDefaultGlobalMutationErrorHandler(), {wrapper: Wrapper});
    expect(errorHandler.current).not.toBeUndefined();
    errorHandler.current(axiosError, jest.fn(), jest.fn(), mutation);
    expect(mockSnackbarShow).toBeCalledWith(
      '予期せぬ通信エラーが発生しました。時間をおいてから再度お試しいただき、解決しない場合はお問い合わせください。',
    );
  });

  test('disableGlobalErrorHandlerが設定されている場合に何も行わない', async () => {
    const mutation = {meta: {disableGlobalErrorHandler: true}} as unknown as Mutation<
      unknown,
      unknown,
      unknown,
      unknown
    >;
    await loadBundledMessagesAsync();
    const {result: errorHandler} = renderHook(() => useDefaultGlobalMutationErrorHandler(), {wrapper: Wrapper});
    expect(errorHandler.current).not.toBeUndefined();
    errorHandler.current(axiosError, jest.fn(), jest.fn(), mutation);
    expect(mockSnackbarShow).not.toBeCalled();
  });
});