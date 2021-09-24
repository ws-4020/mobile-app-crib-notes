import {SystemErrorCode} from 'generated/BundledSystemMessages';

import {loadSystemMessages, m, SystemMessagesLoader} from './SystemMessage';

describe('SystemMessage systemMessage', () => {
  test('メッセージがロードされていない場合の検証', () => {
    expect(() => m('errors.webview.networkError')).toThrowError(new Error('System messages was not cached.'));
  });
  test('メッセージが取得できることの検証', () => {
    const mockLoader = jest
      .fn<SystemMessagesLoader<{[key in SystemErrorCode]: string}>, []>()
      .mockImplementation(() => {
        return {
          load: () => {
            return {
              'errors.webview.networkError': 'error message.',
            };
          },
        };
      });
    loadSystemMessages(mockLoader());
    expect(m('errors.webview.networkError')).toEqual('error message.');
  });
});
