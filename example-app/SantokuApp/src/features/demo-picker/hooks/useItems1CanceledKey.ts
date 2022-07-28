import {useClientState} from 'bases/react-query/hooks/useClientState';
import React from 'react';

// キャンセルをタップした時に、Pickerを開く前の値に戻せるようにRefで保持しておきます。
export const useItems1CanceledKey = () => {
  return useClientState<React.Key>(['demo-picker', 'items1CanceledKey']);
};
