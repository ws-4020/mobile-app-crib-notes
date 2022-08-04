import React, {useEffect} from 'react';

import {useAppStateHistory} from '../client-states/useAppStateHistory';
import {AppStateTemplate} from '../components/AppStateTemplate';
import {useRegisterEventListenersUseCase} from '../use-cases/useRegisterEventListenersUseCase';
import {historyKeyExtractor} from '../utils/historyKeyExtractor';

export const AppStatePage: React.FC = () => {
  const [appStateHistory] = useAppStateHistory();
  const {registerEventListeners} = useRegisterEventListenersUseCase();
  useEffect(() => registerEventListeners(), [registerEventListeners]);

  return <AppStateTemplate testID="AppStateScreen" history={appStateHistory} keyExtractor={historyKeyExtractor} />;
};
