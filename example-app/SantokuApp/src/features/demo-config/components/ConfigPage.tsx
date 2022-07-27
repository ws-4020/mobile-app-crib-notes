import React from 'react';

import {info} from '../constants/info';
import {infoKeyExtractor} from '../utils/infoKeyExtractor';
import {ConfigTemplate} from './ConfigTemplate';

export const ConfigPage: React.FC = () => {
  return <ConfigTemplate testID="ConfigScreen" items={info} keyExtractor={infoKeyExtractor} />;
};
