import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useToken = () => {
  return useClientState<string>(['demo-push-notification', 'token']);
};
