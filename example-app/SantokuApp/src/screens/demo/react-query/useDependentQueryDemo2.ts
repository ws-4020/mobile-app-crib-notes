import {useQuery} from 'react-query';
import {getItemInfo} from 'service';

const useDependentQueryDemo2 = () => {
  const itemNo: number = 0;
  // 並列クエリ
  // 商品取得APIを呼び出した後、商品種別に応じて異なるAPIで割引率を取得する
  // その後、商品の価格と割引率を入力として金額計算APIを呼び出す
  const query = useQuery(['itemInfo', itemNo], () => getItemInfo(itemNo));
  return {
    ...query,
    result: {
      ...query.data,
    },
  };
};

export {useDependentQueryDemo2};
