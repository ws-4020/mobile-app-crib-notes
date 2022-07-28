import {Item} from '../../types/Item';
import {getRandomInt} from './getRandomInt';

// 商品取得API
export const getItem = async (id: number) => {
  return new Promise<Item>(resolve => {
    setTimeout(() => {
      resolve({id, name: `item-${id}`, type: getRandomInt(2), price: getRandomInt(1000)});
    }, 1000);
  });
};
