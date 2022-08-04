import {useRef} from 'react';

// 再レンダリング時に毎回日時が変わらないようにRefで保持します。
// Refで保持しているため、PickerScreenを開いている間は、maximumDate/minimumDateは変わりません。
// 一旦前の画面に戻って、再度PickerScreenを開くと、maximumDate/minimumDateは更新されます。
export const useMaximumDateUseCase = () => useRef(new Date()).current;
