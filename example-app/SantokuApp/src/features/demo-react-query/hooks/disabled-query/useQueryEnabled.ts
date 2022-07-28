import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useQueryEnabled = () => {
  return useClientState(['demo-react-query', 'disabled-query', 'queryEnabled'], false);
};
