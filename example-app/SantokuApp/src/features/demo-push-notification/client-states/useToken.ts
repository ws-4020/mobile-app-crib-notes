import {useClientState} from 'bases/react-query/utils/useClientState';

export const useToken = () => {
  return useClientState<string>(['demo-push-notification', 'token']);
};
