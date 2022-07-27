import React from 'react';

import {AppInfoTemplate} from '../info/AppInfoTemplate';
import {useAppInfo} from '../info/useAppInfo';

export const AppInfoPage: React.FC = () => {
  const {info, infoKeyExtractor} = useAppInfo();
  return <AppInfoTemplate testID="AppInfoScreen" items={info} keyExtractor={infoKeyExtractor} />;
};
