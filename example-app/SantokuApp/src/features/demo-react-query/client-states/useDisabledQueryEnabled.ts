import {useClientState} from 'bases/react-query/useClientState';

export const useDisabledQueryEnabled = () => {
  return useClientState(['demo-react-query', 'disabled-query', 'queryEnabled'], false);
};
