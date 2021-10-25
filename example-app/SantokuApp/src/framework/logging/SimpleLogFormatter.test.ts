import {SimpleLogFormatter} from './SimpleLogFormatter';

describe('SimpleLogFormatter format', () => {
  const formatter = new SimpleLogFormatter();
  const originalDate = Date;
  const mockDate = new Date(2022, 1, 10, 13, 30, 56, 123);
  beforeAll(() => {
    // @ts-ignore コンストラクタ以外のparseやUTCなどは使用しないので警告は無視する
    global.Date = jest.fn(() => mockDate);
  });
  afterAll(() => {
    global.Date = originalDate;
  });
  test('エラーコードが指定された場合の検証', () => {
    const formatted = formatter.format('error', 'message', 'err0001');
    expect(formatted).toEqual('[2022-02-10T13:30:56.123+09:00] [error] [err0001] message');
  });
  test('エラーコードが指定されなかった場合の検証', () => {
    const formatted = formatter.format('error', 'message');
    expect(formatted).toEqual('[2022-02-10T13:30:56.123+09:00] [error] message');
  });
});
