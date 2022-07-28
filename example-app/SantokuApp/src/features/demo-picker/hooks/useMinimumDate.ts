import {useRef} from 'react';

import {useMaximumDate} from './useMaximumDate';

export const useMinimumDate = () => {
  const maximumDate = useMaximumDate();
  // maximumYearMonthの5年前をminimumYearMonthとする
  return useRef(new Date(maximumDate.getFullYear() - 5, maximumDate.getMonth(), maximumDate.getDate())).current;
};
