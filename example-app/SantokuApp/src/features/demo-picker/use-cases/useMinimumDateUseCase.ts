import {useRef} from 'react';

import {useMaximumDateUseCase} from './useMaximumDateUseCase';

export const useMinimumDateUseCase = () => {
  const maximumDate = useMaximumDateUseCase();
  // maximumYearMonthの5年前をminimumYearMonthとする
  return useRef(new Date(maximumDate.getFullYear() - 5, maximumDate.getMonth(), maximumDate.getDate())).current;
};
