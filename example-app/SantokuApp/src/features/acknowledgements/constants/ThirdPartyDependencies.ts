import {ThirdPartyDependency} from '../types/ThirdPartyDependency';

const generateDummyDependency = (num: number) => {
  return [...Array(num)].map((_, index) => {
    return {
      id: `dummy-dependency-${index}@${index}`,
      name: `dummy-dependency-${index}`,
      version: `${index}.0.0`,
      repository: `https://example.com/repository/dummy-dependency-${index}`,
      licenses: 'Apache-2.0',
      licenseFileName: 'LICENSE',
      licenseContentModuleId: require('../../../assets/dummy/dummy.license.txt'),
      noticeFileName: 'NOTICE',
      noticeContentModuleId: require('../../../assets/dummy/dummy.notice.txt'),
    };
  });
};

// `.script/generate-acknowledgements-file.js`の実行でこの定義は更新されることを想定しています。
export const ThirdPartyDependencies: ThirdPartyDependency[] = generateDummyDependency(400);
