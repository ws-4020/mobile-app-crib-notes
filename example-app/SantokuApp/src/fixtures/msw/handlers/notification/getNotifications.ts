import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/dbManager';

export const getNotifications = rest.get(`${backendUrl}/notifications`, (req, res, ctx) => {
  try {
    const db = getDb();
    const notifications = db.notification.getAll();
    return delayedResponse(ctx.json(notifications));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
