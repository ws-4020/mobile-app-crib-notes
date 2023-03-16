import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {accountId, getDb} from '../../utils/dbManager';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';

export const getAccountsMeTerms = rest.get(`${backendUrl}/accounts/me/terms`, (req, res, ctx) => {
  try {
    const db = getDb();
    const terms = db.accountTerms.findFirst({where: {accountId: {equals: accountId}}});
    return delayedResponse(ctx.json(terms), ctx.delay(100));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
