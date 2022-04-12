import {AppConfig} from 'framework';
import {useGetTerms} from 'generated/backend/terms/terms';

// TODO: APIが完成するまでの暫定処理
const sleep = () => new Promise(resolve => setTimeout(resolve, 100));
const axiosGetOkResponse = {status: 200, statusText: 'OK', config: {}, request: {}, headers: {}};
const getTerms = async () => {
  await sleep();
  return {data: {latestTermsOfServiceVersion: '1.0.0', url: AppConfig.termsUrl}, ...axiosGetOkResponse};
};

export {useGetTerms, getTerms};
