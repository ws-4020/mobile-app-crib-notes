import {getItem} from 'features/demo-react-query/utils/item/getItem';
import {useQuery} from 'react-query';

import {Item} from '../../types/Item';

export const useItemQuery = () => {
  // 並列クエリ
  // 商品取得APIを呼び出した後、商品種別に応じて異なるAPIで割引率を取得する
  // その後、商品の価格と割引率を入力として金額計算APIを呼び出す
  return useQuery<Item>(['item'], () => getItem(1));
};
