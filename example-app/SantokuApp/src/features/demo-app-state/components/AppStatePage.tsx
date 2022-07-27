import React from 'react';

import {useAppStateHistory} from '../hooks/useAppStateHistory';
import {useRegisterEventListenersUseCase} from '../hooks/useRegisterEventListenersUseCase';
import {historyKeyExtractor} from '../utils/historyKeyExtractor';
import {AppStateTemplate} from './AppStateTemplate';

export const AppStatePage: React.FC = () => {
  const [appStateHistory] = useAppStateHistory();
  useRegisterEventListenersUseCase();

  return <AppStateTemplate testID="AppStateScreen" history={appStateHistory} keyExtractor={historyKeyExtractor} />;
};
