import {useQuery} from 'react-query';
import {getAmount, getItem, getItemType0, getItemType1, Item, ItemRate} from 'service';

const useDependentQueryDemo1 = () => {
  // 並列クエリ
  // 商品取得APIを呼び出した後、商品種別に応じて異なるAPIで割引率を取得する
  // その後、商品の価格と割引率を入力として金額計算APIを呼び出す
  const itemQuery = useQuery<Item>(['item'], getItem);

  const itemType0Query = useQuery<ItemRate>(['itemType0', itemQuery.data], () => getItemType0(itemQuery.data!), {
    enabled: itemQuery.isSuccess && itemQuery.data.type === 0,
  });
  const itemType1Query = useQuery<ItemRate>(['itemType1', itemQuery.data], () => getItemType1(itemQuery.data!), {
    enabled: itemQuery.isSuccess && itemQuery.data.type === 1,
  });

  const rate =
    itemQuery.isSuccess && itemType0Query.isSuccess
      ? itemType0Query.data.rate
      : itemQuery.isSuccess && itemType1Query.isSuccess
      ? itemType1Query.data.rate
      : undefined;
  const amountReq = itemQuery.data && rate ? {price: itemQuery.data.price, rate} : undefined;
  const amountQuery = useQuery(['amount', amountReq], () => getAmount(amountReq!), {
    enabled: !!amountReq,
  });

  // 並列で実行したクエリの総合的な結果をもとに画面描画を切り替える場合はそれぞれのクエリのstatusを統合する
  const queryResults = [itemQuery, itemType0Query, itemType1Query, amountQuery];
  const isIdle = queryResults.every(query => query.isIdle);
  const isLoading = queryResults.some(query => query.isLoading);
  const isFetching = queryResults.some(query => query.isFetching);
  const isSuccess = queryResults.every(query => query.isSuccess);
  const isError = queryResults.some(query => query.isError);

  return {
    result: {
      ...itemQuery.data,
      rate,
      amount: amountQuery.data,
    },
    isIdle,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    refetch: itemQuery.refetch,
  };
};

export {useDependentQueryDemo1};
