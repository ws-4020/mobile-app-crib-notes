import {ACKNOWLEDGEMENT_ITEM_HEIGHT} from '../constants/AcknowledgementItemHeight';

export const getItemLayoutUseCase = (_: unknown, index: number) => ({
  length: ACKNOWLEDGEMENT_ITEM_HEIGHT,
  offset: ACKNOWLEDGEMENT_ITEM_HEIGHT * index,
  index,
});
