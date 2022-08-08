import {useClientState} from 'bases/react-query/useClientState';
import React from 'react';

export const useItems1Key = () => {
  return useClientState<React.Key>(['demo-picker', 'items1Key']);
};
