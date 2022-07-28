/**
 * サインアップします。
 * @param nickname ニックネーム
 * @param password パスワード
 * @returns アカウント
 */

import {useMutation} from 'react-query';

import {signup} from '../utils/auth/signup';

export const useSignup = () => {
  return useMutation((arg: {nickname: string; password: string}) => signup(arg.nickname, arg.password));
};
