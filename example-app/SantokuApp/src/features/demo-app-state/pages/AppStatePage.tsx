import React, {useEffect} from 'react';

import {useAppStateHistory} from '../client-states/useAppStateHistory';
import {AppStateTemplate} from '../components/AppStateTemplate';
import {useRegisterEventListenersUseCase} from '../use-cases/useRegisterEventListenersUseCase';

export const keyExtractor = (_: unknown, index: number) => index.toString();

export const AppStatePage: React.FC = () => {
  const [appStateHistory] = useAppStateHistory();
  const {registerEventListeners} = useRegisterEventListenersUseCase();
  useEffect(() => registerEventListeners(), [registerEventListeners]);

  return <AppStateTemplate testID="AppStateScreen" history={appStateHistory} keyExtractor={keyExtractor} />;
};
