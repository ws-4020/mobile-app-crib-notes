import {useClientState} from 'bases/react-query/useClientState';

export const useMainTabShown = () => {
  return useClientState<boolean>(['mainTabNav', 'shown'], true);
};
