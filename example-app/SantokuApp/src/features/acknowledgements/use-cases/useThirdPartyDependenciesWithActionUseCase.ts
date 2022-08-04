import {useMemo} from 'react';

import {ThirdPartyDependency} from '../types/ThirdPartyDependency';

export const useThirdPartyDependenciesWithActionUseCase = (
  navigateToLicense: (dependency: ThirdPartyDependency) => void,
) => {
  // 依存パッケージの一覧は表示されるときに読み込むようにしたいので、importではなく必要に応じてrequireしています。
  // requireした場合の型はanyとなってしまいESLintエラーが発生しますが無視します。
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const thirdPartyDependencies = require('features/acknowledgements/services/ThirdPartyDependencies')
    .ThirdPartyDependencies as ThirdPartyDependency[];
  const thirdPartyDependenciesWithAction = useMemo(() => {
    return thirdPartyDependencies.map(dependency => {
      return {...dependency, onPress: () => navigateToLicense(dependency)};
    });
  }, [thirdPartyDependencies, navigateToLicense]);
  return {thirdPartyDependenciesWithAction};
};
