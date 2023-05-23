import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {passthroughServiceErrors} from '../../utils/passthrough';

export const putPushNotificationAll = rest.put(`${backendUrl}/sandbox/push-notification/all`, async (req, res, ctx) => {
  if (passthroughServiceErrors.postLogin.length) {
    return delayedResponse(
      ctx.status(400),
      ctx.json({
        code: 'Unauthorized',
        message: 'Unauthorized to backend.',
      }),
    );
  } else if (passthroughServiceErrors.postAccountsMeDeviceToken.length) {
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
