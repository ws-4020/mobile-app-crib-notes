/**
 * 入力された値が最大値より大きい場合、整形(最大値の末尾に+を付与)した値を返す。
 * 最大値より小さい場合、入力された値を返す。
 * @param value 整形したい値
 * @param maxValue 最大値
 * @returns 整形後の値
 */

export function tryAddPlus(value: number, maxValue: number): string {
  if (value <= maxValue) {
    return value.toString();
  }
  return maxValue.toString() + '+';
}
