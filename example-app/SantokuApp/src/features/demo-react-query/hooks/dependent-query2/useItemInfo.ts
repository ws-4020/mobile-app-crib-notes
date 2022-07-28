import {useQuery} from 'react-query';

import {getItemInfo} from '../../utils/item/getItemInfo';

export const useItemInfo = () => {
  return useQuery(['itemInfo'], () => getItemInfo(1));
};
