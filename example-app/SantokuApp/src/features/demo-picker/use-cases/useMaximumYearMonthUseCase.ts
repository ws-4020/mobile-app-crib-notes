import {YearMonthUtil} from 'bases/ui/picker/YearMonthUtil';
import {useRef} from 'react';

// 再レンダリング時に毎回YearMonthが変わらないようにRefで保持します。
// Refで保持しているため、PickerScreenを開いている間は、maximumYearMonth/minimumYearMonthは変わりません。
// 一旦前の画面に戻って、再度PickerScreenを開くと、maximumYearMonth/minimumYearMonthは更新されます。
export const useMaximumYearMonthUseCase = () => useRef(YearMonthUtil.now()).current;
