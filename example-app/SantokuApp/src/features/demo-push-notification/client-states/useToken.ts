import {useClientState} from 'bases/react-query/useClientState';

export const useToken = () => {
  return useClientState<string>(['demo-push-notification', 'token']);
};
