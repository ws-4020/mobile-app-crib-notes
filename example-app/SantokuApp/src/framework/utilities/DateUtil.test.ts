import {DateUtil} from './DateUtil';

describe('DateUtil format', () => {
  const date = new Date(2021, 10, 22, 12, 34, 56, 123);
  test('フォーマットとタイムゾーンを指定しない場合の検証', () => {
    const formatted = DateUtil.format(date);
    expect(formatted).toEqual('2021-11-22T12:34:56.123+09:00');
  });
  test('フォーマットとタイムゾーンを指定した場合の検証', () => {
    const formatted = DateUtil.format(date, 'YYYYMMDD hh', 'UTC');
    expect(formatted).toEqual('20211122 03');
  });
});
