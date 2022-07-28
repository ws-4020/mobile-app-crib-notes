import AsyncStorage from '@react-native-async-storage/async-storage';
import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';
import {useMutation} from 'react-query';

// TODO: APIが完成するまでの暫定処理
//       利用規約の同意状態をローカルストレージに保存する。
const axiosPostOkResponse = {status: 201, statusText: 'Created', config: {}, request: {}, headers: {}};
const sleep = () => new Promise(resolve => setTimeout(resolve, 100));
export const usePostAccountsMeTerms = () => {
  return useMutation('accountService#usePostAccountsMeTerms', async (data: TermsOfServiceAgreementStatus) => {
    await sleep();
    await AsyncStorage.setItem(
      'TermsOfServiceAgreementStatus',
      JSON.stringify({
        ...data,
        createdAt: new Date(),
      }),
    );
    return {
      data,
      ...axiosPostOkResponse,
    };
  });
};
