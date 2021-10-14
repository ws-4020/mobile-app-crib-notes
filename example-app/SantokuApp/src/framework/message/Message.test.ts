import {BundledMessages} from '../../generated/BundledMessages';
import {loadMessages, m} from './Message';

describe('Message message', () => {
  test('メッセージがロードされていない場合の検証', () => {
    expect(() => m('validation.required')).toThrowError(new Error('Messages was not cached.'));
  });
  test('オプションが存在しないメッセージの取得を検証', async () => {
    await loadMessages({
      load: async () => {
        return new Promise((resolve) => {
          resolve({...BundledMessages, 'msg.error.ネットワーク': 'network error.'});
        });
      },
    });
    expect(m('msg.error.ネットワーク')).toEqual('network error.');
  });
  test('オプションが存在するメッセージの取得を検証', async () => {
    await loadMessages({
      load: async () => {
        return new Promise((resolve) => {
          resolve({...BundledMessages, 'validation.required': '{0}を入力してください。'});
        });
      },
    });
    expect(m('validation.required', 'name')).toEqual('nameを入力してください。');
    expect(m('validation.required')).toEqual('{0}を入力してください。');
  });
});
