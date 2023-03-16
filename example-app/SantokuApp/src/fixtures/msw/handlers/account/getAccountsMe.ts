import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {accountId, getDb} from '../../utils/dbManager';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';

export const getAccountsMe = rest.get(`${backendUrl}/accounts/me`, (req, res, ctx) => {
  try {
    const db = getDb();
    const account = db.account.findFirst({where: {accountId: {equals: accountId}}});
    return delayedResponse(ctx.json(account), ctx.delay(100));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
