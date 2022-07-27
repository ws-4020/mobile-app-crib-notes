import React from 'react';

import {ConfigTemplate} from '../config/ConfigTemplate';
import {useConfig} from '../config/useConfig';

export const ConfigPage: React.FC = () => {
  const {info, infoKeyExtractor} = useConfig();
  return <ConfigTemplate testID="ConfigScreen" items={info} keyExtractor={infoKeyExtractor} />;
};
