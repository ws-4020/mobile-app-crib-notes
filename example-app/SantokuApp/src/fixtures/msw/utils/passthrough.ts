import {MockedRequest, RestContext} from 'msw';

import {ApplicationError} from '../../../bases/core/errors/ApplicationError';

type passthroughApis = 'postSignup' | 'postLogin' | 'postLogout' | 'postAccountsMeDeviceToken' | 'getSystemCsrfToken';
export const passthroughApiErrors: {[key in passthroughApis]: unknown[]} = {
  postSignup: [],
  postLogin: [],
  postLogout: [],
  postAccountsMeDeviceToken: [],
  getSystemCsrfToken: [],
};

export const initializePassthroughApiErrors = () => {
  Object.values(passthroughApiErrors).forEach(errors => errors.splice(0));
};

/**
 * オリジナルの通信先にバイバスします。
 *
 * - ステータスコードが200番台の場合は、{@link Response}を返却
 * - ステータスコードが200番台以外の場合は、{@link ApplicationError}をthrow
 * - ネットワークエラーなど、レスポンスが存在しない場合はctx.fetchからthrowされたエラーをそのままthrow
 */
export const passthrough = async (passthroughApi: passthroughApis, req: MockedRequest, ctx: RestContext) => {
  let response: Response;
  try {
    // ctx.fetchは、`node-fetch`を使用している
    // https://mswjs.io/docs/api/context/fetch#nodejs-compatibility
    response = await ctx.fetch(req);
  } catch (e) {
    // ネットワークエラーなど、レスポンスが返却されない場合
    handleError(passthroughApi, e, String(e));
    throw e;
  }
  // ステータスコードが200番台の場合は、処理成功とする（300番台は現状使用していないのと、今後もMSWでpassthroughする想定はない）
  // https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
  if (response.ok) {
    return response;
  } else {
    handleError(passthroughApi, response, JSON.stringify(response, null, 2));
    throw new ApplicationError(response);
  }
};

const handleError = (passthroughApi: passthroughApis, cause: unknown, causeString: string) => {
  console.warn(`Failed to passthrough to original request. passthroughApi = ${passthroughApi}. cause = ${causeString}`);
  passthroughApiErrors[passthroughApi] = [...passthroughApiErrors[passthroughApi], cause];
};
