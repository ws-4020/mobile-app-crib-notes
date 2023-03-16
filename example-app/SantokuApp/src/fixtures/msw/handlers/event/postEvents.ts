import {EventContent, EventRegistration} from 'features/backend/apis/model';
import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {accountId, getDb} from '../../utils/dbManager';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';

export const postEvents = rest.post(`${backendUrl}/events`, async (req, res, ctx) => {
  try {
    const {title, content, endDate} = await req.json<EventRegistration>();
    const db = getDb();
    const account = db.account.findFirst({where: {accountId: {equals: accountId}}});
    if (!account) {
      return delayedResponse(ctx.status(401));
    }
    const event = {title, content, endDate, likes: 0, ...account};
    const savedEvent = db.event.create(event);
    return delayedResponse(
      ctx.status(201),
      ctx.json<EventContent>({
        eventId: savedEvent.eventId,
        title: savedEvent.title,
        content: savedEvent.content,
        endDate: savedEvent.endDate,
        likes: savedEvent.likes,
      }),
    );
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
