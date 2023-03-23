import {tryAddPlus} from './tryAddPlus';

describe('tryAddPlus', () => {
  test('整形された値が取得できるかの検証', () => {
    const maxValue = 999;
    const value = tryAddPlus(999, maxValue);
    expect(value).toEqual('999');

    const formatedValue = tryAddPlus(1000, maxValue);
    expect(formatedValue).toEqual('999+');
  });
});
