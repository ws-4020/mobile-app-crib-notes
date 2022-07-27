import React, {useEffect} from 'react';

import {useAppStateHistory} from '../hooks/useAppStateHistory';
import {useRegisterEventListenersUseCase} from '../hooks/useRegisterEventListenersUseCase';
import {historyKeyExtractor} from '../utils/historyKeyExtractor';
import {AppStateTemplate} from './AppStateTemplate';

export const AppStatePage: React.FC = () => {
  const [appStateHistory] = useAppStateHistory();
  const {registerEventListeners} = useRegisterEventListenersUseCase();
  useEffect(() => registerEventListeners(), [registerEventListeners]);

  return <AppStateTemplate testID="AppStateScreen" history={appStateHistory} keyExtractor={historyKeyExtractor} />;
};
