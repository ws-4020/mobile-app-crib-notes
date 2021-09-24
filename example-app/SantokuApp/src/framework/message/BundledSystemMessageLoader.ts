import {BundledSystemMessages} from '../../generated/BundledSystemMessages';
import {SystemMessagesLoader} from './SystemMessage';

/**
 * アプリ内にバンドルされたシステムメッセージをロードするクラスです。
 */
class BundledSystemMessagesLoader implements SystemMessagesLoader<typeof BundledSystemMessages> {
  load() {
    return BundledSystemMessages;
  }
}

export {BundledSystemMessagesLoader};
