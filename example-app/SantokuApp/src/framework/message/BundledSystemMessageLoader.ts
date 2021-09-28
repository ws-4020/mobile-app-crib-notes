import {BundledSystemMessages, BundledSystemMessagesType} from '../../generated/BundledSystemMessages';
import {SystemMessagesLoader} from './SystemMessage';

/**
 * アプリ内にバンドルされたシステムメッセージをロードするクラスです。
 */
class BundledSystemMessagesLoader implements SystemMessagesLoader<BundledSystemMessagesType> {
  load() {
    return new Promise<BundledSystemMessagesType>((resolve) => resolve(BundledSystemMessages));
  }
}

export {BundledSystemMessagesLoader};
