import {AppConfig} from 'framework';
import {getGetTermsQueryKey} from 'generated/backend/terms/terms';
import {useQuery} from 'react-query';

// TODO: APIが完成するまでの暫定処理
const sleep = () => new Promise(resolve => setTimeout(resolve, 100));
const axiosGetOkResponse = {status: 200, statusText: 'OK', config: {}, request: {}, headers: {}};
const getTerms = async () => {
  await sleep();
  return {data: {latestTermsOfServiceVersion: '1.0.0', url: AppConfig.termsUrl}, ...axiosGetOkResponse};
};

const useGetTerms = () => {
  return useQuery(getGetTermsQueryKey(), getTerms);
};

export {useGetTerms, getTerms};
