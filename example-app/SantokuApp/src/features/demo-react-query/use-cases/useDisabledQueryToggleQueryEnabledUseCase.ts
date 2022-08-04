import {useCallback} from 'react';

import {useDisabledQueryEnabled} from '../client-states/useDisabledQueryEnabled';

export const useDisabledQueryToggleQueryEnabledUseCase = () => {
  const [, setQueryEnabled] = useDisabledQueryEnabled();
  const toggleQueryEnabled = useCallback(() => {
    setQueryEnabled(prevValue => !prevValue);
  }, [setQueryEnabled]);
  return {toggleQueryEnabled};
};
