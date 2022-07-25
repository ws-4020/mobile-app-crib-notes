import {bundledMessages} from '../constants/BundledMessages';
import {BundledMessagesType} from '../types';
import {MessagesLoader} from './Message';

/**
 * アプリ内にバンドルされたメッセージをロードするクラスです。
 */
class BundledMessagesLoader implements MessagesLoader {
  load() {
    return new Promise<BundledMessagesType>(resolve => resolve(bundledMessages));
  }
}

export {BundledMessagesLoader};
