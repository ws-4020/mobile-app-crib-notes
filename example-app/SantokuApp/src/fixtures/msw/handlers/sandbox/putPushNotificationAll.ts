import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {passthroughApiErrors} from '../../utils/passthrough';

export const putPushNotificationAll = rest.put(`${backendUrl}/sandbox/push-notification/all`, async (req, res, ctx) => {
  if (passthroughApiErrors.postLogin.length) {
    return delayedResponse(
      ctx.status(400),
      ctx.json({
        code: 'Unauthorized',
        message: 'Unauthorized to backend.',
      }),
    );
  } else if (passthroughApiErrors.postAccountsMeDeviceToken.length) {
    return delayedResponse(
      ctx.status(400),
      ctx.json({
        code: 'DeviceTokenNotFound',
        message: 'Device token not found.',
      }),
    );
  }
  return req.passthrough();
});
