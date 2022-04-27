export type YearMonth = {
  year?: number;
  month?: number;
};

export type RequiredYearMonth = Required<YearMonth>;

export class YearMonthUtil {
  static now() {
    return this.fromDate(new Date());
  }

  static fromDate(date: Date) {
    return {year: date.getFullYear(), month: date.getMonth() + 1};
  }

  static isFuture(ym1: YearMonth, ym2: YearMonth) {
    if (!ym1.year || !ym1.month || !ym2.year || !ym2.month) {
      return false;
    }
    return new Date(ym1.year, ym1.month) > new Date(ym2.year, ym2.month);
  }

  static isPast(ym1: YearMonth, ym2: YearMonth) {
    if (!ym1.year || !ym1.month || !ym2.year || !ym2.month) {
      return false;
    }
    return new Date(ym1.year, ym1.month) < new Date(ym2.year, ym2.month);
  }

  static addMonth(ym: RequiredYearMonth, add: number) {
    const newMonth = ((((ym.month - 1 + add) % 12) + 12) % 12) + 1;
    const addYear = Math.floor((ym.month - 1 + add) / 12);
    return {year: ym.year + addYear, month: newMonth};
  }
}
