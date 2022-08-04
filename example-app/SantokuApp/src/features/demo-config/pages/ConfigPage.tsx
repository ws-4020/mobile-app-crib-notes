import React from 'react';

import {ConfigTemplate} from '../components/ConfigTemplate';
import {info} from '../constants/info';
import {infoKeyExtractor} from '../utils/infoKeyExtractor';

export const ConfigPage: React.FC = () => {
  return <ConfigTemplate testID="ConfigScreen" items={info} keyExtractor={infoKeyExtractor} />;
};
