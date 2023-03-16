import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/dbManager';

export const getTags = rest.get(`${backendUrl}/tags`, (req, res, ctx) => {
  try {
    const db = getDb();
    const tags = db.tag.getAll();
    return delayedResponse(ctx.json(tags));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
