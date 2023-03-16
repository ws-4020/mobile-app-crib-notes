import {LikedEventResponse} from 'features/backend/apis/model';
import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {accountId, getDb} from '../../utils/dbManager';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';

export const getAccountsMeEventLikes = rest.get(`${backendUrl}/accounts/me/likes/events/:eventId`, (req, res, ctx) => {
  try {
    const eventId = String(req.params.eventId);
    const db = getDb();

    const event = db.eventLike.findFirst({
      where: {accountId: {equals: accountId}, eventId: {equals: eventId}},
    });

    return delayedResponse(ctx.json<LikedEventResponse>({eventId: event?.eventId}));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
