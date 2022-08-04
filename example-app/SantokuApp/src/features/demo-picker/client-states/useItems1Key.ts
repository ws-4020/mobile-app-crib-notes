import {useClientState} from 'bases/react-query/utils/useClientState';
import React from 'react';

export const useItems1Key = () => {
  return useClientState<React.Key>(['demo-picker', 'items1Key']);
};
