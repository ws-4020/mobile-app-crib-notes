// テストケースとして必要なバックスラッシュなのでESLintチェック（prettier/prettier）から除外
/* eslint-disable prettier/prettier */
import {loginPasswordValidator} from './loginPasswordValidator';

describe('loginPasswordValidator', () => {
  // 正常
  it('既存正常系', () => {
    expect(loginPasswordValidator('ABCabc12')).toBe(true);
  });
  it('半角数字のみの場合OK', () => {
    expect(loginPasswordValidator('123456789')).toBe(true);
  });
  it('半角小文字英字のみの場合OK', () => {
    expect(loginPasswordValidator('abcdefghijk')).toBe(true);
  });
  it('半角大文字英字のみの場合OK', () => {
    expect(loginPasswordValidator('ABCDEFGHIJK')).toBe(true);
  });
  it('半角小文字英数字のみの場合OK', () => {
    expect(loginPasswordValidator('12345abcde')).toBe(true);
  });
  it('半角大文字英数字のみの場合OK', () => {
    expect(loginPasswordValidator('12345ABCBE')).toBe(true);
  });
  it('半角大文字小文字英字のみの場合OK', () => {
    expect(loginPasswordValidator('ABCDEfghijk')).toBe(true);
  });
  it('許可記号のみの場合OK', () => {
    // 正規表現として必要なバックスラッシュのためESLintチェックから除外する
    // eslint-disable-next-line no-useless-escape
    expect(loginPasswordValidator('?\-“!@#%&/,><\’:;|_~`\+-=')).toBe(true);
  });
  it('半角記号数字のみの場合OK', () => {
    expect(loginPasswordValidator('+-*/=!12345')).toBe(true);
  });
  it('半角記号小文字英字のみの場合OK', () => {
    expect(loginPasswordValidator('+-*/=&%asfcb')).toBe(true);
  });
  it('半角記号大文字英字のみの場合OK', () => {
    expect(loginPasswordValidator('#$%&;:ABCDE')).toBe(true);
  });
  it('半角記号数字小文字英字のみの場合OK', () => {
    expect(loginPasswordValidator('+-*/=!12345abcd')).toBe(true);
  });
  it('半角記号数字大文字英字のみの場合OK', () => {
    expect(loginPasswordValidator('+-*/=&%1234ABCD')).toBe(true);
  });
  it('半角記号大文字小文字英字のみの場合OK', () => {
    expect(loginPasswordValidator('#$%&;:ABCDEfghtj')).toBe(true);
  });
  it('半角数字大文字小文字英字のみの場合OK', () => {
    expect(loginPasswordValidator('1234ABCDEfghij')).toBe(true);
  });
  it('半角記号大文字小文字英数字のみの場合OK', () => {
    expect(loginPasswordValidator('#$%&;:ABCDEfghi1234')).toBe(true);
  });

  // 異常
  it('全角数字の場合NG', () => {
    expect(loginPasswordValidator('１２３３４５６７')).toBe(false);
  });
  it('全角小文字英字の場合NG', () => {
    expect(loginPasswordValidator('ａｂｃｄｅｆ')).toBe(false);
  });
  it('全角大文字英字の場合NG', () => {
    expect(loginPasswordValidator('ＡＢＣＤＥＦＧ')).toBe(false);
  });
  it('全角ひらがなの場合NG', () => {
    expect(loginPasswordValidator('あいうえお')).toBe(false);
  });
  it('全角カタカナの場合NG', () => {
    expect(loginPasswordValidator('アイウエオ')).toBe(false);
  });
  it('全角記号の場合NG', () => {
    expect(loginPasswordValidator('！＃＄％＆＋ー')).toBe(false);
  });
  it('全角漢字の場合NG', () => {
    expect(loginPasswordValidator('会津財布')).toBe(false);
  });
  it('サロゲートペア（絵文字）の場合はNG', () => {
    expect(loginPasswordValidator('😀')).toBe(false);
  });
  it('サロゲートペア（漢字）の場合はNG', () => {
    expect(loginPasswordValidator('𩸽')).toBe(false);
  });

  // 混合異常系
  it('全角数字混ざりの場合NG', () => {
    expect(loginPasswordValidator('123４567')).toBe(false);
  });

  it('全角小文字英字混ざりの場合NG', () => {
    expect(loginPasswordValidator('abcｄefg')).toBe(false);
  });
  it('全角大文字英字混ざりの場合NG', () => {
    expect(loginPasswordValidator('ABCＤFGH')).toBe(false);
  });
  it('全角ひらがな混ざりの場合NG', () => {
    expect(loginPasswordValidator('123う567')).toBe(false);
  });
  it('全角カタカナ混ざりの場合NG', () => {
    expect(loginPasswordValidator('ア234abcd')).toBe(false);
  });
  it('全角記号混ざりの場合NG', () => {
    expect(loginPasswordValidator('！＃＄2364l＋ー')).toBe(false);
  });
  it('全角漢字混ざりの場合NG', () => {
    expect(loginPasswordValidator('1go1会')).toBe(false);
  });
  it('サロゲートペア（絵文字）混ざりの入力はNG', () => {
    expect(loginPasswordValidator('1234😀678')).toBe(false);
  });
  it('サロゲートペア（漢字）混ざりの入力はNG', () => {
    expect(loginPasswordValidator('1234𩸽678')).toBe(false);
  });
});
