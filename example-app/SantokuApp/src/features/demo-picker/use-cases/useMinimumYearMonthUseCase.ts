import {YearMonthUtil} from 'bases/ui/utils/YearMonthUtil';
import {useRef} from 'react';

import {useMaximumYearMonthUseCase} from './useMaximumYearMonthUseCase';

export const useMinimumYearMonthUseCase = () => {
  const maximumYearMonth = useMaximumYearMonthUseCase();
  // maximumYearMonthの5年前をminimumYearMonthとする
  return useRef(YearMonthUtil.addMonth(maximumYearMonth, -60)).current;
};
