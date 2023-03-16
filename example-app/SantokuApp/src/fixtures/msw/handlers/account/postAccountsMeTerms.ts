import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';
import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {accountId, getDb} from '../../utils/dbManager';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';

export const postAccountsMeTerms = rest.post(`${backendUrl}/accounts/me/terms`, async (req, res, ctx) => {
  try {
    const {hasAgreed, agreedVersion} = await req.json<TermsOfServiceAgreementStatus>();
    const db = getDb();

    const terms = db.accountTerms.findFirst({where: {accountId: {equals: accountId}}});
    if (terms) {
      db.accountTerms.update({where: {accountId: {equals: accountId}}, data: {hasAgreed, agreedVersion}});
    } else {
      db.accountTerms.create({accountId, hasAgreed, agreedVersion});
    }

    return delayedResponse(ctx.status(201), ctx.json<TermsOfServiceAgreementStatus>({hasAgreed, agreedVersion}));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
