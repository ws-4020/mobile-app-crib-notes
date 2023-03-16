import {RestContext} from 'msw';

import {delayedResponse} from './delayedResponse';

export const errorResponse = (e: unknown, ctx: RestContext) => {
  console.error(e);
  return delayedResponse(ctx.status(500), ctx.delay(100));
};
