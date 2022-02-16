import {refreshCsrfToken} from './refreshCsrfToken';
import {BACKEND_AXIOS_INSTANCE, BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION} from './useCustomInstance';

describe('refreshCsrfToken', () => {
  test('取得したCsrfTokenがデフォルトヘッダとして設定されること', async () => {
    const spyAxiosInstance = jest.spyOn(BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION, 'get').mockResolvedValue({
      status: 200,
      data: {
        csrfTokenHeaderName: 'X-CSRF-TOKEN',
        csrfTokenValue: 'dummy',
      },
    });
    await refreshCsrfToken();
    expect(spyAxiosInstance).toBeCalledWith('/csrf_token');
    expect(BACKEND_AXIOS_INSTANCE.defaults.headers.common['X-CSRF-TOKEN']).toEqual('dummy');
  });
});
