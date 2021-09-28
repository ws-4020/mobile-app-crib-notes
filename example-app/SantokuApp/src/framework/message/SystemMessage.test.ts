import {loadSystemMessages, m} from './SystemMessage';

describe('SystemMessage systemMessage', () => {
  test('メッセージがロードされていない場合の検証', () => {
    expect(() => m('errors.webview.networkError')).toThrowError(new Error('System messages was not cached.'));
  });
  test('メッセージが取得できることの検証', () => {
    loadSystemMessages({
      load: () => {
        return {
          'errors.webview.networkError': 'error message.',
        };
      },
    });
    expect(m('errors.webview.networkError')).toEqual('error message.');
  });
});
