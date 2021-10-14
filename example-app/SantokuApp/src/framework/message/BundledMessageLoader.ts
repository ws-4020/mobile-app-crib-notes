import {BundledMessages, BundledMessagesType} from '../../generated/BundledMessages';
import {MessagesLoader} from './Message';

/**
 * アプリ内にバンドルされたメッセージをロードするクラスです。
 */
class BundledMessagesLoader implements MessagesLoader {
  load() {
    return new Promise<BundledMessagesType>((resolve) => resolve(BundledMessages));
  }
}

export {BundledMessagesLoader};
