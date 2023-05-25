import {passthrough} from 'fixtures/msw/utils/passthrough';
import {rest} from 'msw';

import {setLoggedInAccountId} from './setLoggedInAccountId';
import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';

export const postLogout = rest.post(`${backendUrl}/logout`, async (req, res, ctx) => {
  try {
    // バックエンドのAPIを呼び出す
    await passthrough(req, ctx);
  } catch {
    // passthroughでエラーハンドリングしているのでここでは何もしない
  }
  try {
    setLoggedInAccountId('');

    return delayedResponse(ctx.status(204));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
