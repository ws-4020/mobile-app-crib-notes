import {useCallback} from 'react';

import {useQueryEnabled} from './useQueryEnabled';

export const useToggleQueryEnabledUseCase = () => {
  const [, setQueryEnabled] = useQueryEnabled();
  const toggleQueryEnabled = useCallback(() => {
    setQueryEnabled(prevValue => !prevValue);
  }, [setQueryEnabled]);
  return {toggleQueryEnabled};
};
