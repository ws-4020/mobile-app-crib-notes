import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/dbManager';

export const getTemplates = rest.get(`${backendUrl}/templates`, (req, res, ctx) => {
  try {
    const db = getDb();
    const templates = db.template.getAll();
    return delayedResponse(ctx.json(templates));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
