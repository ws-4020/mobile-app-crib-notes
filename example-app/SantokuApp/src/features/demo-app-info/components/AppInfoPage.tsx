import React from 'react';

import {info} from '../constants/info';
import {infoKeyExtractor} from '../utils/infoKeyExtractor';
import {AppInfoTemplate} from './AppInfoTemplate';

export const AppInfoPage: React.FC = () => {
  return <AppInfoTemplate testID="AppInfoScreen" items={info} keyExtractor={infoKeyExtractor} />;
};
