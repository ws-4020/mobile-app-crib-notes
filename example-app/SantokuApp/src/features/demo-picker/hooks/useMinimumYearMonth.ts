import {YearMonthUtil} from 'bases/ui/utils/YearMonthUtil';
import {useRef} from 'react';

import {useMaximumYearMonth} from './useMaximumYearMonth';

export const useMinimumYearMonth = () => {
  const maximumYearMonth = useMaximumYearMonth();
  // maximumYearMonthの5年前をminimumYearMonthとする
  return useRef(YearMonthUtil.addMonth(maximumYearMonth, -60)).current;
};
