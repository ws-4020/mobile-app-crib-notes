import React from 'react';

import {AppInfoTemplate} from '../components/AppInfoTemplate';
import {info} from '../constants/info';
import {infoKeyExtractor} from '../utils/infoKeyExtractor';

export const AppInfoPage: React.FC = () => {
  return <AppInfoTemplate testID="AppInfoScreen" items={info} keyExtractor={infoKeyExtractor} />;
};
