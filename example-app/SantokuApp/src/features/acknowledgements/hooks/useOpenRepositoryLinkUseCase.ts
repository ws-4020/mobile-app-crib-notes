import {log} from 'bases/logging/utils';
import {useCallback} from 'react';
import {Linking} from 'react-native';

import {ThirdPartyDependency} from '../types/ThirdPartyDependency';

export const useOpenRepositoryLinkUseCase = (dependency: ThirdPartyDependency) => {
  const openRepositoryLink = useCallback(async () => {
    if (dependency.repository) {
      // FIXME: AndroidでLinking.canOpenURL('https://github.com/〜')がfalseを返してしまうため、
      //        canOpenURLはチェックせずに直接openURLを呼び出しています。
      await Linking.openURL(dependency.repository).catch(e => {
        log.trace(() => `Cannot open repository url (${dependency.repository ?? ''})`);
        log.trace(() => `Reason: ${JSON.stringify(e)}`);
      });
    }
  }, [dependency.repository]);
  return {openRepositoryLink};
};