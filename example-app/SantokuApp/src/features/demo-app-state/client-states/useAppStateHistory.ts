import {useClientState} from 'bases/react-query/utils/useClientState';

import {StateChangedEventRecord} from '../types/StateChangedEventRecord';

export const useAppStateHistory = () => {
  return useClientState<StateChangedEventRecord[]>(['demo-app-state', 'appStateHistory'], []);
};
